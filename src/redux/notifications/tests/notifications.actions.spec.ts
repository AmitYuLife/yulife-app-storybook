import {
    SEND_TEST_LOCAL_PUSH,
    sendTestPush,
    UPDATE_NOTIFICATION_SETTINGS,
    UpdateNofiticationPayload,
    updateNotificationSettings
} from "../notifications.actions";

describe("Notifications Actions", () => {
    describe("updateNotificationSettings", () => {
        const mock: UpdateNofiticationPayload = {
            key: "dailyChallengeReminder",
            active: true,
            available: true,
            id: " ",
            name: " ",
            snooze: 1,
            time: "string"
        };
        const actual = updateNotificationSettings(mock);

        it("has the correct type", () => {
            const expected = UPDATE_NOTIFICATION_SETTINGS;

            expect(actual.type).toEqual(expected);
        });

        it("has the correct payload", () => {
            const expected = mock;

            expect(actual.payload).toEqual(expected);
        });
    });

    describe("sendTestPush", () => {
        const actual = sendTestPush();

        it("has the correct type", () => {
            const expected = SEND_TEST_LOCAL_PUSH;

            expect(actual.type).toEqual(expected);
        });
    });
});
