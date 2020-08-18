import { ProductActionTypes, FIBStoreValue, UPDATE_FIB_VALUE, UPDATE_FIB_MEDICAL_VALUE } from "./product.types";

export function updateFIBValue<T>(payload: FIBStoreValue<T>): ProductActionTypes<T> {
  return {
    type: UPDATE_FIB_VALUE,
    payload,
  };
}

export function updateFIBMedicalHistoryValue(payload: { key: string; value: boolean }) {
  return {
    type: UPDATE_FIB_MEDICAL_VALUE,
    payload,
  };
}
