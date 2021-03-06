import React, { useState, useEffect } from "react";
import { FormBuilder } from "./components/FormBuilder";

interface onChangeType {
  key: string;
  value: string;
}

const inputs = {
  checkbox: {
    type: "checkbox",
    options: {
      a: { text: "checkbox a" },
      b: { text: "checkbox b" },
      c: { text: "checkbox c" }
    }
  },
  radio: {
    type: "radio",
    options: {
      a: { text: "radio a" },
      b: { text: "radio b" },
      c: { text: "radio c" }
    }
  },

  dropdown: {
    type: "dropdown",
    placeholder: "dropdown placehoder",
    options: {
      a: { text: "dropdown a" },
      b: { text: "dropdown b" },
      c: { text: "dropdown c" }
    }
  },
  select: {
    type: "select",
    placeholder: "select placehoder",
    options: {
      a: { text: "select a" },
      b: { text: "select b" },
      c: { text: "select c" }
    }
  },

  number: { type: "number" },
  plop: { type: "password" },
  text: { type: "text" },
  textarea: { type: "textarea", placeholder: "toto" }
};

const App: React.FC = () => {
  const [values, setValues] = useState({});
  const onChange = (
    e: React.ChangeEvent<any>,
    { key, value }: onChangeType
  ) => {
    setValues({ ...values, [key]: value });
  };
  useEffect(() => {
    console.log("VALUES", values);
  }, [values]);

  const [errors, setErrors] = useState({});
  const onError = ({ key, value }: onChangeType) => {
    setErrors({ ...errors, [key]: value });
  };
  useEffect(() => {
    console.log("ERRORS", errors);
  }, [errors]);

  return (
    <FormBuilder
      {...{
        inputs,

        onError,
        onChange,

        errors,
        values
      }}
    />
  );
};

export default App;
