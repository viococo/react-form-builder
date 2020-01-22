import React, { ComponentProps } from "react";
import { Input } from "reactstrap";

/**
 * TYPES
 **/
interface IFieldText extends Omit<ComponentProps<typeof Input>, "onChange"> {
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

  return <Input {...{ onChange, value, ...props }} />;
};
