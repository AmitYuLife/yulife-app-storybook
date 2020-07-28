import React from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibFeedbackFormScreen } from "@components/screens/products/fib/feedback-form/fib.feedback-form.screen";

interface Props {
  navigation: FibLocalNavigation;
}

function FibFeedbackFormContainer(props: Props) {
  const { navigation } = props;

  function onNavigateBack() {
    return navigation.pop();
  }

  function onNavigateToMain() {
    return navigation.popToMain();
  }

  return <FibFeedbackFormScreen onNavigateBack={onNavigateBack} onNavigateToMain={onNavigateToMain} />;
}

export default FibFeedbackFormContainer;
