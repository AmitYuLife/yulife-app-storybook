import { IReduxState } from "@redux/_core/reducers";
import { FIBStore, ContactDetails } from "./product.types";
import moment from "moment";
import {
  data,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_YOUR_NAME_SCREEN_ID,
  FIB_YOUR_DATE_OF_BIRTH_SCREEN_ID,
  FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
  FIB_ENTER_YOUR_NAME,
  FIB_ENTER_YOUR_DATE_OF_BIRTH,
  FIB_LIFESTYLE_HEIGHT_SCREEN_ID,
  FIB_LIFESTYLE_WEIGHT_SCREEN_ID,
  FIB_MEDICAL_THREE_OR_MORE_CONSULTATION_SCREEN_ID,
} from "../../components/containers/products/fib/data/underwriting-journey-data";
import { FINANCIAL_QUESTIONS_ICON } from "@atoms/fib/svg-assets/underwriting/svg-strings";
import { numberWithCommas } from "@services/utils";
import { FIB_EDIT_SALARY } from "@components/containers/products/fib/fib.types";

export const getFIBState = (state: IReduxState): FIBStore => {
  return state.product.fib;
};

const DATE_FORMAT = "Do MMMM YYYY";
export const getBirthday = (state: IReduxState): string => {
  const now = moment();
  const { birthDay, birthMonth, birthYear } = state.product.fib.answers;

  const formatted = moment(`${birthYear}-${birthMonth}-${birthDay}`, "YYYY-M-D").format(DATE_FORMAT);

  const placeholder = now.clone().subtract(30, "years").format(DATE_FORMAT);

  return formatted === "Invalid date" ? placeholder : formatted;
};

export const getFullName = (state: IReduxState): string => state.product.fib.answers.fib_your_name;
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

  const activeChips = Object.entries(state.product.fib.medicalHistory)
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

      if (item.id === FIB_YOUR_NAME_SCREEN_ID) {
        questionId = FIB_ENTER_YOUR_NAME;
      }
    }

    if (item.id === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID && showThreeYearMedical) {
      const chipListChild = item.children.find((child) => child.type === "chiplist");

      let commaCount = 0;
      chipListChild.chips.map((chip) => {
        const activeChip = activeChips.find((activeChip) => activeChip === chip.id);

        if (activeChip) {
          commaCount++;
          if (!answer) {
            answer = "";
          }

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
      questionId = FIB_ENTER_YOUR_DATE_OF_BIRTH;
    }

    if (item.id === FIB_LIFESTYLE_HEIGHT_SCREEN_ID) {
      const heightObject = state.product.fib.answers.height;
      const height = heightObject.unit === "cm" ? `${heightObject.cm}cm` : `${heightObject.ft}' ${heightObject.in}''`;

      icon = item.icon;
      title = item.title;
      answer = `${height}`;
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_WEIGHT_SCREEN_ID) {
      const weightObject = state.product.fib.answers.weight;
      const weight = weightObject.unit === "kg" ? `${weightObject.kg}kg` : `${weightObject.st}st ${weightObject.lb}lb`;

      icon = item.icon;
      title = item.title;
      answer = `${weight}`;
      questionId = item.id;
    }

    if (item.id === FIB_LIFESTYLE_ALCOHOL_SCREEN_ID) {
      const units = state.product.fib.answers.weeklyAlcoholDrinks;
      const unitOrUnits = units === 0 || units > 1 ? "units" : "unit";
      icon = item.icon;
      title = item.title;
      answer = `${units} ${unitOrUnits}`;
      questionId = item.id;
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
    answer: `£${numberWithCommas(state.product.fib.salary)}`,
    questionId: FIB_EDIT_SALARY,
    incomplete: !state.product.fib.salary,
  });

  return answers;
};
