import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as initialCopyState } from "../copy.reducer";
import { getCopy, getCopyVersion } from "../copy.selectors";

describe("Copy selectors", async () => {
    it("getCopyVersion should return copy version", async () => {
        const updatedState: IReduxState = {
            ...initialState,
            copy: {
                ...initialCopyState,
                version: "1.1.1"
            }
        };
        const expected = updatedState.copy.version;
        const actual = getCopyVersion(updatedState);

        expect(actual).toEqual(expected);
    });

    it("getCopy should return every screen copy", async () => {
        Object.keys(initialState.copy.screens).forEach((screen: keyof IReduxState["copy"]["screens"]) => {
            const actual = getCopy(initialState, screen);
            const expected = initialState.copy.screens[screen];
            expect(actual).toEqual(expected);
        });
    });
});
