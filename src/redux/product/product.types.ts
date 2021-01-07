import { PackageId } from "../../components/screens/products/fib/fib.helper";
import { Cover } from "@components/containers/products/fib/fib.types";
import { RehydrateAction } from "redux-persist";
import { logOut, getUserSuccess } from "@redux/user/user.actions";
import { CreateTopUpsQuote_createTopUpsQuote, GetTopUpsQuote_getTopUpsQuote } from "../../graphql/_core/schema";
import { ScreeningStatus } from "../../graphql/_core/schema/globalTypes";
export const UPDATE_FIB_VALUE = "UPDATE_FIB_VALUE";
export const UPDATE_FIB_MEDICAL_VALUE = "UPDATE_FIB_MEDICAL_VALUE";
export const UPDATE_FIB_ANSWER_VALUE = "UPDATE_FIB_ANSWER_VALUE";
export const RESET_FIB_ANSWERS = "RESET_FIB_ANSWERS";
export const RESET_FIB_MEDICAL_VALUE = "RESET_FIB_MEDICAL_VALUE";
export const RESET_FIB_UNDERWRITING_JOURNEY = "RESET_FIB_UNDERWRITING_JOURNEY";
export const REFRESH_FIB_STORE = "REFRESH_FIB_STORE";
export const UPDATE_FIB_VALUES_FROM_QUOTE = "UPDATE_FIB_VALUES_FROM_QUOTE";

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
  weeklyAlcoholDrinks: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  firstName: string;
  lastName: string;
  medicalConsent: boolean;
  previewMedicalTests: boolean;
  existingCovers: Cover[];
  medicalHistory: Record<string, boolean>;
  [questionId: string]: any;
}

export interface GPDetails {
  practiceName: string;
  practiceAddress: string;
  practiceTown: string;
  practicePostCode: string;
  gpName: string;
}

export interface FIBStore {
  answers: FibAnswers;
  salary: number;
  selectedPackage: PackageId;
  quoteDate: string;
  lastQuestionId: string;
  hasPriceChanged: boolean;
  actualCost: number;
  medicalInvestigationRequired: boolean;
  rejected: boolean;
  productEntityId: string;
  latestQuoteId: string;
  status: ScreeningStatus;
  gpDetails: GPDetails;
}

export interface UpdateFIBStoreAction<T> {
  type: typeof UPDATE_FIB_VALUE | typeof UPDATE_FIB_MEDICAL_VALUE | typeof UPDATE_FIB_ANSWER_VALUE;
  payload: FIBStoreValue<T> | FIBStoreAnswerValue<T>;
}

export interface ResetFIBStoreAction {
  type: typeof RESET_FIB_ANSWERS | typeof RESET_FIB_MEDICAL_VALUE | typeof RESET_FIB_UNDERWRITING_JOURNEY;
}

export interface RefreshFIBStoreAction {
  type: typeof REFRESH_FIB_STORE;
  payload: GetTopUpsQuote_getTopUpsQuote;
}

export interface UpdateFIBValuesFromQuoteAction {
  type: typeof UPDATE_FIB_VALUES_FROM_QUOTE;
  payload: CreateTopUpsQuote_createTopUpsQuote;
}

export type ProductActionTypes<T> =
  | UpdateFIBStoreAction<T>
  | ResetFIBStoreAction
  | RehydrateAction
  | ReturnType<typeof logOut>
  | ReturnType<typeof getUserSuccess>
  | RefreshFIBStoreAction
  | UpdateFIBValuesFromQuoteAction;
