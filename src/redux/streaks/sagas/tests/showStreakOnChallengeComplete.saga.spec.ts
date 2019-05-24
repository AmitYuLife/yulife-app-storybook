import { call, select, take } from "redux-saga/effects";
import { getRouteState } from "../../../app/app.selectors";
import { GET_USER_SUCCESS } from "../../../user/user.actions";
import { getUserFeatures } from "../../../user/user.selectors";
import { getStreaks } from "../../streaks.selectors";
import showStreakOnChallengeCompleteSaga, { showModal } from "../showStreakOnChallengeComplete.saga";

describe("show streak on challenge complete saga", () => {

    const testDataCalls = (testSaga: any, streaksBeforeUpdate?: number, streaks?: number) => {
        const getStreaksEffect = testSaga.next();
        expect(getStreaksEffect.value).toEqual(select(getStreaks));

        const takeEffect = testSaga.next({ currentStreak: streaksBeforeUpdate });
        expect(takeEffect.value).toEqual(take(GET_USER_SUCCESS));

        const streaksEffect = testSaga.next();
        expect(streaksEffect.value).toEqual(select(getStreaks));

        const routeEffect = testSaga.next({ currentStreak: streaks });
        expect(routeEffect.value).toEqual(select(getRouteState));

        const featuresEffect = testSaga.next("routeThatIsNotAModal");
        expect(featuresEffect.value).toEqual(select(getUserFeatures));
    };

    it("does nothing if streaks aren't enabled", () => {
        const testSaga = showStreakOnChallengeCompleteSaga();

        testDataCalls(testSaga);

        const userFeatures = { showStreaks: false };
        const doneEffect = testSaga.next(userFeatures);

        expect(doneEffect.done).toEqual(true);
    });

    it("does nothing if there is no update", () => {
        const testSaga = showStreakOnChallengeCompleteSaga();

        testDataCalls(testSaga, 2, 2);

        const userFeatures = { showStreaks: true };
        const doneEffect = testSaga.next(userFeatures);

        expect(doneEffect.done).toEqual(true);
    });

    it("displays the streak modal if streaks are enabled and there is an update", () => {
        const testSaga = showStreakOnChallengeCompleteSaga();

        testDataCalls(testSaga, 1, 2);

        const userFeatures = { showStreaks: true };
        const showModalEffect = testSaga.next(userFeatures);

        expect(showModalEffect.value).toEqual(call(showModal, { currentStreak: 2 }));
    });
});
