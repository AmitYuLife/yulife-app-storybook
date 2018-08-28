import { initialState } from "../../_core/reducers";
import { getAppState } from "../app.selectors";

// TODO update this to new style and add missing tests

describe("App Selectors", () => {

    const updatedStore = {
        ...initialState,
        appReducer: {
            ...initialState.app,
            appStarted: true,
            appState: "active"
        }
    };

    describe("appStateSelector", () => {

        const appState = getAppState(updatedStore);

        it("selects the appState", () => {
            expect(appState).toEqual(updatedStore.app.appState);
        });

    });
});
