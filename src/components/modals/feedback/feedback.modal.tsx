import React, { useState } from "react";
import { SliderInput, Heading } from "@atoms";
import { View, StyleSheet } from "react-native";
import { SliderInputProps } from "@atoms/slider-input/slider-input";
import { ScrollableLayout } from "@molecules";
import { YugiSvg } from "./yugi-svg";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { useMutation } from "@apollo/react-hooks";
import { GQL_ADD_USER_FEEDBACK, AddUserFeedbackMutationTuple } from "@graphql/member";
import { Metric } from "@graphql/_core/schema/globalTypes";

export const cesModalProps: FeedbackModalProps = {
  metric: Metric.CES,
  slider: {
    leftLabel: "Not easy at all",
    rightLabel: "Very easy",
    maxValue: 7,
  },
  textInputScreenContent: [
    {
      headingText: "Thank you! We’re so glad to have you on board!",
      placeholderText: "Help us by explaining your score",
      minDisplayValue: 6,
    },
    {
      headingText: "Thank you for your score! What can we do better?",
      placeholderText: "Help us build an app that’s perfect for you...",
      minDisplayValue: 4,
    },
    {
      headingText: "We're sorry to hear that. How can we improve?",
      placeholderText: "Help us by explaining your score",
      minDisplayValue: 0,
    },
  ],
};

export const npsModalProps: FeedbackModalProps = {
  metric: Metric.NPS,
  slider: {
    leftLabel: "Not easy at all",
    rightLabel: "Very easy",
    maxValue: 10,
  },
  textInputScreenContent: [
    {
      headingText: "Thank you! We’re so glad to have you on board!",
      placeholderText: "Help us by explaining your score",
      minDisplayValue: 8,
    },
    {
      headingText: "Thank you for your score! What can we do better?",
      placeholderText: "Help us build an app that’s perfect for you...",
      minDisplayValue: 5,
    },
    {
      headingText: "We're sorry to hear that. How can we improve?",
      placeholderText: "Help us by explaining your score",
      minDisplayValue: 0,
    },
  ],
};

export interface FeedbackModalProps {
  metric: Metric;
  slider: SliderInputProps;
  textInputScreenContent: Content[];
}

function dismissModal() {
  return Navigation.dismissModal(MODALS.feedback);
}

function FeedbackModal(props: FeedbackModalProps) {
  const { slider, textInputScreenContent, metric } = props;
  const [addUserSatisfactionFeedback, { loading }] = useMutation<AddUserFeedbackMutationTuple>(GQL_ADD_USER_FEEDBACK, {
    onCompleted: () => {
      dismissModal();
    },
  });

  const [score, setScore] = useState(-1);
  const [feedback, setFeedback] = useState("");
  const [shouldDisplaySecondScreen, setShouldDisplaySecondScreen] = useState(false);

  if (shouldDisplaySecondScreen) {
    return (
      <TextInputForm
        onBackPress={() => setShouldDisplaySecondScreen(false)}
        content={textInputScreenContent}
        score={score}
        updateFeedback={(updatedFeedback) => setFeedback(updatedFeedback)}
        disableButton={loading}
        onSubmit={() => {
          addUserSatisfactionFeedback({
            variables: {
              rating: score,
              metric,
              comment: feedback,
            },
          });
        }}
      />
    );
  }

  return (
    <SliderForm slider={slider} setScore={setScore} score={score} onSubmit={() => setShouldDisplaySecondScreen(true)} />
  );
}

export default FeedbackModal;

interface SliderFormProps {
  slider: SliderInputProps;
  score: number;
  setScore: (val: number) => void;
  onSubmit: () => void;
}

function SliderForm(props: SliderFormProps) {
  const { setScore, slider, onSubmit, score } = props;
  return (
    <ScrollableLayout
      heading="Feedback"
      onLeftIconPress={dismissModal}
      buttonTitle="Submit your rating"
      buttonAction={onSubmit}
      isButtonDisabled={score === -1}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label="How easy was it for you to get started in the app?" />

        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>

        <View style={styles.inputWrapper}>
          <SliderInput
            onChange={(val) => setScore(val)}
            leftLabel={slider.leftLabel}
            rightLabel={slider.rightLabel}
            maxValue={slider.maxValue}
          />
        </View>
      </View>
    </ScrollableLayout>
  );
}

interface Content {
  placeholderText: string;
  headingText: string;
  minDisplayValue: number;
}
interface TextInputFormProps {
  disableButton: boolean;
  content: Content[];
  score: number;
  updateFeedback: (feedback: string) => void;
  onBackPress: () => void;
  onSubmit: () => void;
}

function getContentToDisplay(score: number, content: Content[]) {
  return content
    .sort((a, b) => {
      if (a.minDisplayValue < b.minDisplayValue) {
        return 1;
      }

      return -1;
    })
    .find(({ minDisplayValue }) => minDisplayValue <= score);
}

function TextInputForm(props: TextInputFormProps) {
  const { content, score, onSubmit, onBackPress, disableButton, updateFeedback } = props;

  const contentToDisplay = getContentToDisplay(score, content);

  return (
    <ScrollableLayout
      heading="Feedback"
      onLeftIconPress={onBackPress}
      buttonTitle="Submit feedback"
      isButtonDisabled={disableButton}
      buttonAction={onSubmit}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label={contentToDisplay.headingText} />

        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>
        <View style={styles.inputWrapper}>
          <MultilineTextInput onChange={updateFeedback} placeholder={contentToDisplay.placeholderText} />
        </View>
      </View>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    width: Style.DEVICE_WIDTH,
    justifyContent: "flex-start",
    position: "relative",
    height: 320,
    paddingHorizontal: 35,
  },
  heading: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    textAlign: "left",
    width: "70%",
  },
  inputWrapper: {
    marginTop: 40,
  },
  yugiWrapper: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
