export const UPDATE_FIB_VALUE = "UPDATE_FIB_VALUE";

export interface IProductStore {
  fib: FIBStore;
}

export interface FIBStoreValue {
  key: string;
  value: string | number | boolean;
}

export interface FIBStore {
  salary: number;
}

export interface UpdateFIBStoreAction {
  type: typeof UPDATE_FIB_VALUE;
  payload: FIBStoreValue;
}

export type ProductActionTypes = UpdateFIBStoreAction;
