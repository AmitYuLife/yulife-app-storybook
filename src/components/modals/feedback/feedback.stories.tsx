import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import FeedbackModal, { cesModalProps } from "./feedback.modal";

storiesOf("Feedback", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{g()}</View>
  ))
  .add("Feedback Modal", () => {
    return (
      <FeedbackModal
        metric={cesModalProps.metric}
        slider={cesModalProps.slider}
        textInputScreenContent={cesModalProps.textInputScreenContent}
      />
    );
  });
