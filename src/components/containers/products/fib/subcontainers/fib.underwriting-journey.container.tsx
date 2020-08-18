import React, { memo, useState } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import { data } from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState, getBirthday } from "@redux/product/product.selectors";
import { connect } from "react-redux";
import {
  buildMedicalHistoryJourney,
  LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID,
  FIRST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID,
  BUILD_MEDICAL_JOURNEY_ID,
  findQuestion,
} from "../fib.helpers";

type ConnectedProps = ReturnType<typeof mapStateToProps>;
type Props = ConnectedProps & IFibUnderwritingJourneyContainer;

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
}

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
  const { navigation, medicalHistory } = props;

  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const activeIndex = data.findIndex((item) => item.id === currentQuestion.id);

  const [isMedicalJourney, setIsMedicalJourney] = useState(false);
  const [medicalHistoryData, setMedicalHistoryData] = useState(null);

  const getQuestionData = (isPartOfMedicalJourney: boolean, goToQuestionId: string) => {
    const isNotKeyScreen =
      goToQuestionId !== LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID &&
      goToQuestionId !== FIRST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID;
    if (isPartOfMedicalJourney && isNotKeyScreen) {
      return medicalHistoryData;
    }

    return data;
  };

  const onFirstButtonPressed = () => {
    if (currentQuestion.firstButton.actionId === BUILD_MEDICAL_JOURNEY_ID) {
      setIsMedicalJourney(true);
      const localMedicalHistoryData = buildMedicalHistoryJourney(
        data,
        medicalHistory,
        currentQuestion,
        setMedicalHistoryData
      );
      // Set current question from new journey
      setCurrentQuestion(localMedicalHistoryData[0]);
    } else if (currentQuestion.firstButton.actionId === LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID) {
      // Disable medical journey, back to normal journey
      setIsMedicalJourney(false);
      setCurrentQuestion(findQuestion(data, "firstButton", currentQuestion));
    } else {
      // Default behavior
      setCurrentQuestion(
        findQuestion(
          getQuestionData(isMedicalJourney, currentQuestion.firstButton.actionId),
          "firstButton",
          currentQuestion
        )
      );
    }
  };

  const handleSetCurrentQuestion = () => {
    if (currentQuestion.secondButton.actionId === LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID) {
      // Disable medical journey, back to normal journey
      setIsMedicalJourney(false);
      setCurrentQuestion(findQuestion(data, "firstButton", currentQuestion));
    } else {
      // Default behavior
      setCurrentQuestion(
        findQuestion(
          getQuestionData(isMedicalJourney, currentQuestion.secondButton.actionId),
          "secondButton",
          currentQuestion
        )
      );
    }
  };

  const onSecondButtonPressed = !currentQuestion.secondButton ? null : handleSetCurrentQuestion;

  const handleSetPreviousQuestion = () => {
    if (currentQuestion.previousButton.actionId === FIRST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID) {
      // Disable medical journey,
      setIsMedicalJourney(false);
      setCurrentQuestion(findQuestion(data, "previousButton", currentQuestion));
    } else if (currentQuestion.previousButton.actionId === LAST_MEDICAL_HISTORY_JOURNEY_SCREEN_ID) {
      // Enable medical journey,
      setIsMedicalJourney(true);
      // Set current question from new journey
      setCurrentQuestion(medicalHistoryData[medicalHistoryData.length - 1]);
    } else {
      setCurrentQuestion(
        findQuestion(
          getQuestionData(isMedicalJourney, currentQuestion.previousButton.actionId),
          "previousButton",
          currentQuestion
        )
      );
    }
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
