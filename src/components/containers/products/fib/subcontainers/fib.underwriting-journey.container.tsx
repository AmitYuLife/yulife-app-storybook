import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { getData } from "../data/underwriting-journey-data";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState, getBirthday } from "@redux/product/product.selectors";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

type Props = ConnectedProps & IFibUnderwritingJourneyContainer;

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
  const { navigation, fullName, dateOfBirth } = props;
  const data = getData({ fullName, dateOfBirth });
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);

  const activeIndex = data.findIndex((item) => item.id === currentQuestion.id);

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
      onNavigateBack={navigation.pop}
      data={currentQuestion}
      onFirstButtonPressed={onFirstbuttonPressed}
      onSecondButtonPressed={onSecondButtonPressed}
      onPreviousButtonPressed={onPreviousButtonPressed}
      progressBar={{ maxLength: data.length, currentPosition: activeIndex + 1 }}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  dateOfBirth: getBirthday(state),
  fullName: getFIBState(state).fullName,
});

const redux = connect(mapStateToProps);

export default redux(FibUnderwritingJourneyContainer);
