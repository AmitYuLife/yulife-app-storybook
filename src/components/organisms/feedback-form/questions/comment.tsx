import React, { useState } from "react";
import { Image, YugiHeader } from "@atoms";
import { View, Keyboard } from "react-native";
import { ScrollableLayout } from "@molecules";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { styles, QuestionProps } from "./common";
import { FEEDBACK_FORM_QUESTION, FEEDBACK_TEXT_INPUT } from "@ids";
import { Style } from "@styles";

interface Props extends QuestionProps {
  placeholder?: string;
}

export default (props: Props) => {
  const {
    heading,
    image,
    questionText,
    description,
    icon,
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
        <View testID={FEEDBACK_TEXT_INPUT}>
          <MultilineTextInput value={feedback} onChange={setFeedback} placeholder={placeholder} />
        </View>
      </View>
    </ScrollableLayout>
  );
};
