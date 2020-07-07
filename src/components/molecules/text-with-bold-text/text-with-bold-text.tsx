import { Text } from "@atoms/index";
import React from "react";
import { BOLD_REGEX } from "@services/constants";
import { TextStyle } from "react-native";

interface IProps {
  value: string;
  style?: TextStyle;
}

function TextWithBoldText(props: IProps) {
  const fields = props.value.split(BOLD_REGEX);

  if (fields.length === 1) {
    return <Text style={props.style}>{fields[0]}</Text>;
  }

  return (
    <Text style={props.style}>
      {fields.map((field, index) => (
        <Text key={`${field.slice(0, 8)}_${index}`} bold={index % 2 !== 0}>
          {field}
        </Text>
      ))}
    </Text>
  );
}

export default TextWithBoldText;
