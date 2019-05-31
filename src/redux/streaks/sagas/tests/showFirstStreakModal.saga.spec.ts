import { call, put, select } from "redux-saga/effects";
import { MODALS } from "../../../../navigation/constants";
import { getRouteState } from "../../../app/app.selectors";
import { getUserFeatures } from "../../../user/user.selectors";
import { displayStreaksFirstAction } from "../../streaks.actions";
import { getStreaks } from "../../streaks.selectors";
import showFirstStreakModalSaga, { showStreaksModal } from "../showFirstStreakModal.saga";

describe("chow first streak modal saga", () => {

    const testDataCalls = (testSaga: any, currentRoute?: string, currentStreak?: number) => {
        const streaksEffect = testSaga.next();
        expect(streaksEffect.value).toEqual(select(getStreaks));

        const routeEffect = testSaga.next({
            currentStreak,
            isAvailable: true,
            displayStreaks: false
        });

        expect(routeEffect.value).toEqual(select(getRouteState));

        const featuresEffect = testSaga.next(currentRoute);
        expect(featuresEffect.value).toEqual(select(getUserFeatures));
    };

    it("does nothing if streaks modal is already displayed", () => {
        const testSaga = showFirstStreakModalSaga();

        testDataCalls(testSaga, MODALS.streaks);

        const doneEffect = testSaga.next({ showStreaks: true });
        expect(doneEffect.done).toEqual(true);
    });

    it("displays streaks first action if it's not the first streak", () => {
        const testSaga = showFirstStreakModalSaga();

        testDataCalls(testSaga, "notstreakmodal", 1);

        const displayStreaksEffect = testSaga.next({ showStreaks: true });
        expect(displayStreaksEffect.value).toEqual(put(displayStreaksFirstAction()));

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });

    it("displays streaks modal if the first streak", () => {
        const testSaga = showFirstStreakModalSaga();

        testDataCalls(testSaga, "notstreakmodal", 0);

        const showModalEffect = testSaga.next({ showStreaks: true });
        expect(showModalEffect.value).toEqual(call(showStreaksModal, {
            currentStreak: 0,
            isAvailable: true,
            displayStreaks: false
        }));

        const displayStreaksEffect = testSaga.next({ showStreaks: true });
        expect(displayStreaksEffect.value).toEqual(put(displayStreaksFirstAction()));

        const doneEffect = testSaga.next();
        expect(doneEffect.done).toEqual(true);
    });
});
