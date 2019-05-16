import { REHYDRATE } from "redux-persist";
import { UPDATE_COPY } from "../copy.actions";
import copyData from "../copy.data";
import { ICopyStore, initialState } from "../copy.reducer";
import copyReducer from "../copy.reducer";

const getMobilCopyFixture = {
    getMobileCopy: {
        version: "1.1",
        screens: copyData
    }
};

describe("Copy reducer", async () => {
    it("handles an action of unknown type", () => {
        const expected: ICopyStore = initialState;
        const actual = copyReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("should handle REHYDRATE correctly", () => {
        const expected: ICopyStore = initialState;
        const actual = copyReducer(initialState, { type: REHYDRATE });

        expect(actual).toEqual(expected);
    });

    it("should handle UPDATE_COPY correctly", () => {
        const expected: ICopyStore = getMobilCopyFixture.getMobileCopy;
        const actual = copyReducer(initialState, { type: UPDATE_COPY, payload: getMobilCopyFixture });

        expect(actual).toEqual(expected);
    });

    it("should handle UPDATE_COPY correctly when payload is null or undefined", () => {
        const actual = copyReducer(initialState, { type: UPDATE_COPY });

        expect(actual).toEqual(initialState);
    });
});
