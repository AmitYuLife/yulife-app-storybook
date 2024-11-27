import React, { useEffect, useState } from "react";
import { Image } from "@atoms";
import { View } from "react-native";
import { SliderInput, SliderInputProps, ScrollableLayout, YugiHeader } from "@molecules";
import { styles, QuestionProps } from "./common";
import { FEEDBACK_FORM_QUESTION } from "@ids";
import { Style } from "@styles";

interface Props extends QuestionProps {
  slider: SliderInputProps;
}

export default ({
  slider,
  questionText,
  description,
  icon,
  submitLabel = "submit",
  heading = `Feedback`,
  image,
  defaultAnswer,
  onSubmitAnswer,
  onDismiss,
  onBack,
}: Props) => {
  const defaultScore = parseInt(defaultAnswer);
  const defaultScoreValue = isNaN(defaultScore) ? -1 : defaultScore;
  const [score, setScore] = useState(defaultScoreValue);

  const submit = () => {
    onSubmitAnswer(score?.toString());
    setScore(-1);
  };

  useEffect(() => {
    setScore(defaultScoreValue);
  }, [defaultScoreValue]);

  return (
    <ScrollableLayout
      heading={heading}
      onRightIconPress={onDismiss}
      onLeftIconPress={onBack}
      buttonTitle={submitLabel}
      buttonAction={submit}
      isButtonDisabled={score === -1}
      shouldCenterContent={true}
    >
      {!image ? null : (
        <Image
          source={{ uri: image }}
          width={Style.adjust(320)}
          height={Style.adjust(320)}
          theme="light"
          style={styles.image}
        />
      )}

      <View style={styles.yugiHeader}>
        <YugiHeader
          testID={FEEDBACK_FORM_QUESTION(questionText)}
          title={questionText}
          description={description}
          iconUrl={icon}
        />
      </View>
      <View style={styles.content}>
        <SliderInput
          score={score}
          onChange={setScore}
          leftLabel={slider.leftLabel}
          rightLabel={slider.rightLabel}
          maxValue={slider.maxValue}
          minValue={slider.minValue}
        />
      </View>
    </ScrollableLayout>
  );
};
