import React from "react";
import { IOptions } from "./FieldDropdown";

/**
 * TYPES
 **/
interface IFieldRadio {
  value: string;
  options?: IOptions;
  onChange: Function;
}

/**
 * COMPONENT
 **/
export const FieldRadio = ({
  value: currentValue,
  options,
  onChange: onChangeProps,
  ...props
}: IFieldRadio) => {
  if (!options) throw new Error("Options is missing");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeProps(e, { value: e.target.value });

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
                  checked: currentValue === value,
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
