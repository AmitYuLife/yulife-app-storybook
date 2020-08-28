import React, { memo, useState, useCallback } from "react";
import {
  FibLocalNavigation,
  FIB_UNDERWRITING_REVIEW_ANSWERS,
  FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
} from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import {
  data,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_ENTER_YOUR_NAME,
  FIB_ENTER_YOUR_DATE_OF_BIRTH,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
} from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState, getBirthday } from "@redux/product/product.selectors";
import { connect, useDispatch } from "react-redux";
import { updateFIBValue, updateFIBAnswerValue, resetFIBMedicalHistoryValue } from "@redux/product/product.actions";
import { findQuestion, FibButtonType } from "../fib.helpers";
import { FibAnswers } from "@redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

type ConnectedProps = ReturnType<typeof mapStateToProps>;
type ConnecteDispatch = typeof mapDispatchToProps;
type Props = ConnectedProps & ConnecteDispatch & IFibUnderwritingJourneyContainer;

interface IFibUnderwritingJourneyContainer {
  navigation: FibLocalNavigation;
  initialQuestionId?: string;
}

const FibUnderwritingJourneyContainer = memo(function (props: Props) {
  const { navigation, medicalHistory, updateFibAnswer, initialQuestionId, fibAnswers } = props;
  const dispatch = useDispatch();

  const { redirectedFromReviewScreen, initialQuestionIdFromReviewScreen } = navigation.currentRoute.passProps;

  const initialQuestion =
    data.find((question) => question.id === initialQuestionId || question.id === initialQuestionIdFromReviewScreen) ||
    data[0];

  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const activeIndex = data.findIndex((item) => item.id === currentQuestion.id);

  const updateAnswer = (questionId: string, value: string, answers: FibAnswers): FibAnswers => {
    updateFibAnswer(questionId, value);

    if (questionId === "fib_medical_three_or_more_consultation" && value === "No") {
      for (const key of Object.keys(answers)) {
        if (key.includes("medical_journey")) {
          updateFibAnswer(key, "");
        }
      }

      dispatch(resetFIBMedicalHistoryValue());
    }

    return { ...answers, [questionId]: value };
  };

  const navigateToReviewScreenOrFindNextQuestion = (localAnswers: FibAnswers, buttonType: FibButtonType) => {
    if (redirectedFromReviewScreen) {
      if (initialQuestion.category) {
        const nextQuestion = findQuestion({
          data,
          buttonType,
          currentQuestion,
          medicalHistory,
          answers: localAnswers || fibAnswers,
        });

        if (!nextQuestion?.id.includes(initialQuestion.category)) {
          return navigation.pop();
        }
      } else if (initialQuestion.nextQuestionBeforeQuit) {
        const nextQuestion = findQuestion({
          data,
          buttonType,
          currentQuestion,
          medicalHistory,
          answers: localAnswers || fibAnswers,
        });

        if (nextQuestion.id === initialQuestion.nextQuestionBeforeQuit) {
          return navigation.pop();
        }
      } else {
        return navigation.pop();
      }
    }
  };

  const onFirstButtonPressed = () => {
    let localAnswers;
    if (shouldAnswerBeStored(currentQuestion.firstButton.label, currentQuestion.id)) {
      localAnswers = updateAnswer(currentQuestion.id, currentQuestion.firstButton.label, fibAnswers);
      if (currentQuestion.firstButton.answersIdToInvalidate) {
        currentQuestion.firstButton.answersIdToInvalidate.map((answerIdToInvalidate) => {
          updateFibAnswer(answerIdToInvalidate, "");
        });
      }
    }

    navigateToReviewScreenOrFindNextQuestion(localAnswers, "firstButton");

    if (currentQuestion.firstButton.actionId === FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID) {
      dispatch(updateFIBValue({ key: "lastQuestionId", value: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID }));
      return navigation.push(FIB_UNDERWRITING_REVIEW_ANSWERS);
    }

    const question = findQuestion({
      data,
      buttonType: "firstButton",
      currentQuestion,
      medicalHistory,
      answers: localAnswers || fibAnswers,
    });
    dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    setCurrentQuestion(question);
  };

  const handleSetCurrentQuestion = () => {
    let localAnswers;
    if (shouldAnswerBeStored(currentQuestion.secondButton.label, currentQuestion.id)) {
      localAnswers = updateAnswer(currentQuestion.id, currentQuestion.secondButton.label, fibAnswers);
      if (currentQuestion.secondButton.answersIdToInvalidate) {
        currentQuestion.secondButton.answersIdToInvalidate.map((answerIdToInvalidate) => {
          updateFibAnswer(answerIdToInvalidate, "");
        });
      }
    }

    navigateToReviewScreenOrFindNextQuestion(localAnswers, "secondButton");

    const question = findQuestion({
      data,
      buttonType: "secondButton",
      currentQuestion,
      medicalHistory,
      answers: localAnswers || fibAnswers,
    });
    dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    setCurrentQuestion(question);
  };

  const onSecondButtonPressed = !currentQuestion.secondButton ? null : handleSetCurrentQuestion;

  const handleSetPreviousQuestion = () => {
    const question = findQuestion({
      data,
      buttonType: "previousButton",
      currentQuestion,
      medicalHistory,
      answers: fibAnswers,
    });
    dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    setCurrentQuestion(question);
  };

  const onPreviousButtonPressed =
    !currentQuestion.previousButton || initialQuestionIdFromReviewScreen === currentQuestion.id
      ? null
      : handleSetPreviousQuestion;

  const progressBar = {
    currentPosition: currentQuestion.order,
    maxLength: data.length,
  };

  let disableFirstButton = false;
  if (currentQuestion.id === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
    disableFirstButton = !Object.entries(medicalHistory)
      .map((entry) => {
        return entry[1] ? entry[0] : null;
      })
      .filter((e) => !!e).length;
  }

  if (currentQuestion.id === FIB_ENTER_YOUR_NAME) {
    disableFirstButton = !fibAnswers?.fib_your_name?.length;
  }

  if (currentQuestion.id === FIB_ENTER_YOUR_DATE_OF_BIRTH) {
    const { birthDay, birthMonth, birthYear } = fibAnswers;
    const isValidDates = !!Number(birthDay) && !!Number(birthMonth) && !!Number(birthYear);
    disableFirstButton = !isValidDates;
  }

  if (currentQuestion.id === FIB_LIFESTYLE_HEIGHT_SCREEN_ID) {
    if (fibAnswers.height.unit === "cm") {
      disableFirstButton = !fibAnswers.height.cm;
    } else {
      disableFirstButton = !fibAnswers.height.ft || !fibAnswers.height.in;
    }
  }

  if (currentQuestion.id === FIB_LIFESTYLE_WEIGHT_SCREEN_ID) {
    if (fibAnswers.weight.unit === "kg") {
      disableFirstButton = !fibAnswers.weight.kg;
    } else {
      disableFirstButton = !fibAnswers.weight.st || !fibAnswers.weight.lb;
    }
  }

  const onNavigateBackHandler = useCallback(async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
          },
          heading: "Exit",
          subheading: "Are you sure you want to exit? Your progressed will be saved",
          ctaLabel: "Stay",
          ctaLabelSecondary: "Exit",
          onPressSecondary: async () => {
            await Navigation.dismissModal(MODALS.generic);
            return navigation.pop();
          },
        },
      },
    });
  }, [navigation]);

  return (
    <FIBProgressBar.ProgressBarContext.Provider value={progressBar}>
      <FibUnderwritingJourneyScreen
        onNavigateBack={onNavigateBackHandler}
        data={currentQuestion}
        onFirstButtonPressed={onFirstButtonPressed}
        onSecondButtonPressed={onSecondButtonPressed}
        onPreviousButtonPressed={onPreviousButtonPressed}
        progressBar={{
          maxLength: data.length,
          currentPosition: activeIndex + 1,
          isHidden: redirectedFromReviewScreen ? true : false,
        }}
        disableFirstButton={disableFirstButton}
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
  fibAnswers: getFIBState(state).answers,
});

const mapDispatchToProps = {
  updateFibAnswer: (key: string, value: string) => updateFIBAnswerValue({ key, value }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FibUnderwritingJourneyContainer);
