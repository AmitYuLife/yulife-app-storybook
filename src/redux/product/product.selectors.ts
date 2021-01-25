import { IReduxState } from "@redux/_core/reducers";
import { FIBStore, ContactDetails } from "./product.types";
import moment from "moment";
import {
  data,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
  FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
  FIB_ENTER_YOUR_NAME,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
  FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
  FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
  FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID,
  FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
  FIB_HIGH_CHOLESTEROL_SCREEN_ID,
  FIB_HOSPITAL_STAY_SCREEN_ID,
  FIB_CONDITION_STABLE_SCREEN_ID,
  FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID,
  FIB_SYMPTOMS_RESOLVED_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID,
  FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID,
  FOLLOW_UP_SMOKING_ANSWERS_TRIGGER,
  FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
  FIB_INPUT_SALARY,
  FIB_GENDER_SCREEN_ID,
} from "../../components/containers/products/fib/data/underwriting-journey-data";
import { FINANCIAL_QUESTIONS_ICON } from "@atoms/fib/svg-assets/underwriting/svg-strings";
import { addCommasToNumber } from "@services/utils";
import { LifeInsuranceTopUpsUserAnswers, YuWorld } from "../../graphql/_core/schema/globalTypes";
import {
  FIB_FINANCIAL_OTHER_COVER_SCREEN_ID,
  FIB_FINANCIAL_QUESTIONS_SCREEN_ID,
} from "../../components/containers/products/fib/data/underwriting-journey-data";

export const getFIBState = (state: IReduxState): FIBStore => {
  return state.product.fib;
};

export const getWeeklyAlcoholDrinks = (state: IReduxState): string => {
  const alcohol = state.product.fib.answers.weeklyAlcoholDrinks;

  if (!alcohol || typeof alcohol !== "string") {
    return "";
  }

  return alcohol;
};

const DATE_FORMAT = "Do MMMM YYYY";

export const getBirthday = (state: IReduxState, dateFormat: string = DATE_FORMAT): string => {
  const { birthDay, birthMonth, birthYear } = state.product.fib.answers;

  const formatted = moment(`${birthYear}-${birthMonth}-${birthDay}`, "YYYY-M-D").format(dateFormat);

  return formatted;
};

export const getFullName = (state: IReduxState): string =>
  `${state.product.fib.answers.firstName} ${state.product.fib.answers.lastName}`;
export const getContactDetails = (state: IReduxState): ContactDetails => state.product.fib.answers.contactDetails;

export interface IAnswer {
  icon: string;
  title: string;
  answer: string;
  questionId: string;
  incomplete: boolean;
}

