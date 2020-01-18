import React from "react";

/**
 * TYPES
 */
export interface IDropdown {
  onChange: Function;
  options: IOptions;
  value: string;
  placeholder?: string;
}
interface IOption {
  text: string;
}
export interface IOptions {
  [value: string]: IOption;
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
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChangeProps(e.target.value);
  const PLACEHOLDER_VALUE = "rfbPlaceholder";

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
