import moment from "moment";
import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as initalStreaksState } from "../streaks.reducer";
import { getStreakAwardId, getStreaks } from "../streaks.selectors";

describe("Streaks selectors", () => {

    it ("returns the correct streak data", () => {
        const nextStreakAvailableAt = moment().add(2, "day").format();
        const updatedState: IReduxState = {
            ...initialState,
            streaks: {
                ...initalStreaksState,
                streak: 2,
                displayStreak: true,
                isAvailable: true,
                maxStreak: 3,
                nextStreakAvailableAt,
                value: 8,
                type: "yucoin"
            }
        };

        const expected = {
            currentStreak: 2,
            displayStreak: true,
            isAvailable: true,
            isDoneToday: true,
            maxStreak: 3,
            nextStreakAvailableAt,
            reward: "8 yucoin"
        };

        const actual = getStreaks(updatedState);

        expect(actual).toEqual(expected);
    });

    it ("returns the streak award id", () => {
        const updatedState: IReduxState = {
            ...initialState,
            streaks: {
                ...initalStreaksState,
                streakAwardId: "awardsId"
            }
        };

        const actual = getStreakAwardId(updatedState);

        expect(actual).toEqual("awardsId");
    });
});
