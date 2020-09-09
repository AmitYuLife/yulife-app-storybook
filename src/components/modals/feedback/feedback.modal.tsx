import React, { useState, useCallback } from "react";
import { SliderInput, Heading } from "@atoms";
import { View, StyleSheet, Keyboard } from "react-native";
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
import { useBackHandler } from "@services/hooks/useBackHandler";

export const cesModalProps: FeedbackModalProps = {
  metric: Metric.CES,
  title: "How easy was it for you to get started in the app?",
  slider: {
    leftLabel: "Not easy at all",
    rightLabel: "Very easy",
    maxValue: 7,
  },
  textInputScreenContent: [
    {
      headingText: "Thank you! We’re so glad to have you on board!",
      placeholderText: "Help us by explaining your score...",
      minDisplayValue: 6,
    },
    {
      headingText: "Thank you for your score! What can we do better?",
      placeholderText: "Help us build an app that’s perfect for you...",
      minDisplayValue: 4,
    },
    {
      headingText: "We're sorry to hear that. How can we improve?",
      placeholderText: "Help us by explaining your score...",
      minDisplayValue: 0,
    },
  ],
};

export const npsModalProps: FeedbackModalProps = {
  metric: Metric.NPS,
  title: "How likely are you to recommend YuLife to a co-worker?",
  slider: {
    leftLabel: "Not at all likely",
    rightLabel: "Extremely likely",
    maxValue: 10,
  },
  textInputScreenContent: [
    {
      headingText: "Thank you! We’re so glad to have you on board!",
      placeholderText: "Help us by explaining your score...",
      minDisplayValue: 8,
    },
    {
      headingText: "Thank you for your score! What can we do better?",
      placeholderText: "Help us build an app that’s perfect for you...",
      minDisplayValue: 5,
    },
    {
      headingText: "We’re sorry you’re having a hard time. What’s one thing we can do to improve?",
      placeholderText: "Help us by explaining your score...",
      minDisplayValue: 0,
    },
  ],
};

export interface FeedbackModalProps {
  metric: Metric;
  title: string;
  slider: SliderInputProps;
  textInputScreenContent: Content[];
}

function dismissModal() {
  return Navigation.dismissModal(MODALS.feedback);
}

function FeedbackModal(props: FeedbackModalProps) {
  const { slider, textInputScreenContent, metric, title } = props;
  const [addUserSatisfactionFeedback, { loading }] = useMutation<AddUserFeedbackMutationTuple>(GQL_ADD_USER_FEEDBACK);

  const [score, setScore] = useState(-1);
  const [comment, setComment] = useState("");
  const [shouldDisplaySecondScreen, setShouldDisplaySecondScreen] = useState(false);

  const handleSubmit = useCallback(async () => {
    try {
      await addUserSatisfactionFeedback({
        variables: {
          rating: score,
          metric,
          comment,
        },
      });
    } catch (e) {
      // silent fail
    }

    await dismissModal();
  }, [score, metric, comment, addUserSatisfactionFeedback]);

  if (shouldDisplaySecondScreen) {
    return (
      <TextInputForm
        onBackPress={() => setShouldDisplaySecondScreen(false)}
        onClose={handleSubmit}
        content={textInputScreenContent}
        score={score}
        updateFeedback={(updatedFeedback) => setComment(updatedFeedback)}
        disableButton={loading}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <SliderForm
      slider={slider}
      title={title}
      onClose={handleSubmit}
      setScore={setScore}
      score={score}
      onSubmit={() => setShouldDisplaySecondScreen(true)}
    />
  );
}

export default FeedbackModal;

interface SliderFormProps {
  slider: SliderInputProps;
  score: number;
  title: string;
  setScore: (val: number) => void;
  onSubmit: () => void;
  onClose: () => void;
}

function SliderForm(props: SliderFormProps) {
  const { setScore, slider, onSubmit, score, onClose, title } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  return (
    <ScrollableLayout
      isBeta={false}
      heading="Feedback"
      onRightIconPress={onClose}
      buttonTitle="Submit your rating"
      buttonAction={onSubmit}
      isButtonDisabled={score === -1}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label={title} bold={true} />
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
  onClose: () => void;
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
  const { content, score, onSubmit, onBackPress, disableButton, updateFeedback, onClose } = props;

  const contentToDisplay = getContentToDisplay(score, content);

  const backHandler = useCallback(() => {
    onBackPress();
    return true;
  }, [onBackPress]);

  useBackHandler(backHandler);

  return (
    <ScrollableLayout
      isBeta={false}
      heading="Feedback"
      onLeftIconPress={onBackPress}
      onRightIconPress={onClose}
      buttonTitle="Submit feedback"
      isButtonDisabled={disableButton}
      buttonAction={() => {
        Keyboard.dismiss();
        return onSubmit();
      }}
      shouldCenterContent={true}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label={contentToDisplay.headingText} bold={true} />
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
    textAlign: "left",
    width: "75%",
    lineHeight: Style.adjust(36),
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
