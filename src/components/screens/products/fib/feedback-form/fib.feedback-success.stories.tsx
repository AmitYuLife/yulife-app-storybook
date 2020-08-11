import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibFeedbackSuccessScreen } from "./fib.feedback-success.screen";
import { withProvider } from "@components/storybook/withProvider";

function voidFunc(): void {
  return null;
}

storiesOf("FibFeedbackSuccessScreen", module)
  .addDecorator(withProvider)
  .add("default", () => <FibFeedbackSuccessScreen avatar={null} onContinue={voidFunc} onNavigateBack={voidFunc} />);
