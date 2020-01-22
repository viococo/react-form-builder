import React, { ComponentProps } from "react";
import { FormGroup, Label, Input } from "reactstrap";

import { IOptions } from "./FieldDropdown";

/**
 * TYPES
 **/
interface IFieldCheckbox
  extends Omit<ComponentProps<typeof Input>, "onChange"> {
  value: Array<string>;
  options?: IOptions;
  onChange: Function;
}

/**
 * COMPONENT
 **/
export const FieldCheckbox = ({
  className,
  value: currentValues = [],
  options,
  onChange: onChangeProps,
  ...props
}: IFieldCheckbox) => {
  if (!options) throw new Error("Options is missing");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter(e => e !== value);
    } else currentValues = [...currentValues, value];

    return onChangeProps(e, { value: currentValues });
  };

  return (
    <div {...{ className }}>
      {Object.entries(options).map(([value, { text }]) => {
        return (
          <FormGroup check {...{ key: value }}>
            <Label check>
              <Input
                {...{
                  value,
                  onChange,
                  checked: currentValues.includes(value),
                  ...props
                }}
              />
              {text}
            </Label>
          </FormGroup>
        );
      })}
    </div>
  );
};
