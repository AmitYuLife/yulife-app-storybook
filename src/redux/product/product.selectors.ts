import { IReduxState } from "@redux/_core/reducers";
import { FIBStore, Height, Weight } from "./product.types";
import moment from "moment";
import { initialState } from "./product.reducer";
import { data } from "../../components/containers/products/fib/data/underwriting-journey-data";

export const getFIBState = (state: IReduxState): FIBStore => {
  // Need initial state to add new properties for all users
  return { ...initialState.fib, ...state.product.fib };
};

const DATE_FORMAT = "Do MMMM YYYY";
export const getBirthday = (state: IReduxState): string => {
  const now = moment();
  const { birthDay, birthMonth, birthYear } = state.product.fib.answers;

  const formatted = moment(`${birthYear}-${birthMonth}-${birthDay}`).format(DATE_FORMAT);
  const placeholder = now.clone().subtract(30, "years").format(DATE_FORMAT);

  return formatted === "Invalid date" ? placeholder : formatted;
};

export const getFullName = (state: IReduxState): string => state.product.fib.answers.fib_your_name as string;

export const getReviewAnswers = (state: IReduxState): any => {
  const answers: { icon: string; title: string; answer: string }[] = [];

  // this will be moved to the container once we'll have the data from server
  data.map((item) => {
    let icon: string;
    let title: string;
    let answer: string;

    if (state.product.fib.answers[item.id]) {
      icon = item.icon;
      title = item.title;
      answer = state.product.fib.answers[item.id] as string;
    }

    if (item.id === "fib_your_date_of_birth") {
      icon = item.icon;
      title = item.title;
      answer = getBirthday(state);
    }

    if (item.id === "fib_lifestyle_height_and_weight") {
      const heightObject = state.product.fib.answers.height as Height;
      const height = heightObject.unit === "cm" ? `${heightObject.cm}cm` : `${heightObject.ft}${heightObject.in}ft`;
      const weightObject = state.product.fib.answers.weight as Weight;
      const weight = weightObject.unit === "kg" ? `${weightObject.kg}kg` : `${weightObject.lb}lb`;

      icon = item.icon;
      title = item.title;
      answer = `${height}, ${weight}`;
    }

    if (item.id === "fib_lifestyle_alcohol") {
      const units = state.product.fib.answers.weeklyAlcoholDrinks;
      const unitOrUnits = units === 0 || units > 1 ? "units" : "unit";
      icon = item.icon;
      title = item.title;
      answer = `${units} ${unitOrUnits}`;
    }

    if (icon && answer && title) {
      answers.push({
        icon,
        title,
        answer,
      });
    }
  });

  return answers;
};
