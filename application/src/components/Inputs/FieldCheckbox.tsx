import React from "react";
import { IOptions } from "./FieldDropdown";

/**
 * TYPES
 **/
type Ivalues = Array<string>;
interface IFieldCheckbox {
  value: Ivalues;
  options?: IOptions;
  onChange: Function;
}

/**
 * COMPONENT
 **/
export const FieldCheckbox = ({
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
    <div>
      {Object.entries(options).map(([value, { text }]) => {
        return (
          <div {...{ key: value }}>
            <label>
              <input
                {...{
                  value,
                  onChange,
                  checked: currentValues.includes(value),
                  ...props
                }}
              />
              {text}
            </label>
          </div>
        );
      })}
    </div>
  );
};
