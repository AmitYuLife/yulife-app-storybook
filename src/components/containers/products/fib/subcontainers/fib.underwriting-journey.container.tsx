import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_REVIEW_ANSWERS } from "../fib.types";
import { FibUnderwritingJourneyScreen } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-journey.screen";
import {
  data,
  FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
  FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
  RELEVANT_SCREEN_ID_FOR_PRICES_UPDATES,
  FIB_ENTER_YOUR_NAME,
} from "../data/underwriting-journey-data";
import { FIBProgressBar } from "@organisms";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { connect, useDispatch } from "react-redux";
import { updateFIBValue, updateFIBAnswerValue, resetFIBMedicalHistoryValue } from "@redux/product/product.actions";
import {
  findQuestion as findNextQuestion,
  FibButtonType,
  shouldFirstButtonBeDisabled,
  shouldAnswerBeStored,
  FindFibQuestionOptions,
  shouldSecondButtonBeDisabled,
} from "../fib.helpers";
import { FibAnswers } from "@redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import {
  OrderedUnderwritingJourneyScreen,
  FIB_MEDICAL_FOLLOW_UP_QUESTIONS,
  MEDICAL_CHIPS_QUESTIONS,
} from "../data/underwriting-journey-data";

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
  const activeIndex = data.findIndex((item) => item.id === currentQuestion?.id) || 0;

  const [inputName, setInputName] = useState(fibAnswers.fib_your_name);

  const updateAnswer = (questionId: string, value: string, answers: FibAnswers): FibAnswers => {
    updateFibAnswer(questionId, value);

    if (questionId === FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID && value === "No") {
      for (const key of Object.keys(answers)) {
        if (key.includes("medical_journey")) {
          updateFibAnswer(key, "");
        }
      }

      dispatch(resetFIBMedicalHistoryValue());
    }

    return { ...answers, [questionId]: value };
  };

  const findQuestion = (options: FindFibQuestionOptions): OrderedUnderwritingJourneyScreen => {
    const newOptions = initialQuestionIdFromReviewScreen
      ? { ...options, initialQuesionIdFromReviewSession: initialQuestionIdFromReviewScreen }
      : options;
    const nextQuestion = findNextQuestion(newOptions, redirectedFromReviewScreen);
    return nextQuestion;
  };

  const navigateToReviewScreenOrFindNextQuestion = (
    localAnswers: FibAnswers,
    buttonType: FibButtonType,
    currentQuestionId: string
  ) => {
    if (!redirectedFromReviewScreen) {
      return;
    }

    if (RELEVANT_SCREEN_ID_FOR_PRICES_UPDATES.includes(currentQuestionId)) {
      dispatch(updateFIBValue({ key: "hasPriceChanged", value: true }));
    }

    if (!initialQuestion.category && !initialQuestion.nextQuestionBeforeQuit) {
      return navigation.pop();
    }

    const nextQuestion = findQuestion({
      data,
      buttonType,
      currentQuestion,
      medicalHistory,
      answers: localAnswers || fibAnswers,
    });

    if (initialQuestion.category && !nextQuestion?.id.includes(initialQuestion.category)) {
      return navigation.pop();
    }

    if (initialQuestion.nextQuestionBeforeQuit && nextQuestion.id === initialQuestion.nextQuestionBeforeQuit) {
      return navigation.pop();
    }
  };

  const onFirstButtonPressed = () => {
    let localAnswers: FibAnswers;
    if (shouldAnswerBeStored(currentQuestion.firstButton.label, currentQuestion.id)) {
      localAnswers = updateAnswer(currentQuestion.id, currentQuestion.firstButton.label, fibAnswers);
      if (currentQuestion.firstButton.answersIdToInvalidate) {
        currentQuestion.firstButton.answersIdToInvalidate.map((answerIdToInvalidate) => {
          updateFibAnswer(answerIdToInvalidate, "");
        });
      }
    }

    navigateToReviewScreenOrFindNextQuestion(localAnswers, "firstButton", currentQuestion.id);
    if (currentQuestion.id === FIB_ENTER_YOUR_NAME) {
      updateFibAnswer("fib_your_name", inputName);
    }

    if (currentQuestion.firstButton.actionId === FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID) {
      if (!redirectedFromReviewScreen) {
        dispatch(updateFIBValue({ key: "lastQuestionId", value: FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID }));
      }

      return navigation.push(FIB_UNDERWRITING_REVIEW_ANSWERS);
    }

    const question = findQuestion({
      data,
      buttonType: "firstButton",
      currentQuestion,
      medicalHistory,
      answers: localAnswers || fibAnswers,
    });
    if (!redirectedFromReviewScreen) {
      dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    }

    setCurrentQuestion(question);
  };

  const handleSetCurrentQuestion = () => {
    let localAnswers: FibAnswers;
    if (shouldAnswerBeStored(currentQuestion.secondButton.label, currentQuestion.id)) {
      localAnswers = updateAnswer(currentQuestion.id, currentQuestion.secondButton.label, fibAnswers);
      if (currentQuestion.secondButton.answersIdToInvalidate) {
        currentQuestion.secondButton.answersIdToInvalidate.map((answerIdToInvalidate) => {
          updateFibAnswer(answerIdToInvalidate, "");
        });
      }
    }

    if (MEDICAL_CHIPS_QUESTIONS.includes(currentQuestion.id)) {
      const isThereNoAnswer = MEDICAL_CHIPS_QUESTIONS.some((questionId) => localAnswers[questionId] === "No");

      if (!isThereNoAnswer) {
        FIB_MEDICAL_FOLLOW_UP_QUESTIONS.map((item) => {
          localAnswers = updateAnswer(item, "", localAnswers);
        });
      }
    }

    navigateToReviewScreenOrFindNextQuestion(localAnswers, "secondButton", currentQuestion.id);

    const question = findQuestion({
      data,
      buttonType: "secondButton",
      currentQuestion,
      medicalHistory,
      answers: localAnswers || fibAnswers,
    });
    if (!redirectedFromReviewScreen) {
      dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    }

    setCurrentQuestion(question);
  };

  const onSecondButtonPressed = !currentQuestion.secondButton ? null : handleSetCurrentQuestion;

  const handleSetPreviousQuestion = () => {
    if (redirectedFromReviewScreen && initialQuestionIdFromReviewScreen === currentQuestion.id) {
      return navigation.pop();
    }

    const question = findQuestion({
      data,
      buttonType: "previousButton",
      currentQuestion,
      medicalHistory,
      answers: fibAnswers,
    });
    if (!redirectedFromReviewScreen) {
      dispatch(updateFIBValue({ key: "lastQuestionId", value: question.id }));
    }

    setCurrentQuestion(question);
  };

  const onPreviousButtonPressed =
    !currentQuestion.previousButton && !redirectedFromReviewScreen ? null : handleSetPreviousQuestion;

  const progressBar = {
    currentPosition: currentQuestion.order,
    maxLength: data.length,
  };

  const disableFirstButton = shouldFirstButtonBeDisabled(medicalHistory, currentQuestion, fibAnswers, inputName);
  const disableSecondButton = shouldSecondButtonBeDisabled(currentQuestion, fibAnswers);

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
        onNavigateBack={redirectedFromReviewScreen ? null : onNavigateBackHandler}
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
        inputName={inputName}
        setInputName={setInputName}
        disableSecondButton={disableSecondButton}
      />
    </FIBProgressBar.ProgressBarContext.Provider>
  );
});

const mapStateToProps = (state: IReduxState) => ({
  fullName: getFIBState(state).answers.fib_your_name,
  medicalHistory: getFIBState(state).medicalHistory,
  fibAnswers: getFIBState(state).answers,
});

const mapDispatchToProps = {
  updateFibAnswer: (key: string, value: string) => updateFIBAnswerValue({ key, value }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FibUnderwritingJourneyContainer);
