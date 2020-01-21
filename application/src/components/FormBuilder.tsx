import React, { ComponentType } from "react";

// Import default inputs
import { FieldCheckbox } from "./Inputs/FieldCheckbox";
import { FieldDropdown, IOptions } from "./Inputs/FieldDropdown";
import { FieldRadio } from "./Inputs/FieldRadio";
import { FieldText } from "./Inputs/FieldText";
import { FieldTextarea } from "./Inputs/FieldTextarea";

/**
 * TYPES
 */
interface IFormBuilderInput {
  type: string;
  options?: IOptions;
  placeholder?: string;
}
// TODO: find a way to remove that "any"
interface Iinputs {
  [key: string]: ComponentType<any>;
}
interface IFormBuilder {
  inputs: { [key: string]: IFormBuilderInput };
  values: { [name: string]: string };
  onChange: Function;
  components?: Iinputs;
  errors?: { [name: string]: string };
  onError?: Function;
}

/**
 * DATA
 */
const inputsComponentsDefault: Iinputs = {
  checkbox: FieldCheckbox,
  dropdown: FieldDropdown,
  number: FieldText,
  password: FieldText,
  radio: FieldRadio,
  select: FieldDropdown,
  text: FieldText,
  textarea: FieldTextarea
};

/**
 * COMPONENT
 */
export const FormBuilder = ({
  errors = {},
  inputs,
  components = {},
  values = {},
  onChange,
  onError,
  ...props
}: IFormBuilder) => {
  const allInputComponents = { ...inputsComponentsDefault, ...components };

  return (
    <form {...props}>
      {Object.entries(inputs).map(([key, input]) => {
        const { type, ...props } = input;
        const Component = allInputComponents[type];
        if (!Component)
          throw ReferenceError(`${type} type doesn't have Component associate`);

        const { [key]: value } = values;
        const { [key]: error } = errors;

        return (
          <div {...{ key }}>
            <Component
              {...{
                error,
                type,
                value,
                name: key,
                onChange: (e: React.ChangeEvent<any>, { value }: any) =>
                  onChange(e, { key, value, input }),
                onError: (value: string) => onError && onError({ key, value }),
                ...props
              }}
            />
          </div>
        );
      })}
    </form>
  );
};
