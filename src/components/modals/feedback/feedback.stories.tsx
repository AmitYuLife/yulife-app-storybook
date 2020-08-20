import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import SliderFeedbackModal from "./slider-feedback.modal";

const textInputScreenContent = [
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
];

storiesOf("Feedback", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Slider Feedback Modal", () => {
    return (
      <SliderFeedbackModal
        textInputScreenContent={textInputScreenContent}
        slider={{ leftLabel: "Bad stuff", rightLabel: "Good stuff", maxValue: 10 }}
      />
    );
  });
