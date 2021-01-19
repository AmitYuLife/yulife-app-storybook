import {
  UPDATE_FIB_VALUE,
  ProductActionTypes,
  IProductStore,
  UPDATE_FIB_MEDICAL_VALUE,
  UPDATE_FIB_ANSWER_VALUE,
  RESET_FIB_ANSWERS,
  RESET_FIB_MEDICAL_VALUE,
  RESET_FIB_UNDERWRITING_JOURNEY,
  REFRESH_FIB_STORE,
  RefreshFIBStoreAction,
  UpdateFIBValuesFromQuoteAction,
  UPDATE_FIB_VALUES_FROM_QUOTE,
  UpdateFIBStoreAction,
  UPDATE_FIB_STYLE,
  UpdateFIBStyle,
  RESET_FIB,
} from "./product.types";
import { REHYDRATE } from "redux-persist";
import { LOGOUT, GET_USER_SUCCESS } from "@redux/user/user.actions";
import { IReduxState } from "@redux/_core/reducers";
import { GetCurrentUser } from "@graphql/_core/schema";
import moment from "moment";
import {
  FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID,
  FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
  FIB_LIFESTYLE_ALCOHOL_SCREEN_ID,
  FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID,
  FIB_MEDICAL_FOLLOW_UP_QUESTIONS,
  FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
  FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
} from "../../components/containers/products/fib/data/underwriting-journey-data";
import { ScreeningStatus, YuWorld } from "@graphql/_core/schema/globalTypes";

export { IProductStore } from "./product.types";

export const initialState: IProductStore = Object.freeze({
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
      medicalConsent: false,
      previewMedicalTests: false,
      existingCovers: [],
      medicalHistory: {},
    },
    gpDetails: {
      practiceName: "",
      practiceAddress: "",
      practiceTown: "",
      practicePostCode: "",
      gpName: "",
    },
    salary: 0,
    selectedPackage: "common",
    quoteDate: "",
    lastQuestionId: "",
    hasPriceChanged: false,
    actualCost: 0,
    medicalInvestigationRequired: false,
    rejected: false,
    productEntityId: "",
    latestQuoteId: "",
    status: ScreeningStatus.NONE,
    fibStyle: YuWorld.forest,
  },
});

function personalProductReducer<T>(state: IProductStore = initialState, action: ProductActionTypes<T>) {
  switch (action.type) {
    case REHYDRATE:
      return rehydratePersonalProductStore({ ...state }, action.payload as IReduxState);
    case RESET_FIB:
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
      return updateFibAnswerValue(state, action);
    case UPDATE_FIB_MEDICAL_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          answers: {
            ...state.fib.answers,
            medicalHistory: {
              ...state.fib.answers.medicalHistory,
              [action.payload.key]: action.payload.value,
            },
          },
        },
      };
    case RESET_FIB_ANSWERS:
      return {
        ...state,
        fib: {
          ...state.fib,
          gpDetails: {
            ...initialState.fib.gpDetails,
          },
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
            existingCovers: [],
            medicalHistory: {},
          },
        },
      };
    case RESET_FIB_MEDICAL_VALUE: {
      const answers: IProductStore["fib"]["answers"] = { ...state.fib.answers, medicalHistory: {} };
      [
        ...FIB_MEDICAL_FOLLOW_UP_QUESTIONS,
        FIB_HIGH_CHOLESTEROL_EXTRA_SCREEN,
        FIB_HIGH_BLOOD_PRESSURE_EXTRA_SCREEN,
      ].forEach((questionId) => {
        if (answers[questionId]) {
          delete answers[questionId];
        }
      });

      return {
        ...state,
        fib: {
          ...state.fib,
          answers,
        },
      };
    }

    case RESET_FIB_UNDERWRITING_JOURNEY:
      return {
        ...state,
        fib: {
          ...initialState.fib,
          gpDetails: {
            ...initialState.fib.gpDetails,
          },
          answers: {
            ...initialState.fib.answers,
            medicalHistory: {},
            height: {
              ...initialState.fib.answers.height,
            },
            weight: {
              ...initialState.fib.answers.weight,
            },
            firstName: state.fib.answers.firstName,
            lastName: state.fib.answers.lastName,
            birthDay: state.fib.answers.birthDay,
            birthMonth: state.fib.answers.birthMonth,
            birthYear: state.fib.answers.birthYear,
            existingCovers: [],
          },
        },
      };
    case REFRESH_FIB_STORE:
      return refreshFibStore(state, action);
    case UPDATE_FIB_VALUES_FROM_QUOTE:
      return updateFibValuesFromQuote(state, action);
    case UPDATE_FIB_STYLE:
      return updateStoreFibStyle(state, action);
    default:
      return state;
  }
}

