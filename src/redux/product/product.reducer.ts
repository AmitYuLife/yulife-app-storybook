import { UPDATE_FIB_VALUE, ProductActionTypes, IProductStore, UPDATE_FIB_MEDICAL_VALUE } from "./product.types";

export { IProductStore } from "./product.types";

export const initialState: IProductStore = {
  fib: {
    fullName: "Oliver Twist",
    salary: 0,
    selectedPackage: "common",
    weeklyAlcoholDrinks: 0,
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    height: {
      unit: "cm",
      cm: "",
      ft: "",
      in: "",
    },
    weight: {
      unit: "kg",
      kg: "",
      st: "",
      lb: "",
    },
    existingCovers: [],
    medicalHistory: {},
  },
};

function personalProductReducer<T>(state: IProductStore = initialState, action: ProductActionTypes<T>) {
  switch (action.type) {
    case UPDATE_FIB_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          [action.payload.key]: action.payload.value,
        },
      };
    case UPDATE_FIB_MEDICAL_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          medicalHistory: {
            ...state.fib.medicalHistory,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
}

export default personalProductReducer;
