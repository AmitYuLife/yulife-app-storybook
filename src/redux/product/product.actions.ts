import { ProductActionTypes, FIBStoreValue, UPDATE_FIB_VALUE } from "./product.types";

export function updateFIBValue(payload: FIBStoreValue): ProductActionTypes {
  return {
    type: UPDATE_FIB_VALUE,
    payload,
  };
}
