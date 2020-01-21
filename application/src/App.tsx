import React, { useState, useEffect } from "react";
import { FormBuilder } from "./components/FormBuilder";

interface onChangeType {
  key: string;
  value: string;
}

const App: React.FC = () => {
  const [state, setState] = useState({});
  const onChange = (
    e: React.ChangeEvent<any>,
    { key, value }: onChangeType
  ) => {
    setState({ ...state, [key]: value });
  };
  useEffect(() => {
    console.log("STATE", state);
  }, [state]);

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
        inputs: {
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
        },

        onError,
        onChange,

        errors,
        values: state
      }}
    />
  );
};

export default App;
