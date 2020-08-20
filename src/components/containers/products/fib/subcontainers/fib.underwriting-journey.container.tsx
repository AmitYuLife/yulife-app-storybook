import React, { memo, useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { data } from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState, getBirthday } from "@redux/product/product.selectors";
import { connect } from "react-redux";
import { findQuestion } from "../fib.helpers";
import { updateFIBAnswerValue } from "../../../../../redux/product/product.actions";

type ConnectedProps = ReturnType<typeof mapStateToProps>;
type ConnecteDispatch = typeof mapDispatchToProps;
type Props = ConnectedProps & ConnecteDispatch & IFibUnderwritingJourneyContainer;

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
  const { navigation, medicalHistory, updateAnswer } = props;

  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const activeIndex = data.findIndex((item) => item.id === currentQuestion.id);

  const onFirstButtonPressed = () => {
    if (shouldAnswerBeStored(currentQuestion.firstButton.label, currentQuestion.id)) {
      updateAnswer(currentQuestion.id, currentQuestion.firstButton.label);
    }

    const question = findQuestion(data, "firstButton", currentQuestion, medicalHistory);
    setCurrentQuestion(question);
  };

  const handleSetCurrentQuestion = () => {
    if (shouldAnswerBeStored(currentQuestion.secondButton.label, currentQuestion.id)) {
      updateAnswer(currentQuestion.id, currentQuestion.secondButton.label);
    }

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

const shouldAnswerBeStored = (label: string, currentQuestionId: string) => {
  return (
    (label === "Yes" || label === "No") &&
    currentQuestionId !== "fib_your_name" &&
    currentQuestionId !== "fib_your_date_of_birth"
  );
};

const mapStateToProps = (state: IReduxState) => ({
  dateOfBirth: getBirthday(state),
  fullName: getFIBState(state).answers.fib_your_name,
  medicalHistory: getFIBState(state).medicalHistory,
});

const mapDispatchToProps = {
  updateAnswer: (key: string, value: string) => updateFIBAnswerValue({ key, value }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FibUnderwritingJourneyContainer);
