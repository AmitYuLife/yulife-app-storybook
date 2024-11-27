import React from "react";
import { Image } from "@atoms";
import { Button, YugiHeader } from "@molecules";
import { View } from "react-native";
import { ScrollableLayout } from "@molecules";
import { styles, QuestionProps } from "./common";
import { FEEDBACK_FORM_QUESTION, FEEDBACK_TEXT_INPUT } from "@ids";
import { Style } from "@styles";
import { FeedbackFormQuestionOption } from "@graphql/__generated";
interface Props extends QuestionProps {
  options: FeedbackFormQuestionOption[];
}

export default ({
  heading,
  image,
  questionText,
  description,
  icon,
  onSubmitAnswer,
  onDismiss,
  onBack,
  options,
}: Props) => {
  return (
    <ScrollableLayout
      heading={heading}
      onLeftIconPress={onBack}
      onRightIconPress={onDismiss}
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
        <View style={styles.multipleChoice} testID={FEEDBACK_TEXT_INPUT}>
          {options?.map((option) => (
            <Button
              testID={`multiple-choice-${option.id}`}
              key={option.value}
              translatedLabel={option.label}
              onPress={() => onSubmitAnswer(option.value)}
            />
          ))}
        </View>
      </View>
    </ScrollableLayout>
  );
};
