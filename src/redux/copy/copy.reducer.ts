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
            return action.payload.getMobileCopy;
        default:
            return state;
    }
};

export default copyReducer;

const rehydrate = (persistedState: ICopyStore) => {
    const defaultScreensLength = Object.keys(defaultData).length;
    const persistedScreensLength = Object.keys(persistedState.screens).length - 1;

    if (defaultScreensLength > persistedScreensLength) {
        // when adding new screens, the persisted state doesn't have them
        return { version: persistedState.version, screens: { ...persistedState.screens, ...defaultData } };
    }

    return persistedState;
};
