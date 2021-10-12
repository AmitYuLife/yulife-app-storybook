import { IReduxState } from "@redux/_core/reducers";
import { FIBStore } from "./product.types";

export const getFIBState = (state: IReduxState): FIBStore => {
  return state.product.fib;
};

export interface IAnswer {
  icon: string;
  title: string;
  answer: string;
  questionId: string;
  incomplete: boolean;
}