function validateBirthday(
  day: string,
  month: string,
  year: string,
  payload: IReduxState
): { birthDay: string; birthMonth: string; birthYear: string } {
  const dob = moment(`${year}-${month}-${day}`);
  if (dob.isValid()) {
    return { birthDay: day, birthMonth: month, birthYear: year };
  }

  const dateOfBirth = moment(payload?.user?.dateOfBirth);
  if (dateOfBirth.isValid()) {
    const parsedDateOfBirth = dateOfBirth.format("DD-MM-YYYY").split("-");
    return { birthDay: parsedDateOfBirth[0], birthMonth: parsedDateOfBirth[1], birthYear: parsedDateOfBirth[2] };
  }

  const now = moment();
  return {
    birthDay: now.date().toString(),
    birthMonth: `${now.month() + 1}`,
    birthYear: now.year().toString(),
  };
}

function validateName(firstName: string, lastName: string, payload: IReduxState) {
  const validatedFirstName = firstName ? firstName : payload.user?.firstName || "";
  const validatedLastName = lastName ? lastName : payload.user?.lastName || "";
  return { firstName: validatedFirstName, lastName: validatedLastName };
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

        // Do the same for answers object
        if (key === "answers") {
          const persistedAnswers = Object.keys(payload.product.fib.answers);

          (newPersistedState.fib as any)[key] = Object.keys(initialState.fib.answers).reduce(
            (newPersistedAnswers, answerKey) => {
              if (!persistedAnswers.includes(answerKey)) {
                newPersistedAnswers[answerKey] = initialState.fib.answers[answerKey];
              }

              return newPersistedAnswers;
            },
            { ...payload.product.fib.answers }
          );
        }

        return newPersistedState;
      },
      // create a shallow copy of the persisted store
      { ...payload.product }
    );

    const { birthDay, birthMonth, birthYear } = validateBirthday(
      fibNewPersistedState.fib.answers.birthDay,
      fibNewPersistedState.fib.answers.birthMonth,
      fibNewPersistedState.fib.answers.birthYear,
      payload
    );

    fibNewPersistedState.fib.answers.birthDay = birthDay;
    fibNewPersistedState.fib.answers.birthMonth = birthMonth;
    fibNewPersistedState.fib.answers.birthYear = birthYear;

    const { firstName, lastName } = validateName(
      fibNewPersistedState.fib.answers.firstName,
      fibNewPersistedState.fib.answers.lastName,
      payload
    );

    fibNewPersistedState.fib.answers.firstName = firstName;
    fibNewPersistedState.fib.answers.lastName = lastName;

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
const getUserSuccess = (state: IProductStore, { getCurrentUser, getTopUpsIds }: GetCurrentUser): IProductStore => {
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

  // Contact details
  newState.fib.answers.contactDetails.firstAddressLine = getCurrentUser.addressFirstLine;
  newState.fib.answers.contactDetails.phoneNumber = getCurrentUser.phone;
  newState.fib.answers.contactDetails.secondAddressLine = getCurrentUser.addressSecondLine;
  newState.fib.answers.contactDetails.townOrCity = getCurrentUser.addressCity;
  newState.fib.answers.contactDetails.postCode = getCurrentUser.addressPostCode;

  // Product ids
  newState.fib.latestQuoteId = getTopUpsIds.quoteId;
  newState.fib.productEntityId = getTopUpsIds.productId;

  return newState;
};

