import React, { memo, useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { data } from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

type Props = IFibUnderwritingJourneyContainer;

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
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

  const progressBar = {
    currentPosition: currentQuestion.order,
    maxLength: data.length,
  };

  return (
    <FIBProgressBar.ProgressBarContext.Provider value={progressBar}>
      <FibUnderwritingJourneyScreen
        onNavigateBack={navigation.pop}
        data={currentQuestion}
        onFirstButtonPressed={onFirstbuttonPressed}
        onSecondButtonPressed={onSecondButtonPressed}
        onPreviousButtonPressed={onPreviousButtonPressed}
      />
    </FIBProgressBar.ProgressBarContext.Provider>
  );
});

export default FibUnderwritingJourneyContainer;
