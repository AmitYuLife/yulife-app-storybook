import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as initialLevelsState } from "../levels.reducer";
import {
    getActiveLevel,
    getChallengesStatus,
    getCurrentLevel,
    getHasNotification,
    getNextLevelAvailableAt
} from "../levels.selectors";

describe("Levels Selectors", () => {

    const testAvailabilityForLevel = (level: number, done: number, available: number, isAvailable: boolean) => {
        const updatedState: IReduxState = {
            ...initialState,
            levels: {
                ...initialLevelsState,
                level,
                challengesDoneToday: done
            }
        };

        const expected = {
            available,
            done,
            hasDone: done > 0,
            isAvailable
        };

        const actual = getChallengesStatus(updatedState);

        expect(actual).toEqual(expected);
    };

    describe("getChallengesStatus returns the state and availability", () => {
        it("up to world 50 allows you to take one challenge a day", () => {
            testAvailabilityForLevel(1, 0, 1, true);
            testAvailabilityForLevel(16, 0, 1, true);
            testAvailabilityForLevel(50, 0, 1, true);
            testAvailabilityForLevel(50, 1, 1, false);
        });

        it("from world 51 to world 100 allows you to take two challenges a day", () => {
            testAvailabilityForLevel(51, 0, 2, true);
            testAvailabilityForLevel(51, 1, 2, true);
            testAvailabilityForLevel(100, 1, 2, true);
            testAvailabilityForLevel(100, 2, 2, false);
        });

        it("from world 101 to world 150 allows you to take three challenges a day", () => {
            testAvailabilityForLevel(101, 0, 3, true);
            testAvailabilityForLevel(101, 1, 3, true);
            testAvailabilityForLevel(101, 2, 3, true);
            testAvailabilityForLevel(150, 2, 3, true);
            testAvailabilityForLevel(101, 3, 3, false);
        });

        it("above world 150 allows you to take four challenges a day", () => {
            testAvailabilityForLevel(151, 0, 4, true);
            testAvailabilityForLevel(151, 1, 4, true);
            testAvailabilityForLevel(151, 2, 4, true);
            testAvailabilityForLevel(151, 3, 4, true);
            testAvailabilityForLevel(500, 3, 4, true);
            testAvailabilityForLevel(500, 4, 4, false);
        });
    });

    it ("getCurrentLevel returns the current level", () => {
        const updatedState: IReduxState = {
            ...initialState,
            levels: {
                ...initialLevelsState,
                level: 16,
                challengesDoneToday: 0
            }
        };

        const actual = getCurrentLevel(updatedState);

        expect(actual).toEqual(16);
    });

    it ("getNextLevelAvailableAt returns when the next level will be available", () => {
        const updatedState: IReduxState = {
            ...initialState,
            levels: {
                ...initialLevelsState,
                nextLevelAvailableAt: "sometimelater"
            }
        };

        const actual = getNextLevelAvailableAt(updatedState);

        expect(actual).toEqual("sometimelater");
    });

    it ("getActiveLevel returns the number of the active level", () => {
        const updatedState: IReduxState = {
            ...initialState,
            levels: {
                ...initialLevelsState,
                active: {
                    ...initialLevelsState.active,
                    level: 54
                }
            }
        };

        const actual = getActiveLevel(updatedState);

        expect(actual.level).toEqual(54);
    });

    it ("getHasNotification returns whether there should be a notification", () => {
        const updatedState: IReduxState = {
            ...initialState,
            levels: {
                ...initialLevelsState,
                active: {
                    ...initialLevelsState.active,
                    timeUp: true
                }
            }
        };

        const actual = getHasNotification(updatedState);

        expect(actual).toEqual(true);
    });
});
