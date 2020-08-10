import React, { memo, useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { data } from "../data/underwriting-journey-data";

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

const FibUnderwritingJourneyContainer = memo(function (props: IFibUnderwritingJourneyContainer) {
  const { navigation } = props;
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const onFirstbuttonPressed = () => {
    setCurrentQuestion(data.find((element) => currentQuestion.firstButton.actionId === element.id));
  };

  const handleSetCurrentQuestion = () => {
    setCurrentQuestion(data.find((element) => currentQuestion.secondButton.actionId === element.id));
  };

  const onSecondButtonPressed = !currentQuestion.secondButton ? null : handleSetCurrentQuestion;

  const hadleSetPreviousQuestion = () => {
    setCurrentQuestion(data.find((element) => currentQuestion.previousButton.actionId === element.id));
  };

  const onPreviousButtonPressed = !currentQuestion.previousButton ? null : hadleSetPreviousQuestion;

  return (
    <FibUnderwritingJourneyScreen
      onNavigateBack={() => navigation.pop()}
      data={currentQuestion}
      onFirstButtonPressed={onFirstbuttonPressed}
      onSecondButtonPressed={onSecondButtonPressed}
      onPreviousButtonPressed={onPreviousButtonPressed}
    />
  );
});

export default FibUnderwritingJourneyContainer;
