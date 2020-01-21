import React from "react";

/**
 * TYPES
 **/
interface IFieldText {
  value: string;
  onChange: Function;
}

/**
 * COMPONENT
 **/
export const FieldText = ({
  onChange: onChangeProps,
  value,
  ...props
}: IFieldText) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeProps(e, { value: e.target.value });

  return <input {...{ onChange, value, ...props }} />;
};
