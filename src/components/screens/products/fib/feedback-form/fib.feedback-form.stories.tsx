import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibFeedbackFormScreen, Props } from "./fib.feedback-form.screen";

const defaultProps: Props = {
  onNavigateBack: () => null,
  onNavigateToMain: () => null,
};

storiesOf("FibFeedbackFormScreen").add("default", () => <FibFeedbackFormScreen {...defaultProps} />);
