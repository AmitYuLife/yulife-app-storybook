import {
    currentUserFixture,
    leaderboard,
    leaderboards,
    loginSuccessFixture
} from "@redux/user/tests/user.test.fixtures";
import { call, race, select, take } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../jest/tests-utils";
import { MODALS, ROUTES } from "../../../navigation/constants";
import { UPDATE_NAVIGATION_STATE } from "../../app/app.actions";
import { getRouteState } from "../../app/app.selectors";
import { START_DAILY_STEPS } from "../../daily-steps/daily-steps.actions";
import showLeaderboardInvite from "../sagas/showLeaderboardInvite.helper";
import showLeaderboardInviteSaga from "../sagas/showLeaderboardInviteOnGetUser.saga";
import showLeaderboardInviteOnLoginSaga from "../sagas/showLeaderboardInviteOnLogin.saga";
import { GET_USER_START } from "../user.actions";

describe("showLeaderboardInvite", async () => {
    it("should call showLeaderboardInvite correctly when route is !== MODALS.leaderboardInvite", async () => {
        const testSaga = showLeaderboardInvite(leaderboards);

        let actual: any = testSaga.next();
        let expected: any = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("someRoute");
        expected = call(() =>
            Navigation.showModal({
                component: {
                    id: MODALS.leaderboardInvite,
                    name: MODALS.leaderboardInvite,
                    passProps: {
                        leaderboardId: leaderboard.leaderboardId,
                        inviteFrom: leaderboard.inviteFrom
                    }
                }
            })
        );
        compareSagaActionsWithNoVisualDifference(actual, expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("should call showLeaderboardInvite correctly when route is === MODALS.leaderboardInvite", async () => {
        const testSaga = showLeaderboardInvite(leaderboards);

        let actual: any = testSaga.next();
        const expected: any = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(MODALS.leaderboardInvite);
        expect(actual.done).toEqual(true);
    });
});

describe("showLeaderboardInviteSaga", async () => {
    it("should call showLeaderboardInviteSaga correctly when route is !== ROUTES.onboardingSignUpReward", async () => {
        const testSaga = showLeaderboardInviteSaga({ payload: currentUserFixture, type: "GET_USER_SUCCESS" });

        let actual: any = testSaga.next();
        let expected: any = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next("");
        expected = call(showLeaderboardInvite, leaderboards);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(MODALS.leaderboardInvite);
        expect(actual.done).toEqual(true);
    });

    it("should call showLeaderboardInviteSaga correctly when route is === ROUTES.onboardingSignUpReward", async () => {
        const testSaga = showLeaderboardInviteSaga({ payload: currentUserFixture, type: "GET_USER_SUCCESS" });

        let actual: any = testSaga.next();
        let expected: any = select(getRouteState);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(ROUTES.onboardingSignUpReward);
        expected = take(UPDATE_NAVIGATION_STATE);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expected = call(showLeaderboardInvite, leaderboards);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next(MODALS.leaderboardInvite);
        expect(actual.done).toEqual(true);
    });
});

describe("showLeaderboardInviteOnLoginSaga", async () => {
    it("should call showLeaderboardInviteOnLoginSaga correctly", async () => {
        const testSaga = showLeaderboardInviteOnLoginSaga({ payload: loginSuccessFixture, type: "GET_USER_SUCCESS" });

        let actual: any = testSaga.next();
        let expected: any = race({
            startDailySteps: take(START_DAILY_STEPS),
            getUserStart: take(GET_USER_START)
        });
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next({ startDailySteps: true });
        expected = call(showLeaderboardInvite, loginSuccessFixture.loginUser.user.leaderboards);
        expect(actual.value).toEqual(expected);
        expect(actual.done).toEqual(false);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
