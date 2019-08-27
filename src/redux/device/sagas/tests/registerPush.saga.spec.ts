import { Platform } from "react-native";
import Config from "react-native-config";
import Mixpanel from "react-native-mixpanel";
import { PushNotification as IPushNotification } from "react-native-push-notification";
import { channel } from "redux-saga";
import { call, put, spawn, take } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { addDeviceToken, pushNotificationReceived } from "../../device.actions";
import { createPushNotificationsChannel } from "../../device.channels";
import { pushNotificationFixture } from "../../tests/device.fixtures";
import registerPushSaga from "../registerPush.saga";
import { handleNotification } from "../registerPush.saga";

describe("Register Push registerPushSaga", () => {
    it("add device token if token is provided", () => {
        const testSaga = registerPushSaga();

        let actual: any = testSaga.next();
        let expected: any = call(createPushNotificationsChannel);
        expect(actual.value).toEqual(expected);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        const result = { token: "token", os: "os" };
        actual = testSaga.next(result);
        expected = put(
            addDeviceToken({
                deviceToken: result.token
            })
        );
        expect(actual.value).toEqual(expected);
    });

    it("allow other modules to respond to a push in case token is not provided", () => {
        const testSaga = registerPushSaga();

        let actual: any = testSaga.next();
        let expected: any = call(createPushNotificationsChannel);
        expect(actual.value).toEqual(expected);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        const result: IPushNotification = pushNotificationFixture;

        actual = testSaga.next(result);
        expected = put(pushNotificationReceived(result));
        expect(actual.value).toEqual(expected);

        actual = testSaga.next(result);
        expected = call(handleNotification, result);
        expect(actual.value).toEqual(expected);
    });

    it("add device token if token is provided and Platoform.OS = android", () => {
        const testSaga = registerPushSaga();

        let actual: any = testSaga.next();
        let expected: any = call(createPushNotificationsChannel);
        expect(actual.value).toEqual(expected);

        Platform.OS = "android";
        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = spawn(() => {
            Mixpanel.initPushHandling(Config.INTERCOM_GCM_SENDER_ID);
        });
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        const result = { token: "token", os: "os" };
        actual = testSaga.next(result);
        expected = put(
            addDeviceToken({
                deviceToken: result.token
            })
        );
        expect(actual.value).toEqual(expected);
    });
});
