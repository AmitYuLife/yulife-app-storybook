import React, { useState } from "react";
import { Heading } from "@atoms";
import { View, Keyboard } from "react-native";
import { ScrollableLayout } from "@molecules";
import { YugiSvg } from "../assets/yugi-svg";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { styles, QuestionProps } from "./common";

interface Props extends QuestionProps {
  placeholder?: string;
}

export default (props: Props) => {
  const {
    heading,
    questionText,
    submitLabel,
    placeholder,
    defaultAnswer = "",
    onSubmitAnswer,
    onDismiss,
    onBack,
  } = props;
  const [feedback, setFeedback] = useState(defaultAnswer);

  const onSubmit = () => onSubmitAnswer(feedback);

  return (
    <ScrollableLayout
      isBeta={false}
      heading={heading}
      onLeftIconPress={onBack}
      onRightIconPress={onDismiss}
      buttonTitle={submitLabel}
      isButtonDisabled={feedback.length === 0}
      buttonAction={() => {
        Keyboard.dismiss();
        return onSubmit();
      }}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label={questionText} bold={true} />
        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>
        <View style={styles.inputWrapper}>
          <MultilineTextInput value={feedback} onChange={setFeedback} placeholder={placeholder} />
        </View>
      </View>
    </ScrollableLayout>
  );
};
