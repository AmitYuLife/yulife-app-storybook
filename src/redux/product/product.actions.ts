import { ProductActionTypes, FIBStoreValue, UPDATE_FIB_VALUE } from "./product.types";

export function updateFIBValue<T>(payload: FIBStoreValue<T>): ProductActionTypes<T> {
  return {
    type: UPDATE_FIB_VALUE,
    payload,
  };
}
