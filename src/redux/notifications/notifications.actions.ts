import { IYulifeNotification } from "./notifications.selectors";

export const NOTIFICATION_SUCCESS = "NOTIFICATION_SUCCESS";
export const NOTIFICATION_FAILED = "NOTIFICATION_FAILED";
export const UPDATE_NOTIFICATION_SETTINGS = "UPDATE_NOTIFICATION_SETTINGS";
export const SEND_TEST_LOCAL_PUSH = "SEND_TEST_LOCAL_PUSH";

export type NotificationsKey =
    | "activityInduced"
    | "challengeCompletion"
    | "dailyChallengeReminder"
    | "intercom"
    | "streakSaver";

export type UpdateNofiticationPayload = IYulifeNotification & { key: NotificationsKey };
export const updateNotificationSettings = (payload: UpdateNofiticationPayload) => ({
    payload,
    type: UPDATE_NOTIFICATION_SETTINGS
});

export const sendTestPush = () => ({
    type: SEND_TEST_LOCAL_PUSH
});
