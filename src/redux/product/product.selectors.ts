import { IReduxState } from "@redux/_core/reducers";
import { FIBStore } from "./product.types";
import moment from "moment";
import {
  data,
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
} from "../../components/containers/products/fib/data/underwriting-journey-data";
import { UseInternationalFormat } from "../../components/containers/products/fib/fib.helpers";

export const getFIBState = (state: IReduxState): FIBStore => {
  return state.product.fib;
};

const DATE_FORMAT = "Do MMMM YYYY";
export const getBirthday = (state: IReduxState): string => {
  const now = moment();
  const { birthDay, birthMonth, birthYear } = state.product.fib.answers;

  const formatted = moment(
    `${birthYear}-${UseInternationalFormat(birthMonth)}-${UseInternationalFormat(birthDay)}`
  ).format(DATE_FORMAT);

  const placeholder = now.clone().subtract(30, "years").format(DATE_FORMAT);

  return formatted === "Invalid date" ? placeholder : formatted;
};

export const getFullName = (state: IReduxState): string => state.product.fib.answers.fib_your_name;

export interface IAnswer {
  icon: string;
  title: string;
  answer: string;
  questionId: string;
}
export const getReviewAnswers = (state: IReduxState): any => {
  const answers: IAnswer[] = [];

  // this will be moved to the container once we'll have the data from server
  data.map((item) => {
    let icon: string;
    let title: string;
    let answer: string;
    let questionId: string;

    if (state.product.fib.answers[item.id]) {
      icon = item.icon;
      title = item.reviewAnswerTitle || item.title;
      answer = state.product.fib.answers[item.id];
      questionId = item.id;

      if (item.id === "fib_your_name") {
        questionId = "fib_enter_your_name";
      }
    }

    if (item.id === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
      const activeChips = Object.entries(state.product.fib.medicalHistory)
        .map((entry) => {
          return entry[1] ? entry[0] : null;
        })
        .filter((e) => !!e);

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

    if (item.id === "fib_your_date_of_birth") {
      icon = item.icon;
      title = item.title;
      answer = getBirthday(state);
      questionId = "fib_enter_your_date_of_birth";
    }

    if (item.id === "fib_lifestyle_height") {
      const heightObject = state.product.fib.answers.height;
      const height = heightObject.unit === "cm" ? `${heightObject.cm}cm` : `${heightObject.ft}${heightObject.in}ft`;

      icon = item.icon;
      title = item.title;
      answer = `${height}`;
      questionId = item.id;
    }

    if (item.id === "fib_lifestyle_weight") {
      const weightObject = state.product.fib.answers.weight;
      const weight = weightObject.unit === "kg" ? `${weightObject.kg}kg` : `${weightObject.lb}lb`;

      icon = item.icon;
      title = item.title;
      answer = `${weight}`;
      questionId = item.id;
    }

    if (item.id === "fib_lifestyle_alcohol") {
      const units = state.product.fib.answers.weeklyAlcoholDrinks;
      const unitOrUnits = units === 0 || units > 1 ? "units" : "unit";
      icon = item.icon;
      title = item.title;
      answer = `${units} ${unitOrUnits}`;
      questionId = item.id;
    }

    if (icon && answer && title) {
      answers.push({
        icon,
        title,
        answer,
        questionId,
      });
    }
  });

  return answers;
};
