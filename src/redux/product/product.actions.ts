import { FIBStoreAnswerValue } from "./product.types";
import {
  ProductActionTypes,
  FIBStoreValue,
  UPDATE_FIB_VALUE,
  UPDATE_FIB_MEDICAL_VALUE,
  UPDATE_FIB_ANSWER_VALUE,
  RESET_FIB_ANSWERS,
  RESET_FIB_MEDICAL_VALUE,
} from "./product.types";

export function updateFIBValue<T>(payload: FIBStoreValue<T>): ProductActionTypes<T> {
  return {
    type: UPDATE_FIB_VALUE,
    payload,
  };
}

export function updateFIBAnswerValue<T>(payload: FIBStoreAnswerValue<T>): ProductActionTypes<T> {
  return {
    type: UPDATE_FIB_ANSWER_VALUE,
    payload,
  };
}

export function resetFIBAnswers<T>(): ProductActionTypes<T> {
  return {
    type: RESET_FIB_ANSWERS,
  };
}

export function updateFIBMedicalHistoryValue(payload: { key: string; value: boolean }) {
  return {
    type: UPDATE_FIB_MEDICAL_VALUE,
    payload,
  };
}

export function resetFIBMedicalHistoryValue<T>(): ProductActionTypes<T> {
  return {
    type: RESET_FIB_MEDICAL_VALUE,
  };
}
