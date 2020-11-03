import {
  UPDATE_FIB_VALUE,
  ProductActionTypes,
  IProductStore,
  UPDATE_FIB_MEDICAL_VALUE,
  UPDATE_FIB_ANSWER_VALUE,
  RESET_FIB_ANSWERS,
  RESET_FIB_MEDICAL_VALUE,
  RESET_FIB_UNDERWRITING_JOURNEY,
} from "./product.types";
import { REHYDRATE } from "redux-persist";
import { LOGOUT, GET_USER_SUCCESS } from "@redux/user/user.actions";
import { IReduxState } from "@redux/_core/reducers";
import { GetCurrentUser } from "@graphql/_core/schema";
import moment from "moment";

export { IProductStore } from "./product.types";

export const initialState: IProductStore = {
  fib: {
    answers: {
      contactDetails: {
        firstAddressLine: "",
        secondAddressLine: "",
        townOrCity: "",
        postCode: "",
        personalEmail: "",
        phoneNumber: "",
      },
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
      weeklyAlcoholDrinks: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      firstName: "",
      lastName: "",
    },
    salary: 0,
    selectedPackage: "common",
    existingCovers: [],
    medicalHistory: {},
    quoteDate: "",
    lastQuestionId: "",
    hasPriceChanged: false,
    actualCost: 0,
    medicalInvestigationRequired: false,
    rejected: false,
    productEntityId: "",
    latestQuoteId: "",
  },
};

function personalProductReducer<T>(state: IProductStore = initialState, action: ProductActionTypes<T>) {
  switch (action.type) {
    case REHYDRATE:
      return rehydratePersonalProductStore(state, action.payload as IReduxState);
    case LOGOUT:
      return initialState;
    case GET_USER_SUCCESS:
      return getUserSuccess(state, action.payload);
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
            contactDetails: {
              ...initialState.fib.answers.contactDetails,
            },
          },
          existingCovers: initialState.fib.existingCovers,
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
    case RESET_FIB_UNDERWRITING_JOURNEY:
      return {
        ...state,
        fib: {
          ...state.fib,
          quoteDate: "",
          lastQuestionId: "",
          hasPriceChanged: false,
          actualCost: 0,
          medicalHistory: {},
          existingCovers: initialState.fib.existingCovers,
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
    default:
      return state;
  }
}

function rehydratePersonalProductStore(state: IProductStore, payload: IReduxState) {
  // payload is state on local storage state is initialState
  // payload could be undefined on fresh installs
  if (payload?.product?.fib) {
    // a persisted store might not have the additional keys we added
    // we need to ensure that the persisted store structure is up-to-date with the initialState
    const persistedKeys = Object.keys(payload.product.fib);

    const fibNewPersistedState = Object.keys(initialState.fib).reduce(
      (newPersistedState, key: keyof IProductStore["fib"]) => {
        // check that the key from initial state is present in persisted store
        // if it's not - default to initalState
        if (!persistedKeys.includes(key)) {
          (newPersistedState.fib as any)[key] = initialState.fib[key];
        }

        return newPersistedState;
      },
      // create a shallow copy of the persisted store
      { ...payload.product }
    );

    if (!fibNewPersistedState.fib.rejected) {
      fibNewPersistedState.fib.rejected = false;
    }

    return fibNewPersistedState;
  }

  return state;
}

/**
 * Update default values DoB and name if there's no value
 */
const getUserSuccess = (state: IProductStore, { getCurrentUser }: GetCurrentUser): IProductStore => {
  const newState = { ...state };

  const hasFIBDoB = state.fib?.answers?.birthDay && state.fib?.answers?.birthMonth && state.fib?.answers?.birthYear;
  if (!hasFIBDoB) {
    const dateOfBirth = moment(getCurrentUser.dateOfBirth).format("DD-MM-YYYY").split("-");
    newState.fib.answers.birthDay = state.fib?.answers?.birthDay || dateOfBirth[0];
    newState.fib.answers.birthMonth = state.fib?.answers?.birthMonth || dateOfBirth[1];
    newState.fib.answers.birthYear = state.fib?.answers?.birthYear || dateOfBirth[2];
  }

  if (!state.fib?.answers?.firstName || !state.fib?.answers?.lastName) {
    newState.fib.answers.firstName = getCurrentUser.firstName;
    newState.fib.answers.lastName = getCurrentUser.lastName;
  }

  return newState;
};

export default personalProductReducer;
