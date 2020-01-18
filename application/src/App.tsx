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
          select: {
            type: "dropdown",
            placeholder: "select placehoder",
            options: {
              a: { text: "a" },
              b: { text: "b" },
              c: { text: "c" }
            }
          }
          // number: { type: "number" },
          // textarea: { type: "textarea" }
        },
        onChange,
        values: state
      }}
    />
  );
};

export default App;
