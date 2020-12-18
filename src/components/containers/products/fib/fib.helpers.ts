import moment from "moment";
import { CalculatorItems } from "@components/screens/products/fib/browse-packages/subcomponents/payout-calculator/subcomponents/calculator";
import {
  OrderedUnderwritingJourneyScreen,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_MEDICAL_FOLLOW_UP_QUESTIONS,
  FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
  FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
  FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
  FIB_HIGH_CHOLESTEROL_SCREEN_ID,
  FIB_ENTER_YOUR_NAME,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
  FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
  FIB_HOSPITAL_STAY_SCREEN_ID,
  SMOKING_QUESTIONS_SCREEN_IDS,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
  FOLLOW_UP_SMOKING_ANSWERS_TRIGGER,
  FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
} from "./data/underwriting-journey-data";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { useDispatch } from "react-redux";
import { useState, useMemo } from "react";
import { updateFIBValue } from "@redux/product/product.actions";
import { FibAnswers } from "@redux/product/product.types";
import { FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID } from "./data/underwriting-journey-data";

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

export interface FindFibQuestionOptions {
  data: OrderedUnderwritingJourneyScreen[];
  buttonType: FibButtonType;
  currentQuestion: OrderedUnderwritingJourneyScreen;
  medicalHistory: Record<string, boolean>;
  answers: FibAnswers;
  initialQuesionIdFromReviewSession?: string;
}
interface FindFibMedicalQuestionOptions {
  data: OrderedUnderwritingJourneyScreen[];
  buttonType: FibButtonType;
  question: OrderedUnderwritingJourneyScreen;
  medicalHistory: Record<string, boolean>;
  answers: FibAnswers;
}

export function findQuestion(
  options: FindFibQuestionOptions,
  reviewScreenSession: boolean
): OrderedUnderwritingJourneyScreen {
  const { data, buttonType, currentQuestion, medicalHistory, answers, initialQuesionIdFromReviewSession } = options;

  let nextQuestionId =
    reviewScreenSession &&
    currentQuestion[buttonType]?.actionIdReview &&
    initialQuesionIdFromReviewSession !== FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID &&
    initialQuesionIdFromReviewSession !== FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID
      ? currentQuestion[buttonType]?.actionIdReview
      : currentQuestion[buttonType]?.actionId;

  if (FIB_HOSPITAL_STAY_SCREEN_ID === currentQuestion.id && reviewScreenSession && buttonType === "previousButton") {
    nextQuestionId = initialQuesionIdFromReviewSession;
  }

  const question = data.find((element) => nextQuestionId === element.id);

  if (
    question?.id === FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID &&
    !FOLLOW_UP_SMOKING_ANSWERS_TRIGGER.includes(answers[FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID])
  ) {
    const newOptions = { ...options, currentQuestion: question };
    return findQuestion(newOptions, reviewScreenSession);
  }

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
  activeChips.push(...FIB_MEDICAL_FOLLOW_UP_QUESTIONS);

  if (activeChips.includes(FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID)) {
    activeChips.push(FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN);
  }

  if (activeChips.includes(FIB_HIGH_CHOLESTEROL_SCREEN_ID)) {
    activeChips.push(FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN);
  }

  const isActiveOnMedicalJourney = getIsActiveOnMedicalJourney(question.id, answers, question);

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

export function getIsActiveOnMedicalJourney(
  screenId: string,
  answers: FibAnswers,
  question: OrderedUnderwritingJourneyScreen
): boolean {
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

  if (question.dependsOnOtherResponses) {
    const findTheMatchingQuestion = question.dependsOnOtherResponses.find((item) => item.answer === answers[item.id]);
    return !!findTheMatchingQuestion;
  }

  if (screenId === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
    return answers.fib_medical_three_or_more_consultation === "Yes";
  }

  return true;
}

export function shouldAnswerBeStored(label: string, currentQuestionId: string): boolean {
  return (
    (label === "Yes" || label === "No") &&
    currentQuestionId !== FIB_ENTER_YOUR_NAME &&
    currentQuestionId !== FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID
  );
}

export function shouldFirstButtonBeDisabled(
  medicalHistory: Record<string, boolean>,
  currentQuestion: OrderedUnderwritingJourneyScreen,
  fibAnswers: FibAnswers,
  inputFirstName: string,
  inputLastName: string,
  radioInputValue: string
) {
  if (currentQuestion.id === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
    return !Object.entries(medicalHistory)
      .map((entry) => {
        return entry[1] ? entry[0] : null;
      })
      .filter((e) => !!e).length;
  }

  if (currentQuestion.id === FIB_ENTER_YOUR_NAME) {
    return !inputFirstName || !inputLastName;
  }

  if (currentQuestion.id === FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID) {
    const { birthDay, birthMonth, birthYear } = fibAnswers;
    const isValidDates = !!Number(birthDay) && !!Number(birthMonth) && !!Number(birthYear);
    return !isValidDates;
  }

  if (currentQuestion.id === FIB_LIFESTYLE_HEIGHT_SCREEN_ID) {
    if (fibAnswers.height.unit === "cm") {
      return !fibAnswers.height.cm;
    }

    return !fibAnswers.height.ft || !fibAnswers.height.in;
  }

  if (currentQuestion.id === FIB_LIFESTYLE_WEIGHT_SCREEN_ID) {
    if (fibAnswers.weight.unit === "kg") {
      return !fibAnswers.weight.kg;
    }

    return !fibAnswers.weight.st || !fibAnswers.weight.lb;
  }

  if (SMOKING_QUESTIONS_SCREEN_IDS.includes(currentQuestion.id)) {
    return !radioInputValue;
  }

  if (currentQuestion.id === FIB_LIFESTYLE_ALCOHOL_SCREEN_ID) {
    return !fibAnswers.weeklyAlcoholDrinks;
  }

  return false;
}

export function shouldSecondButtonBeDisabled(
  currentQuestion: OrderedUnderwritingJourneyScreen,
  fibAnswers: FibAnswers
) {
  if (currentQuestion.id === FIB_ENTER_YOUR_NAME) {
    return (fibAnswers.firstName || "").length < 1 || (fibAnswers.lastName || "").length < 1;
  }

  return false;
}

export function useInternationalFormat(dayOrMonth: string): string {
  return `${dayOrMonth?.length === 1 ? "0" : ""}${dayOrMonth}`;
}

interface CalculatePayoutAmountInput {
  deceaseAgeYear: number;
  deceaseAgeMonth: number;
  sumAssured: number;
  term: number;
  dateOfBirth: string;
}
export function calculatePayoutAmount({
  deceaseAgeYear,
  deceaseAgeMonth,
  sumAssured,
  term,
  dateOfBirth,
}: CalculatePayoutAmountInput) {
  const totalPayoutMonths = term * 12;

  const deceaseTotalMonths = deceaseAgeYear * 12 + deceaseAgeMonth;
  const ageInMonths = moment().diff(moment(dateOfBirth), "months");

  let payoutMonths = deceaseTotalMonths - ageInMonths;

  if (payoutMonths < 0) {
    payoutMonths = 0;
  }

  // Decease age over max term
  if (totalPayoutMonths - payoutMonths <= 0) {
    return 0;
  }

  const payoutAmount = sumAssured * ((totalPayoutMonths - payoutMonths) / totalPayoutMonths);
  return payoutAmount;
}
