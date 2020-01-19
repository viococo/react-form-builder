import React, { useState, useEffect } from "react";
import { FormBuilder } from "./components/FormBuilder";

interface onChangeType {
  key: string;
  value: any;
}

const App: React.FC = () => {
  const [state, setState] = useState();
  const onChange = ({ key, value }: onChangeType) => {
    setState({ ...state, [key]: value });
  };

  useEffect(() => {
    console.log("STATE", state);
  });

  return (
    <FormBuilder
      {...{
        inputs: {
          // text: { type: "text" },
          // number: { type: "number" },
          // textarea: { type: "textarea" }
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
          }
        },
        onChange,
        values: state
      }}
    />
  );
};

export default App;
