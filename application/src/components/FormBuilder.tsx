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
const inpusComponentsDefault: Iinputs = {
  dropdown: Dropdown,
  select: Dropdown
};

/**
 * COMPONENT
 */
export const FormBuilder = ({
  inputs,
  inputComponents = {},
  values = {},
  onChange,
  ...props
}: IFormBuilder) => {
  const allInputComponents = { ...inpusComponentsDefault, ...inputComponents };

  return (
    <form {...props}>
      {Object.entries(inputs).map(([key, { type, ...props }]) => {
        const Component = allInputComponents[type];
        if (!Component)
          throw Error(`${type} type doesn't have Component associate`);

        const value = values[key];

        return (
          <div {...{ key }}>
            <Component
              {...{
                name: key,
                onChange: (value: string) => onChange({ key, value }),
                value,
                ...props
              }}
            />
          </div>
        );
      })}
    </form>
  );
};
