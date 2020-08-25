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
import { IReduxState } from "@redux/_core/reducers";
import { isObject } from "util";

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
      return rehydratePersonalProductStore(state, action.payload as IReduxState);
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

function rehydratePersonalProductStore(state: IProductStore, payload: IReduxState) {
  // payload is state on local storage state is initialState
  // payload could be undefined on fresh installs
  const newState = { ...state };
  // rehydrate fib answers object
  for (const answersKey of Object.keys(initialState.fib.answers)) {
    newState.fib.answers[answersKey] = payload?.product?.fib?.answers[answersKey];
    if (!newState.fib.answers[answersKey]) {
      newState.fib.answers[answersKey] = isObject(initialState.fib.answers[answersKey])
        ? { ...initialState.fib.answers[answersKey] }
        : initialState.fib.answers[answersKey];
    }
  }

  // rehydrate fib object
  for (const topLevelKey of Object.keys(initialState.fib)) {
    if (topLevelKey === "answers") {
      continue;
    }

    (newState.fib as any)[topLevelKey] = payload?.product?.fib ? (payload.product.fib as any)[topLevelKey] : null;
    if (!(newState.fib as any)[topLevelKey]) {
      (newState.fib as any)[topLevelKey] = (initialState.fib as any)[topLevelKey];
    }
  }

  return newState;
}

export default personalProductReducer;
