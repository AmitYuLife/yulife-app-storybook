import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { initialState } from "../../../levels/levels.reducer";
import { getActiveLevel } from "../../../levels/levels.selectors";
import { numericId } from "../../notifications.helpers";
import cancelChallengeNotificationSaga from "../cancelChallengeNotification.saga";

describe("Challenge Notification Saga cancelChallengeNotificationSaga", () => {
    it("cancel local notification if level SlotID persist", () => {
        const testSaga = cancelChallengeNotificationSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getActiveLevel);
        expect(actual.value).toEqual(expected);

        const mockActiveLevel = { ...initialState.active, levelSlotId: "ID" };
        actual = testSaga.next(mockActiveLevel);
        expected = call(() =>
            PushNotification.cancelLocalNotifications({ id: numericId(mockActiveLevel.levelSlotId) })
        );
        compareSagaActionsWithNoVisualDifference(actual, expected);
    });

    it("do not cancel local notification if level SlotID is missing", () => {
        const testSaga = cancelChallengeNotificationSaga();

        let actual: any = testSaga.next();
        const expected = select(getActiveLevel);
        expect(actual.value).toEqual(expected);

        const mockActiveLevel = { ...initialState.active, levelSlotId: "" };
        actual = testSaga.next(mockActiveLevel);
        expect(actual.done).toEqual(true);
    });
});
