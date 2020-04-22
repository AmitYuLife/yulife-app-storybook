import { GetMobileCopy_getMobileCopy } from "@graphql/_core/schema";
import { REHYDRATE } from "redux-persist";
import { SyncAction } from "../_core/types";
import { UPDATE_COPY } from "./copy.actions";
import defaultData from "./copy.data";

export type ICopyStore = GetMobileCopy_getMobileCopy;

export const initialState: ICopyStore = {
  version: "",
  screens: defaultData,
};

const copyReducer = (state: ICopyStore = initialState, action: SyncAction): ICopyStore => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.copy) {
        return rehydrate(action.payload.copy as ICopyStore);
      }
      return state;
    case UPDATE_COPY:
      if (action.payload && action.payload.getMobileCopy) {
        return action.payload.getMobileCopy;
      }
      return state;
    default:
      return state;
  }
};

export default copyReducer;

const rehydrate = (persistedState: ICopyStore) => {
  const defaultDataKeys = Object.keys(defaultData);

  const state: any = { version: persistedState.version, screens: {} };

  for (const key of defaultDataKeys) {
    const defaultCopy = (defaultData as any)[key];
    const persistedCopy = (persistedState.screens as any)[key];

    if (!persistedCopy) {
      // if the key is not in the persisted state, it means it's a new copy object
      state.screens[key] = defaultCopy;
    } else {
      // else persisted copy is fine
      state.screens[key] = { ...defaultCopy, ...persistedCopy };
    }
  }

  return state;
};
