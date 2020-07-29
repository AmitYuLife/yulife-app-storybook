import React, { useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibFeedbackFormScreen } from "@components/screens/products/fib/feedback-form/fib.feedback-form.screen";
import FibFeedbackSuccessScreen from "@components/screens/products/fib/feedback-form/fib.feedback-success.screen";

interface Props {
  navigation: FibLocalNavigation;
}

function FibFeedbackFormContainer(props: Props) {
  const { navigation } = props;
  const [displaySuccessScreen, setDisplaySuccessScreenState] = useState(false);

  function onNavigateBack() {
    return navigation.pop();
  }

  function onNavigateToMain() {
    return navigation.popToMain();
  }

  if (displaySuccessScreen) {
    return (
      <FibFeedbackSuccessScreen
        onContinue={onNavigateToMain}
        onNavigateBack={() => setDisplaySuccessScreenState(false)}
      />
    );
  }

  return (
    <FibFeedbackFormScreen onContinue={() => setDisplaySuccessScreenState(true)} onNavigateBack={onNavigateBack} />
  );
}

export default FibFeedbackFormContainer;
