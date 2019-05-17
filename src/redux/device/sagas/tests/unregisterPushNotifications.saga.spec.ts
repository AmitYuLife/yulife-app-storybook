import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import unregisterPushNotificationsSaga from "../unregisterPushNotifications.saga";
describe("Push Notification Saga unregisterPushNotificationsSaga", () => {
    it("unregister push", () => {
        const testSaga = unregisterPushNotificationsSaga();

        let actual: any = testSaga.next();
        let expected: any = call(() => PushNotification.cancelAllLocalNotifications);

        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = call(() => PushNotification.setApplicationIconBadgeNumber(0));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = call(() => PushNotification.unregister);
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
