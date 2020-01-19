import React, { ComponentType } from "react";
import { Dropdown, IOptions } from "./Inputs/Dropdown";

/**
 * TYPES
 */
interface IFormBuilderInput {
  type: string;
  options?: IOptions;
  placeholder?: string;
}
interface Iinputs {
  // TODO: find a way to remove that "any"
  [key: string]: ComponentType<any>;
}
interface IFormBuilder {
  inputs: { [key: string]: IFormBuilderInput };
  values: { [name: string]: string };
  onChange: Function;
  inputComponents?: Iinputs;
}

/**
 * DATA
 */
const inputsDefault: Iinputs = {
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
}: IFormBuilder) => {
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
