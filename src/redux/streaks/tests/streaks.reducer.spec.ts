import {
    currentUserFixture as currentUser,
    loginSuccessFixture as loginUser
} from "../../user/tests/user.test.fixtures";
import { getUserSuccess, loginUserSuccess } from "../../user/user.actions";
import { displayStreaksFirstAction } from "../streaks.actions";
import streaksReducer, { IStreaksStore } from "../streaks.reducer";
import { initialState } from "../streaks.reducer";

describe("Streaks reducer", () => {
    it("handles an action of unknown type", () => {
        const expected: IStreaksStore = initialState;
        const actual = streaksReducer(initialState, { type: undefined });

        expect(actual).toEqual(expected);
    });

    it("updates the store on get user success", () => {
        const expected: IStreaksStore = {
            ...initialState,
            id: currentUser.getCurrentUser.activeStreak.id,
            streak: currentUser.getCurrentUser.activeStreak.streak,
            isAvailable: true,
            isRedeemed: false,
            maxStreak: currentUser.getCurrentUser.activeStreak.maxStreak,
            streakAwardId: currentUser.getCurrentUser.activeStreak.streakAwardId,
            value: currentUser.getCurrentUser.activeStreak.value
        };

        const actual = streaksReducer(initialState, getUserSuccess(currentUser));

        expect(actual).toEqual(expected);
    });

    it("updates the store on login user success", () => {
        const expected: IStreaksStore = {
            ...initialState,
            id: loginUser.loginUser.user.activeStreak.id,
            streak: loginUser.loginUser.user.activeStreak.streak,
            isAvailable: true,
            isRedeemed: false,
            maxStreak: loginUser.loginUser.user.activeStreak.maxStreak,
            streakAwardId: loginUser.loginUser.user.activeStreak.streakAwardId,
            value: loginUser.loginUser.user.activeStreak.value
        };

        const actual = streaksReducer(initialState, loginUserSuccess(loginUser));

        expect(actual).toEqual(expected);
    });

    it("updates the store on display streaks", () => {
        const expected: IStreaksStore = {
            ...initialState,
            displayStreak: true
        };

        const actual = streaksReducer(initialState, displayStreaksFirstAction());

        expect(actual).toEqual(expected);
    });
});
