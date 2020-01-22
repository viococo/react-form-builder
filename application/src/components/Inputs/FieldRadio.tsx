import React, { ComponentProps } from "react";
import { FormGroup, Label, Input } from "reactstrap";

import { IOptions } from "./FieldDropdown";

/**
 * TYPES
 **/
interface IFieldRadio extends Omit<ComponentProps<typeof Input>, "onChange"> {
  value: string;
  onChange: Function;
  options?: IOptions;
}

/**
 * COMPONENT
 **/
export const FieldRadio = ({
  className,
  onChange: onChangeProps,
  options,
  value: currentValue,
  ...props
}: IFieldRadio) => {
  if (!options) throw new Error("Options is missing");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeProps(e, { value: e.target.value });

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
                  checked: currentValue === value,
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
