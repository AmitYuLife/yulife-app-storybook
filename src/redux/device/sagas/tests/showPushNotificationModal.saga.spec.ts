import { compareSagaActionsWithNoVisualDifference } from "jest/tests-utils";
import { call, select } from "redux-saga/effects";
import { MODALS } from "../../../../navigation/constants";
import { getRouteState } from "../../../app/app.selectors";
import { getCopy } from "../../../copy/copy.selectors";
import { getPushNotifications, IPushNotification } from "../../device.selectors";
import showPushNotificationModalSaga from "../showPushNotificationModal.saga";

describe("Push Notification Saga showPushNotificationModalSaga", () => {
    it("get route state if permission status is not enabled", () => {
        const testSaga = showPushNotificationModalSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        const mockPush: IPushNotification = {
            requested: true,
            status: "denied"
        };
        actual = testSaga.next(mockPush);
        expected = select((state: any) => getCopy(state, "pushNotification"));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = select(getRouteState);
        expect(actual.value).toEqual(expected);

        actual = testSaga.next(MODALS.pushNotifications);
        expect(actual.done).toEqual(true);
    });

    it("show PushNotification modal if permission status is not enabled", () => {
        const testSaga = showPushNotificationModalSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        const mockPush: IPushNotification = {
            requested: true,
            status: "denied"
        };
        actual = testSaga.next(mockPush);
        expected = select((state: any) => getCopy(state, "pushNotification"));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        const mockCopy = {};
        actual = testSaga.next(mockCopy);
        expected = select(getRouteState);
        expect(actual.value).toEqual(expected);

        actual = testSaga.next(MODALS.challengeDetails);
        expected = call(() =>
            Navigation.showModal({
                component: {
                    id: MODALS.pushNotifications,
                    name: MODALS.pushNotifications,
                    passProps: {
                        fromChallenge: true,
                        mockPush,
                        mockCopy
                    }
                }
            })
        );

        expect(JSON.stringify(actual.value)).toEqual(JSON.stringify(expected));

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("end the logic if permission status is enabled", () => {
        const testSaga = showPushNotificationModalSaga();

        let actual: any = testSaga.next();
        let expected: any = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        const mockPush: IPushNotification = {
            requested: true,
            status: "enabled"
        };
        actual = testSaga.next(mockPush);
        expected = select((state: any) => getCopy(state, "pushNotification"));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
