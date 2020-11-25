import React, { useState } from "react";
import { SliderInput, Heading } from "@atoms";
import { View } from "react-native";
import { SliderInputProps } from "@atoms/slider-input/slider-input";
import { ScrollableLayout } from "@molecules";
import { YugiSvg } from "../assets/yugi-svg";
import { styles, QuestionProps } from "./common";
import { FEEDBACK_FORM_QUESTION } from "@ids";

interface Props extends QuestionProps {
  slider: SliderInputProps;
}

export default ({
  slider,
  questionText,
  submitLabel = "submit",
  heading = `Feedback`,
  defaultAnswer,
  onSubmitAnswer,
  onDismiss,
  onBack,
}: Props) => {
  const defaultScore = parseInt(defaultAnswer);
  const [score, setScore] = useState(isNaN(defaultScore) ? undefined : defaultScore);

  const submit = () => onSubmitAnswer(score?.toString());

  return (
    <ScrollableLayout
      isBeta={false}
      heading={heading}
      onRightIconPress={onDismiss}
      onLeftIconPress={onBack}
      buttonTitle={submitLabel}
      buttonAction={submit}
      isButtonDisabled={score === -1}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading
          style={styles.heading}
          label={questionText}
          bold={true}
          testID={FEEDBACK_FORM_QUESTION(questionText)}
        />
        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>
        <View style={styles.inputWrapper}>
          <SliderInput
            score={score}
            onChange={setScore}
            leftLabel={slider.leftLabel}
            rightLabel={slider.rightLabel}
            maxValue={slider.maxValue}
            minValue={slider.minValue}
          />
        </View>
      </View>
    </ScrollableLayout>
  );
};