const refreshFibStore = (state: IProductStore, action: RefreshFIBStoreAction) => {
  const newState: any = {
    ...state,
    fib: {
      ...state.fib,
      answers: {
        ...state.fib.answers,
      },
    },
  };
  const userAnswers = action.payload.userAnswers;
  const quoteResult = action.payload;

  userAnswers.forEach((answer) => {
    let questionId = answer.questionId;
    let value = JSON.parse(answer.value);

    if (questionId === "salary") {
      return;
    }

    if (questionId === FIB_LIFESTYLE_ALCOHOL_SCREEN_ID) {
      questionId = "weeklyAlcoholDrinks";
    }

    if (questionId === FIB_THREE_YEAR_MEDICAL_HISTORY_SCREEN_ID) {
      questionId = "medicalHistory";
    }

    if (questionId === FIB_FINANCIAL_COVER_LIST_SCREEN_ID) {
      questionId = "existingCovers";
    }

    if (questionId === "contactDetails") {
      value = {
        firstAddressLine: value?.addressFirstLine,
        secondAddressLine: value?.addressSecondLine,
        townOrCity: value?.addressCity,
        postCode: value?.addressPostCode,
        personalEmail: value?.email,
        phoneNumber: value?.phone,
      };
    }

    newState.fib.answers[questionId] = value;
  });
  // Update specific quote values
  newState.fib.rejected = quoteResult.rejected;
  newState.fib.medicalInvestigationRequired = quoteResult.medicalInvestigationRequired;
  newState.fib.actualCost = quoteResult.actualCost;
  newState.fib.status = quoteResult.status;
  newState.fib.selectedPackage = quoteResult.coverType;
  newState.fib.latestQuoteId = quoteResult.quoteId;
  newState.fib.productEntityId = quoteResult.productEntityId;
  newState.fib.quoteDate = quoteResult.createdAt;
  newState.fib.salary = quoteResult.salary;
  // TODO: Save latestQuestionId in user session?
  newState.fib.lastQuestionId = newState.fib.latestQuoteId ? FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID : "";

  return newState;
};

const updateFibValuesFromQuote = (state: IProductStore, action: UpdateFIBValuesFromQuoteAction) => {
  const newQuoteData = action.payload;
  const quoteId = newQuoteData?.quoteId;
  const actualCost = newQuoteData?.actualCost;
  const medicalInvestigationRequired = newQuoteData?.medicalInvestigationRequired;
  const rejected = newQuoteData?.rejected;
  const salary = newQuoteData?.salary;

  const newState: IProductStore = {
    ...state,
    fib: {
      ...state.fib,
      latestQuoteId: quoteId || state.fib.latestQuoteId,
      actualCost: actualCost || state.fib.actualCost,
      medicalInvestigationRequired: medicalInvestigationRequired || state.fib.medicalInvestigationRequired,
      rejected: rejected || state.fib.rejected,
      quoteDate: moment().format("YYYY-MM-DD"),
      salary: salary || state.fib.salary,
      answers: {
        ...state.fib.answers,
      },
    },
  };

  return newState;
};

const updateFibAnswerValue = (state: IProductStore, action: UpdateFIBStoreAction<any>) => {
  const newState = {
    ...state,
    fib: {
      ...state.fib,
      answers: {
        ...state.fib.answers,
        [action.payload.key]: action.payload.value,
      },
    },
  };

  if (!action.payload.value) {
    delete newState.fib.answers[action.payload.key];
  }

  return newState;
};

function updateStoreFibStyle(state: IProductStore, action: UpdateFIBStyle) {
  const newState = {
    ...state,
    fib: {
      ...state.fib,
      fibStyle: action.payload,
    },
  } as IProductStore;

  return newState;
}

export default personalProductReducer;
