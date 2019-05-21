import moment from "moment";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { compareSagaActionsWithNoVisualDifference } from "../../../../../jest/tests-utils";
import { updateNotificationSettings } from "../../notifications.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage } from "../../notifications.helpers";
import updateNotificationSettingsSaga from "../updateNotificationSettings.saga";

describe("Notification Settings updateNotificationSettings.saga", () => {
    it("schedule local notification if payload active", () => {
        const mockPayload: ReturnType<typeof updateNotificationSettings> = {
            payload: { key: "dailyChallengeReminder", active: true, available: true, id: " ", name: " " },
            type: ""
        };

        const today = moment().format("YYYY-MM-DD");
        const dateStr = today;

        const details = getNotificationTitleAndMessage(mockPayload.payload.id);
        const testSaga = updateNotificationSettingsSaga(mockPayload);
        let actual: any = testSaga.next();
        const expected = call(() =>
            PushNotification.localNotificationSchedule({
                ...defaultNotificationSettings,
                date: moment(dateStr, "YYYY-MM-DD HH:mm").toDate(),
                group: "yulife notifications", // (optional) add group to message
                id: mockPayload.payload.id, // (optional)
                repeatType: "day",
                userInfo: Platform.OS === "ios" ? { id: mockPayload.payload.id } : null,
                ...details
            })
        );
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("cancel local notification if payload is NOT active", () => {
        const mockPayload: ReturnType<typeof updateNotificationSettings> = {
            payload: { key: "dailyChallengeReminder", active: false, available: true, id: " ", name: " " },
            type: ""
        };

        const testSaga = updateNotificationSettingsSaga(mockPayload);
        let actual: any = testSaga.next();
        const expected = call(() => PushNotification.cancelLocalNotifications({ id: mockPayload.payload.id }));
        compareSagaActionsWithNoVisualDifference(actual, expected);

        actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });

    it("don't do any action if payload key does not include [dailyChallengeReminder, streakSaver]", () => {
        const mockPayload: ReturnType<typeof updateNotificationSettings> = {
            payload: { key: "activityInduced", active: false, available: true, id: " ", name: " " },
            type: ""
        };

        const testSaga = updateNotificationSettingsSaga(mockPayload);
        const actual = testSaga.next();
        expect(actual.done).toEqual(true);
    });
});
