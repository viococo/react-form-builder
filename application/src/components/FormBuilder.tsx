import React from "react";
import { Dropdown, IOptions } from "./Inputs/Dropdown";

/**
 * TYPES
 */
interface FormBuilderInputProps {
  type: string;
  options: IOptions;
  placeholder?: string;
}
interface inputsDefaultType {
  [key: string]: string | typeof Dropdown;
}
interface FormBuilderType {
  inputs: { [key: string]: FormBuilderInputProps };
  inputComponents?: inputsDefaultType;
  values: { [name: string]: string };
  onChange: Function;
}

/**
 * DATA
 */
const inputsDefault: inputsDefaultType = {
  dropdown: Dropdown
};

/**
 * COMPONENT
 */
export const FormBuilder = ({
  inputs,
  inputComponents,
  values = {},
  onChange
}: FormBuilderType) => {
  return (
    <form>
      {Object.entries(inputs).map(([key, { type, ...props }]) => {
        const Component =
          (inputComponents && inputComponents[type]) || inputsDefault[type];
        if (!Component)
          throw Error(`${type} type doesn't have Component associate`);

        const value = values[key];

        return (
          <div {...{ key }}>
            <Component
              {...{
                value,
                onChange: (value: string) => onChange({ key, value }),
                ...props
              }}
            />
          </div>
        );
      })}
    </form>
  );
};
