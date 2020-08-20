import React, { useState } from "react";
import { SliderInput, Heading } from "@atoms";
import { View, StyleSheet } from "react-native";
import { SliderInputProps, MaxValue } from "@atoms/slider-input/slider-input";
import { ScrollableLayout } from "@molecules";
import { YugiSvg } from "./yugi-svg";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export const npsScreenData = {
  maxScore: 10 as MaxValue,
  content: [
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

export interface SliderFeedbackModalProps {
  slider: SliderInputProps;
  textInputScreenContent: Content[];
}

function dismissModal() {
  return Navigation.dismissModal(MODALS.sliderFeedback);
}

function submitScore(score: number) {
  return score;
}

function submitFeedback(feedback: string) {
  return feedback;
}

function SliderFeedbackModal(props: SliderFeedbackModalProps) {
  const { slider, textInputScreenContent } = props;
  const [score, setScore] = useState(-1);
  const [shouldDisplaySecondScreen, setShouldDisplaySecondScreen] = useState(false);

  if (shouldDisplaySecondScreen) {
    return (
      <TextInputForm
        onBackPress={() => setShouldDisplaySecondScreen(false)}
        content={textInputScreenContent}
        score={score}
        onSubmit={(feedback) => {
          submitFeedback(feedback);
          dismissModal();
        }}
      />
    );
  }

  return (
    <SliderForm
      slider={slider}
      setScore={setScore}
      score={score}
      onSubmit={() => {
        submitScore(score);
        setShouldDisplaySecondScreen(true);
      }}
    />
  );
}

export default SliderFeedbackModal;

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
  content: Content[];
  score: number;
  onBackPress: () => void;
  onSubmit: (val: string) => void;
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
  const { content, score, onSubmit, onBackPress } = props;
  const [feedback, setFeedback] = useState("");

  const contentToDisplay = getContentToDisplay(score, content);

  return (
    <ScrollableLayout
      heading="Feedback"
      onLeftIconPress={onBackPress}
      buttonTitle="Submit feedback"
      buttonAction={() => onSubmit(feedback)}
    >
      <View style={styles.content}>
        <Heading style={styles.heading} label={contentToDisplay.headingText} />

        <View style={styles.yugiWrapper}>
          <YugiSvg />
        </View>
        <View style={styles.inputWrapper}>
          <MultilineTextInput onChange={setFeedback} value={feedback} placeholder={contentToDisplay.placeholderText} />
        </View>
      </View>
    </ScrollableLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    width: Style.DEVICE_WIDTH,
    paddingVertical: 80,
    height: "100%",
    paddingHorizontal: 35,
  },
  heading: {
    textAlign: "left",
    width: "70%",
  },
  inputWrapper: {
    marginTop: 40,
  },
  yugiWrapper: {
    position: "absolute",
    right: 0,
    top: 60,
  },
});
