import { PackageId } from "../../components/screens/products/fib/fib.helper";
import { Cover } from "@components/containers/products/fib/fib.types";
export const UPDATE_FIB_VALUE = "UPDATE_FIB_VALUE";

export interface IProductStore {
  fib: FIBStore;
}

export interface FIBStoreValue<T> {
  key: string;
  value: T;
}

export interface FIBStore {
  salary: number;
  selectedPackage: PackageId;
  weeklyAlcoholDrinks: number;
  existingCovers: Cover[];
}

export interface UpdateFIBStoreAction<T> {
  type: typeof UPDATE_FIB_VALUE;
  payload: FIBStoreValue<T>;
}

export type ProductActionTypes<T> = UpdateFIBStoreAction<T>;
