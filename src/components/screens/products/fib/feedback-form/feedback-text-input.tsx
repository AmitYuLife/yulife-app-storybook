import React from "react";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";

interface Props {
  handleChangeText: (val: string) => void;
  textValue: string;
  onFocus: () => void;
}

function FeedbackTextInput(props: Props) {
  const { handleChangeText, textValue, onFocus } = props;

  return (
    <MultilineTextInput
      key="textArea"
      placeholder="Write your answer here"
      value={textValue}
      onChange={handleChangeText}
      onFocus={onFocus}
    />
  );
}

export default FeedbackTextInput;
