import { PackageId } from "../../components/screens/products/fib/fib.helper";
import { Cover } from "@components/containers/products/fib/fib.types";
export const UPDATE_FIB_VALUE = "UPDATE_FIB_VALUE";
export const UPDATE_FIB_MEDICAL_VALUE = "UPDATE_FIB_MEDICAL_VALUE";
export const UPDATE_FIB_ANSWER_VALUE = "UPDATE_FIB_ANSWER_VALUE";

export interface IProductStore {
  fib: FIBStore;
}

export interface FIBStoreValue<T> {
  key: keyof FIBStore;
  value: T;
}

export interface FIBStoreAnswerValue<T> {
  key: string;
  value: T;
}

export interface Height {
  unit: "cm" | "ft";
  cm: string;
  ft: string;
  in: string;
}

export interface Weight {
  unit: "kg" | "st";
  st: string;
  lb: string;
  kg: string;
}

interface FibAnswers {
  [questionId: string]: boolean | string | number | Height | Weight;
}

export interface FIBStore {
  answers: FibAnswers;
  salary: number;
  selectedPackage: PackageId;
  existingCovers: Cover[];
  medicalHistory: Record<string, boolean>;
}

export interface UpdateFIBStoreAction<T> {
  type: typeof UPDATE_FIB_VALUE | typeof UPDATE_FIB_MEDICAL_VALUE | typeof UPDATE_FIB_ANSWER_VALUE;
  payload: FIBStoreValue<T> | FIBStoreAnswerValue<T>;
}

export type ProductActionTypes<T> = UpdateFIBStoreAction<T>;
