import React from "react";
import { CheckBox } from "@atoms";

interface Props {
  selectedValue: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (val: string) => void;
}

function RadioInput(props: Props) {
  return (
    <>
      {props.options.map(({ label, value }) => {
        return (
          <CheckBox
            key={value}
            checked={value === props.selectedValue}
            value={value}
            label={label}
            onChange={props.onChange}
          />
        );
      })}
    </>
  );
}

export default RadioInput;
