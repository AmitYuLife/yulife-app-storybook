import { IReduxState } from "@redux/_core/reducers";
import { FIBStore } from "./product.types";
import moment from "moment";
import { initialState } from "./product.reducer";

export const getFIBState = (state: IReduxState): FIBStore => {
  // Need initial state to add new properties for all users
  return { ...initialState.fib, ...state.product.fib };
};

const DATE_FORMAT = "Do MMMM YYYY";
export const getBirthday = (state: IReduxState): string => {
  const now = moment();
  const { birthDay, birthMonth, birthYear } = state.product.fib;

  const formatted = moment(`${birthYear}-${birthMonth}-${birthDay}`).format(DATE_FORMAT);
  const placeholder = now.clone().subtract(30, "years").format(DATE_FORMAT);

  return formatted === "Invalid date" ? placeholder : formatted;
};

export const getFullName = (state: IReduxState): string => state.product.fib.fullName;
