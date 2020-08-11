import { PackageId } from "../../components/screens/products/fib/fib.helper";
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
  selectedPackage: PackageId;
  weeklyAlcoholDrinks: number;
}

export interface UpdateFIBStoreAction {
  type: typeof UPDATE_FIB_VALUE;
  payload: FIBStoreValue;
}

export type ProductActionTypes = UpdateFIBStoreAction;
