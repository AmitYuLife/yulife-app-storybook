import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { getPushNotifications, IPushNotification } from "../../device.selectors";
import requestPushSaga from "../requestPush.saga";

describe("Request Push requestPushSaga", () => {
    it("request permissions if status is not enabled", () => {
        const testSaga = requestPushSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        const mockPushPermissions: IPushNotification = {
            requested: true,
            status: "denied"
        };
        actual = testSaga.next(mockPushPermissions);
        expected = call(() => {
            PushNotification.requestPermissions();
        });
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("do not request permissions if status enabled", () => {
        const testSaga = requestPushSaga();

        let actual: any = testSaga.next();
        const expected = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        const mockPushPermissions: IPushNotification = {
            requested: true,
            status: "enabled"
        };
        actual = testSaga.next(mockPushPermissions);
        expect(actual.done).toEqual(true);
    });
});
