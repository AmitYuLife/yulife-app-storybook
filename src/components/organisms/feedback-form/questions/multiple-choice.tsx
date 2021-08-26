import React, { useCallback, useState } from "react";
import { Button, Image, SecondaryButton, YugiHeader } from "@atoms";
import { View } from "react-native";
import { ScrollableLayout } from "@molecules";
import { styles, QuestionProps } from "./common";
import { FEEDBACK_FORM_QUESTION, FEEDBACK_TEXT_INPUT } from "@ids";
import { Style } from "@styles";
import { PendingPromptsForm_pendingFeedbackForm_questions_options as IOptions } from "@graphql/_core/schema";

interface Props extends QuestionProps {
  options: IOptions[];
}

export default (props: Props) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const {
    heading,
    image,
    questionText,
    description,
    icon,
    onSubmitAnswer,
    submitLabel,
    onDismiss,
    onBack,
    options,
  } = props;

  const handleOnPress = useCallback(
    (value: string) => {
      if (selectedQuestions.includes(value)) {
        return setSelectedQuestions(selectedQuestions.filter((question) => question !== value));
      }

      return setSelectedQuestions(selectedQuestions.concat(value));
    },
    [selectedQuestions]
  );

  return (
    <ScrollableLayout
      isBeta={false}
      heading={heading}
      onLeftIconPress={onBack}
      onRightIconPress={onDismiss}
      buttonTitle={submitLabel}
      isButtonDisabled={selectedQuestions.length === 0}
      buttonAction={() => onSubmitAnswer(selectedQuestions)}
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
          {options?.map((option) =>
            selectedQuestions.includes(option.value) ? (
              <SecondaryButton key={option.id} label={option.label} onPress={() => handleOnPress(option.value)} />
            ) : (
              <Button key={option.value} label={option.label} onPress={() => handleOnPress(option.value)} />
            )
          )}
        </View>
      </View>
    </ScrollableLayout>
  );
};
