import { GetMobileCopy_getMobileCopy } from "@graphql/_core/schema";
import { REHYDRATE } from "redux-persist";
import { SyncAction } from "../_core/types";
import { UPDATE_COPY } from "./copy.actions";
import defaultData from "./copy.data";

export type ICopyStore = GetMobileCopy_getMobileCopy;

export const initialState: ICopyStore = {
    version: "",
    screens: defaultData
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
    const persistedStateKeys = Object.keys(persistedState.screens);

    if (defaultDataKeys.length > persistedStateKeys.length) {
        // when adding new screens, the persisted state doesn't have them
        const result: any = {};
        for (const key of defaultDataKeys) {
            if (!(persistedState.screens as any)[key]) {
                result[key] = (defaultData as any)[key];
            }
        }
        return { version: persistedState.version, screens: { ...persistedState.screens, ...result } };
    }

    return persistedState;
};
