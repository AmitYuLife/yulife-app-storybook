import { appStateSelector } from "../app.selectors";
import { initialState } from "../../_core/reducers";

// TODO update this to new style and add missing tests

describe("App Selectors", () => {

    const updatedStore = {
        ...initialState,
        appReducer: {
            ...initialState.app,
            appState: "active",
            appStarted: true,
        },
    };

    describe("appStateSelector", () => {

        const appState = appStateSelector(updatedStore);

        it("selects the appState", () => {
            expect(appState).toEqual(updatedStore.app.appState);
        });

    });
});