export const getReviewAnswers = (state: IReduxState): any => {
  const answers: IAnswer[] = [];

  const activeChips = Object.entries(state.product.fib.answers.medicalHistory)
    .map((entry) => {
      return entry[1] ? entry[0] : null;
    })
    .filter((e) => !!e);

  const showThreeYearMedical = state.product.fib.answers[FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID] === "Yes";
  // this will be moved to the container once we'll have the data from server
  data.map((item) => {
    let icon: string;
    let title: string;
    let answer: string;
    let questionId: string;
    if (
      state.product.fib.answers[item.id] ||
      (activeChips.includes(item.id) && item.id !== FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID)
    ) {
      icon = item.icon;
      title = item.reviewAnswerTitle || item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (item.id === FIB_ENTER_YOUR_NAME) {
      icon = item.icon;
      title = item.reviewAnswerTitle || item.title;
      answer = `${state.product.fib.answers.firstName} ${state.product.fib.answers.lastName}`;
      questionId = FIB_ENTER_YOUR_NAME;
    }

    if (item.id === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID && showThreeYearMedical) {
      const chipListChild = item.children.find((child) => child.type === "chiplist");
      let commaCount = 0;
      answer = "";

      chipListChild.chips.map((chip) => {
        const activeChip = activeChips.find((activeChip) => activeChip === chip.id);
        if (activeChip) {
          commaCount++;
          answer = answer.concat(`${chip.label}${commaCount === activeChips.length ? "" : ", "}`);
        }
      });

      icon = item.icon;
      title = item.reviewAnswerTitle || item.title;
      questionId = item.id;
    }

    if (item.id === FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID) {
      icon = item.icon;
      title = item.title;
      answer = getBirthday(state);
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_HEIGHT_SCREEN_ID) {
      const heightObject = state.product.fib.answers.height;
      const height =
        heightObject.unit === "cm" ? `${heightObject.cm}cm` : `${heightObject.ft || 0}' ${heightObject.in || 0}''`;

      icon = item.icon;
      title = item.title;
      answer = `${heightObject.cm || heightObject.ft || heightObject.in ? height : ""}`;
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_WEIGHT_SCREEN_ID) {
      const weightObject = state.product.fib.answers.weight;
      const weight =
        weightObject.unit === "kg" ? `${weightObject.kg}kg` : `${weightObject.st || 0}st ${weightObject.lb || 0}lb`;

      icon = item.icon;
      title = item.title;
      answer = `${weightObject.kg || weightObject.st || weightObject.lb ? weight : ""}`;
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_ALCOHOL_SCREEN_ID) {
      const units = state.product.fib.answers.weeklyAlcoholDrinks;
      const unitOrUnits = Number(units) === 0 || Number(units) > 1 ? "units" : "unit";
      icon = item.icon;
      title = item.title;
      answer = `${units} ${unitOrUnits}`;
      questionId = item.id;
    }

    if (
      item.id === FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN &&
      activeChips.includes(FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID) &&
      state.product.fib.answers[FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID] === "Yes"
    ) {
      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (
      item.id === FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN &&
      activeChips.includes(FIB_HIGH_CHOLESTEROL_SCREEN_ID) &&
      state.product.fib.answers[FIB_HIGH_CHOLESTEROL_SCREEN_ID] === "Yes"
    ) {
      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (item.id === FIB_HOSPITAL_STAY_SCREEN_ID) {
      let needFollowUpQuestion = false;
      for (const screenId of activeChips) {
        if ([FIB_HIGH_BLOOD_PRESSURE_SCREEN_ID, FIB_HIGH_CHOLESTEROL_SCREEN_ID].includes(screenId)) {
          continue;
        }

        needFollowUpQuestion = state.product.fib.answers[screenId] === "No";
        if (needFollowUpQuestion) {
          break;
        }
      }

      if (needFollowUpQuestion) {
        icon = item.icon;
        title = item.title;
        answer = state.product.fib.answers[item.id];
        questionId = item.id;
      }
    }

    if (
      item.id === FIB_DAILY_ACTIVITIES_RESTRICTIONS_SCREEN_ID &&
      state.product.fib.answers[FIB_HOSPITAL_STAY_SCREEN_ID] === "No"
    ) {
      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (item.id === FIB_SYMPTOMS_RESOLVED_SCREEN_ID) {
      if (state.product.fib.answers[FIB_HOSPITAL_STAY_SCREEN_ID] !== "No") {
        return;
      }

      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (
      item.id === FIB_CONDITION_STABLE_SCREEN_ID &&
      state.product.fib.answers[FIB_SYMPTOMS_RESOLVED_SCREEN_ID] === "No"
    ) {
      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_SMOKING_CIGARETTES_FOLLOW_UP_SCREEN_ID) {
      const smokingAnswer = state.product.fib.answers[FIB_LIFESTYLE_SMOKING_CIGARETTES_SCREEN_ID];
      const needsFollowUpQuestion = FOLLOW_UP_SMOKING_ANSWERS_TRIGGER.includes(smokingAnswer);
      if (!needsFollowUpQuestion) {
        icon = null;
        title = null;
      } else {
        icon = item.icon;
        title = item.reviewAnswerTitle;
        questionId = item.id;
        answer = state.product.fib.answers[item.id];
      }
    }

    if (item.id === FIB_GENDER_SCREEN_ID) {
      answer = answer === "F" ? "Female" : "Male";
    }

    if (
      item.id === FIB_FINANCIAL_OTHER_COVER_SCREEN_ID &&
      state.product.fib.answers[FIB_FINANCIAL_QUESTIONS_SCREEN_ID] === "No" &&
      !state.product.fib.answers[FIB_FINANCIAL_OTHER_COVER_SCREEN_ID]
    ) {
      if (state.product.fib.sumAssured > 3500000) {
        icon = item.icon;
        title = item.title;
        questionId = item.id;
        answer = null;
      }
    }

    if (
      item.id === FIB_FINANCIAL_OTHER_COVER_SCREEN_ID &&
      state.product.fib.answers[FIB_FINANCIAL_OTHER_COVER_SCREEN_ID] === "Yes" &&
      state.product.fib.answers.existingCovers.length === 0
    ) {
      icon = item.icon;
      title = item.title;
      questionId = item.id;
      answer = null;
    }

    if (icon && title) {
      answers.push({
        icon,
        title,
        answer,
        questionId,
        incomplete: !answer,
      });
    }
  });
  // Add salary to answers 3rd position
  answers.splice(2, 0, {
    icon: FINANCIAL_QUESTIONS_ICON,
    title: "Salary",
    answer: `£${addCommasToNumber(state.product.fib.salary)}`,
    questionId: FIB_INPUT_SALARY,
    incomplete: !state.product.fib.salary,
  });

  return answers;
};

export const getLifeInsuranceUserAnswers = (state: IReduxState): LifeInsuranceTopUpsUserAnswers[] => {
  const answers = state.product.fib.answers;
  const userAnswers = Object.keys(answers).map((questionId: string) => {
    let parsedQuestionId = questionId;
    if (questionId === "medicalHistory") {
      parsedQuestionId = FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID;
    }

    if (questionId === "existingCovers") {
      parsedQuestionId = FIB_FINANCIAL_COVER_LIST_SCREEN_ID;
    }

    return {
      questionId: parsedQuestionId,
      value: JSON.stringify(answers[questionId]),
    } as LifeInsuranceTopUpsUserAnswers;
  });

  const fibStore = state.product.fib;

  userAnswers.push({
    questionId: "salary",
    value: JSON.stringify(fibStore.salary),
  });

  return userAnswers;
};

export const getFIBStyle = (state: IReduxState): YuWorld => {
  return state?.product.fib.fibStyle || YuWorld.forest;
};
