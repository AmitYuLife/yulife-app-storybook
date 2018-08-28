import {
    UPDATE_APP_STATE
} from "../app.actions";
import appReducer, { initialState } from "../app.reducer";

// TODO update this to new style and add missing tests

describe("App Reducer", () => {

    it("handles action with unknown type", () => {
        expect(appReducer(initialState, { type: undefined })).toBeInstanceOf(Object);
        expect(appReducer(initialState, { type: undefined })).toEqual(initialState);
    });

    it("handles updateAppState action", () => {
        const appState = "inactive";
        const updatedStore = { ...initialState, appState };
        const action = { type: UPDATE_APP_STATE, payload: appState };
        expect(appReducer(initialState, action)).toEqual(updatedStore);
    });

});
