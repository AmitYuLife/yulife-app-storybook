import { SyncAction } from "../_core/types";
import {
  FITKIT_AUTHORISE_FAILED,
  FITKIT_AUTHORISE_START,
  FITKIT_AUTHORISE_SUCCEEDED,
  FITKIT_SET_UP,
} from "./fitkit.actions";

export interface IFitkitStore {
  authorised: boolean;
  healthApp: string;
  available: boolean;
  initialized: boolean;
  loading: boolean;
}

export const getInitialState = (): IFitkitStore => ({
  authorised: true,
  healthApp: "",
  available: true,
  initialized: false,
  loading: true,
});

const fitkitReducer = (state: IFitkitStore = getInitialState(), action: SyncAction) => {
  switch (action.type) {
    case FITKIT_AUTHORISE_FAILED:
      return {
        ...state,
        authorised: state.healthApp === action.payload.healthApp ? false : state.authorised,
        healthApp: state.healthApp === action.payload.healthApp ? "" : state.healthApp,
        loading: false,
      };

    case FITKIT_AUTHORISE_SUCCEEDED:
      return {
        ...state,
        authorised: true,
        initialized: true,
        healthApp: action.payload.healthApp,
        loading: false,
      };

    case FITKIT_AUTHORISE_START:
      return {
        ...state,
        loading: true,
      };

    case FITKIT_SET_UP:
      return {
        ...state,
        ...action.payload,
        initialized: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default fitkitReducer;
