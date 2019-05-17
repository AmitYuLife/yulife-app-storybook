import { PushNotification as IPushNotification } from "react-native-push-notification";
import {
    CANCEL_LOCAL_PUSH,
    cancelLocalPush,
    REQUIRE_PUSH_ENABLED,
    requirePushEnabled,
    SET_PUSH_PERMISSIONS,
    setPushPermissions
} from "../device.actions";
import {
    ADD_DEVICE_TOKEN,
    addDeviceToken,
    PUSH_NOTIFICATION_RECEIVED,
    pushNotificationReceived
} from "../device.actions";
import { deviceFixtures, partialDeviceStoreFixture, pushNotificationFixture } from "./device.fixtures";
describe("Device Actions", () => {
    describe("requirePushEnabled action", () => {
        const actual = requirePushEnabled();

        it("has correct type", () => {
            const expected = REQUIRE_PUSH_ENABLED;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("cancelLocalPush action", () => {
        const actual = cancelLocalPush();

        it("has correct type", () => {
            const expected = CANCEL_LOCAL_PUSH;

            expect(actual.type).toEqual(expected);
        });
    });

    describe("setPushPermissions action", () => {
        const actual = setPushPermissions(deviceFixtures);

        it("has correct type", () => {
            const expected = SET_PUSH_PERMISSIONS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = deviceFixtures;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("pushNotificationReceived action", () => {
        const mockPush: IPushNotification = pushNotificationFixture;

        const actual = pushNotificationReceived(mockPush);

        it("has correct type", () => {
            const expected = PUSH_NOTIFICATION_RECEIVED;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = mockPush;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("addDeviceToken action", () => {
        const actual = addDeviceToken(partialDeviceStoreFixture);

        it("has correct type", () => {
            const expected = ADD_DEVICE_TOKEN;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = partialDeviceStoreFixture;

            expect(actual.payload).toEqual(expected);
        });
    });
});
