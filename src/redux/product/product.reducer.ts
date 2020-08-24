import {
  UPDATE_FIB_VALUE,
  ProductActionTypes,
  IProductStore,
  UPDATE_FIB_MEDICAL_VALUE,
  UPDATE_FIB_ANSWER_VALUE,
  RESET_FIB_ANSWERS,
  RESET_FIB_MEDICAL_VALUE,
} from "./product.types";
import { REHYDRATE } from "redux-persist";
import { LOGOUT } from "@redux/user/user.actions";

export { IProductStore } from "./product.types";

export const initialState: IProductStore = {
  fib: {
    answers: {
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
      weeklyAlcoholDrinks: 0,
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      fib_your_name: "Oliver Twist",
    },
    salary: 0,
    selectedPackage: "common",
    existingCovers: [],
    medicalHistory: {},
    expireQuoteDate: "",
    lastQuestionId: "",
  },
};

function personalProductReducer<T>(state: IProductStore = initialState, action: ProductActionTypes<T>) {
  switch (action.type) {
    case REHYDRATE:
      return rehydratePersonalProductStore(state);
    case LOGOUT:
      return initialState;
    case UPDATE_FIB_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          [action.payload.key]: action.payload.value,
        },
      };
    case UPDATE_FIB_ANSWER_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          answers: {
            ...state.fib.answers,
            [action.payload.key]: action.payload.value,
          },
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
    case RESET_FIB_ANSWERS:
      return {
        ...state,
        fib: {
          ...state.fib,
          answers: {
            ...initialState.fib.answers,
            height: {
              ...initialState.fib.answers.height,
            },
            weight: {
              ...initialState.fib.answers.weight,
            },
          },
        },
      };
    case RESET_FIB_MEDICAL_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          medicalHistory: {},
        },
      };
    default:
      return state;
  }
}

function rehydratePersonalProductStore(state: IProductStore) {
  if (!Object.keys(state.fib.answers).length) {
    const newState = { ...state };
    newState.fib.answers = { ...initialState.fib.answers };
    newState.fib.answers.height = { ...initialState.fib.answers.height };
    newState.fib.answers.weight = { ...initialState.fib.answers.weight };
    for (const key of Object.keys(newState.fib.answers)) {
      if ((state.fib as any)[key]) {
        newState.fib.answers[key] = (state.fib as any)[key];
        delete (state.fib as any)[key];
      }
    }

    return newState;
  }

  return state;
}

export default personalProductReducer;
