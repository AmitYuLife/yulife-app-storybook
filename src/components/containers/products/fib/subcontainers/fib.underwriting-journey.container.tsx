import React, { memo, useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { data } from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState, getBirthday } from "@redux/product/product.selectors";
import { connect } from "react-redux";
import { findQuestion } from "../fib.helpers";

type ConnectedProps = ReturnType<typeof mapStateToProps>;
type Props = ConnectedProps & IFibUnderwritingJourneyContainer;

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
  const { navigation, medicalHistory } = props;

  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const activeIndex = data.findIndex((item) => item.id === currentQuestion.id);

  const onFirstButtonPressed = () => {
    const question = findQuestion(data, "firstButton", currentQuestion, medicalHistory);
    setCurrentQuestion(question);
  };

  const handleSetCurrentQuestion = () => {
    const question = findQuestion(data, "secondButton", currentQuestion, medicalHistory);
    setCurrentQuestion(question);
  };

  const onSecondButtonPressed = !currentQuestion.secondButton ? null : handleSetCurrentQuestion;

  const handleSetPreviousQuestion = () => {
    const question = findQuestion(data, "previousButton", currentQuestion, medicalHistory);
    setCurrentQuestion(question);
  };

  const onPreviousButtonPressed = !currentQuestion.previousButton ? null : handleSetPreviousQuestion;

  const progressBar = {
    currentPosition: currentQuestion.order,
    maxLength: data.length,
  };

  return (
    <FIBProgressBar.ProgressBarContext.Provider value={progressBar}>
      <FibUnderwritingJourneyScreen
        onNavigateBack={navigation.pop}
        data={currentQuestion}
        onFirstButtonPressed={onFirstButtonPressed}
        onSecondButtonPressed={onSecondButtonPressed}
        onPreviousButtonPressed={onPreviousButtonPressed}
        progressBar={{ maxLength: data.length, currentPosition: activeIndex + 1 }}
      />
    </FIBProgressBar.ProgressBarContext.Provider>
  );
});

const mapStateToProps = (state: IReduxState) => ({
  dateOfBirth: getBirthday(state),
  fullName: getFIBState(state).fullName,
  medicalHistory: getFIBState(state).medicalHistory,
});

export default connect(mapStateToProps)(FibUnderwritingJourneyContainer);
