import React from "react";

/**
 * TYPES
 */
interface IOption {
  text: string;
}
export interface IOptions {
  [value: string]: IOption;
}
export interface IDropdown {
  onChange: Function;
  value: string;
  options?: IOptions;
  placeholder?: string;
}

/**
 * COMPONENT
 */
export const Dropdown = ({
  onChange: onChangeProps,
  options,
  placeholder,
  value,
  ...props
}: IDropdown) => {
  if (!options) throw new Error("Options is missing");

  const PLACEHOLDER_VALUE = "rfb-placeholder";
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeProps(e.target.value);
  };

  return (
    <select
      {...{
        placeholder,
        defaultValue: PLACEHOLDER_VALUE,
        value,
        onChange,
        ...props
      }}
    >
      {placeholder && (
        <option {...{ value: PLACEHOLDER_VALUE }} disabled>
          {placeholder}
        </option>
      )}
      {Object.entries(options).map(([value, { text }]) => {
        return <option {...{ key: value, value }}>{text}</option>;
      })}
    </select>
  );
};
