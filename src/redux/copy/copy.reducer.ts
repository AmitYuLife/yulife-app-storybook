import { SyncAction } from "../_core/types";
import { UPDATE_COPY } from "./copy.actions";
import defaultData from "./copy.data";

export interface ICopyStore {
    version: string;
    screens: any;
}

export const initialState: ICopyStore = {
    version: "",
    screens: defaultData
};

const copyReducer = (state: ICopyStore = initialState, action: SyncAction): ICopyStore => {
    switch (action.type) {
        case UPDATE_COPY:
            return action.payload.getMobileCopy;
        default:
            return state;
    }
};

export default copyReducer;
