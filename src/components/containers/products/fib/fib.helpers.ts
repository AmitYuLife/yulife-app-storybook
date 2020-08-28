import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";
import {
  OrderedUnderwritingJourneyScreen,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_DIGESTIVE_SCREEN_ID,
  FIB_DIGESTIVE_EXTRA_SCREENS,
  FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
  FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
  FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
  FIB_HIGH_CHOLESTEROL_SCREEN_ID,
} from "./data/underwriting-journey-data";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import { updateFIBValue } from "@redux/product/product.actions";
import { FibAnswers } from "@redux/product/product.types";

export type FibButtonType = "firstButton" | "secondButton" | "previousButton";

export const packages = {
  common: {
    label: "Common",
  },
  rare: {
    label: "Rare",
  },
  epic: {
    label: "Epic",
  },
  custom: {
    label: "Custom",
  },
};

export function useCover(packageId: PackageId): [PackageId, (packageId: PackageId) => void] {
  const dispatch = useDispatch();
  const [selectedCoverType, selectCoverType] = useState<PackageId>(packageId);

  return useMemo(
    () => [
      selectedCoverType,
      function selectCover(newPackageId: PackageId) {
        selectCoverType(newPackageId);
        dispatch(
          updateFIBValue({
            key: "selectedPackage",
            value: newPackageId,
          })
        );
      },
    ],
    [selectedCoverType, dispatch]
  );
}

export function formatPrice(price: number | null) {
  if (!price) {
    return `£0.00`;
  }

  return `£${price.toFixed(2)}`;
}

export const calculatePayoutCalculatorItems = (
  userDateOfBirth: string,
  deceaseAgeIndexYear: number
): CalculatorItems => {
  const momentDateOfBirth = moment(userDateOfBirth);
  const customerAge = moment().diff(momentDateOfBirth, "years");
  const monthsTillBirthday = getMonthsTillBirthday(momentDateOfBirth);

  const maxAge = customerAge + 40 < 70 ? customerAge + 40 : 70;
  const maxMonth = maxAge === 70 ? 11 : moment().month(); // month index starts in 0

  const defaultPayoutEstimatorItems = {
    years: Array.from({ length: 40 })
      .map((_, i) => i + customerAge)
      .filter((y) => y < 71),
    months: Array.from({ length: 12 }).map((_, i) => i),
    max: {
      year: maxAge,
      month: maxMonth,
    },
    min: {
      year: customerAge,
      month: 12 - monthsTillBirthday,
    },
  };

  if (defaultPayoutEstimatorItems.min.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = !monthsTillBirthday
      ? defaultPayoutEstimatorItems.months.slice(0)
      : defaultPayoutEstimatorItems.months.slice(defaultPayoutEstimatorItems.min.month);
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  if (defaultPayoutEstimatorItems.max.year === defaultPayoutEstimatorItems.years[deceaseAgeIndexYear]) {
    const months = defaultPayoutEstimatorItems.months.filter((month) => month <= defaultPayoutEstimatorItems.max.month);
    const newItems = { ...defaultPayoutEstimatorItems, months };
    return newItems;
  }

  return defaultPayoutEstimatorItems;
};

function getMonthsTillBirthday(dateOfBirth: moment.Moment) {
  const monthOfBirth = dateOfBirth.month();
  const now = moment();
  const currentMonth = now.month();

  const addExtraMonth = dateOfBirth.date() > now.date() ? 1 : 0;
  if (monthOfBirth < currentMonth) {
    return 12 - (currentMonth - monthOfBirth) + addExtraMonth;
  }

  if (monthOfBirth === currentMonth) {
    // Same month case
    return addExtraMonth;
  }

  return monthOfBirth - currentMonth + addExtraMonth;
}

interface FindFibQuestionOptions {
  data: OrderedUnderwritingJourneyScreen[];
  buttonType: FibButtonType;
  currentQuestion: OrderedUnderwritingJourneyScreen;
  medicalHistory: Record<string, boolean>;
  answers: FibAnswers;
}
interface FindFibMedicalQuestionOptions {
  data: OrderedUnderwritingJourneyScreen[];
  buttonType: FibButtonType;
  question: OrderedUnderwritingJourneyScreen;
  medicalHistory: Record<string, boolean>;
  answers: FibAnswers;
}

export function findQuestion(options: FindFibQuestionOptions): OrderedUnderwritingJourneyScreen {
  const { data, buttonType, currentQuestion, medicalHistory, answers } = options;

  const question = data.find((element) => currentQuestion[buttonType]?.actionId === element.id);

  // question can be undefined when we're waiting for `fib_review_screen` ID that's not  acutaly a question but a flag
  // to know that starting with this point we should render the review screen
  if (question?.id.includes("medical_journey")) {
    return findMedicalQuestion({
      data,
      buttonType,
      question,
      medicalHistory,
      answers,
    });
  }

  return question;
}

function findMedicalQuestion(options: FindFibMedicalQuestionOptions): OrderedUnderwritingJourneyScreen {
  const { data, buttonType, medicalHistory, answers, question } = options;

  const activeChips = Object.entries(medicalHistory)
    .map((entry) => {
      return entry[1] ? entry[0] : null;
    })
    .filter((e) => !!e);

  // Extra values for medical journey
  activeChips.push(FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID);
  if (activeChips.includes(FIB_DIGESTIVE_SCREEN_ID)) {
    activeChips.push(...FIB_DIGESTIVE_EXTRA_SCREENS);
  }

  if (activeChips.includes(FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID)) {
    activeChips.push(FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN);
  }

  if (activeChips.includes(FIB_HIGH_CHOLESTEROL_SCREEN_ID)) {
    activeChips.push(FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN);
  }

  const isActiveOnMedicalJourney = getIsActiveOnMedicalJourney(question.id, answers);

  const showQuestion = activeChips.includes(question.id) && isActiveOnMedicalJourney;

  if (!showQuestion && question.id.includes("medical_journey")) {
    const nextQuestion = data.find((element) => question[buttonType]?.actionId === element.id);
    return findMedicalQuestion({
      data,
      buttonType,
      question: nextQuestion,
      medicalHistory,
      answers,
    });
  }

  return question;
}

export function getIsActiveOnMedicalJourney(screenId: string, answers: FibAnswers): boolean {
  // High Blood pressure
  if (FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN === screenId) {
    const bloodAnswer = answers[FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID];
    return bloodAnswer === "Yes";
  }

  // High cholesterol
  if (FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN === screenId) {
    const cholesterolAnswer = answers[FIB_HIGH_CHOLESTEROL_SCREEN_ID];
    return cholesterolAnswer === "Yes";
  }

  // Digestive
  if (FIB_DIGESTIVE_EXTRA_SCREENS.includes(screenId) && screenId !== FIB_DIGESTIVE_SCREEN_ID) {
    const questionIndex = FIB_DIGESTIVE_EXTRA_SCREENS.findIndex((questionId) => questionId === screenId);

    const previousAnswer =
      questionIndex === 0 ? answers[FIB_DIGESTIVE_SCREEN_ID] : answers[FIB_DIGESTIVE_EXTRA_SCREENS[questionIndex - 1]];
    return previousAnswer === "No";
  }

  if (screenId === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
    return answers.fib_medical_three_or_more_consultation === "Yes";
  }

  return true;
}
