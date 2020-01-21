import React from "react";

/**
 * TYPES
 **/
interface IFieldTextarea {
  value: string;
  onChange: Function;
}

/**
 * COMPONENT
 **/
export const FieldTextarea = ({
  value,
  onChange: onChangeProps,
  ...props
}: IFieldTextarea) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChangeProps(e, { value: e.target.value });

  return <textarea {...{ onChange, ...props }}>{value}</textarea>;
};
