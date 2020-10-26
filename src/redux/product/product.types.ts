import { PackageId } from "../../components/screens/products/fib/fib.helper";
import { Cover } from "@components/containers/products/fib/fib.types";
import { RehydrateAction } from "redux-persist";
import { logOut, getUserSuccess } from "@redux/user/user.actions";
export const UPDATE_FIB_VALUE = "UPDATE_FIB_VALUE";
export const UPDATE_FIB_MEDICAL_VALUE = "UPDATE_FIB_MEDICAL_VALUE";
export const UPDATE_FIB_ANSWER_VALUE = "UPDATE_FIB_ANSWER_VALUE";
export const RESET_FIB_ANSWERS = "RESET_FIB_ANSWERS";
export const RESET_FIB_MEDICAL_VALUE = "RESET_FIB_MEDICAL_VALUE";
export const RESET_FIB_UNDERWRITING_JOURNEY = "RESET_FIB_UNDERWRITING_JOURNEY";

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

export interface ContactDetails {
  firstAddressLine: string;
  secondAddressLine: string;
  townOrCity: string;
  postCode: string;
  personalEmail: string;
  phoneNumber: string;
}

export interface FibAnswers {
  contactDetails: ContactDetails;
  height: Height;
  weight: Weight;
  weeklyAlcoholDrinks: number;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  firstName: string;
  lastName: string;
  [questionId: string]: any;
}

export interface FIBStore {
  answers: FibAnswers;
  salary: number;
  selectedPackage: PackageId;
  existingCovers: Cover[];
  medicalHistory: Record<string, boolean>;
  quoteDate: string;
  lastQuestionId: string;
  hasPriceChanged: boolean;
  actualCost: number;
  medicalInvestigationRequired: boolean;
  rejected: boolean;
}

export interface UpdateFIBStoreAction<T> {
  type: typeof UPDATE_FIB_VALUE | typeof UPDATE_FIB_MEDICAL_VALUE | typeof UPDATE_FIB_ANSWER_VALUE;
  payload: FIBStoreValue<T> | FIBStoreAnswerValue<T>;
}

export interface ResetFIBStoreAction {
  type: typeof RESET_FIB_ANSWERS | typeof RESET_FIB_MEDICAL_VALUE | typeof RESET_FIB_UNDERWRITING_JOURNEY;
}

export type ProductActionTypes<T> =
  | UpdateFIBStoreAction<T>
  | ResetFIBStoreAction
  | RehydrateAction
  | ReturnType<typeof logOut>
  | ReturnType<typeof getUserSuccess>;
