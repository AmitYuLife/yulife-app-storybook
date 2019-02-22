import { SyncAction } from "../_core/types";
import { IYulifeNotification } from "./notifications.selectors";

export const NOTIFICATION_SUCCESS = "NOTIFICATION_SUCCESS";
export const NOTIFICATION_FAILED = "NOTIFICATION_FAILED";
export const UPDATE_NOTIFICATION_SETTINGS = "UPDATE_NOTIFICATION_SETTINGS";
export const SEND_TEST_LOCAL_PUSH = "SEND_TEST_LOCAL_PUSH";

export type UpdateNofiticationPayload = IYulifeNotification & {
    key: "activityInduced" | "challengeCompletion" | "dailyChallengeReminder" | "intercom" | "streakSaver";
};
export type UpdateNotificationSettingsActionResult = SyncAction<UpdateNofiticationPayload>;
export type UpdateNotificationSettingsAction = (
    payload: UpdateNofiticationPayload
) => UpdateNotificationSettingsActionResult;
export const updateNotificationSettings: UpdateNotificationSettingsAction = (payload) => ({
    payload,
    type: UPDATE_NOTIFICATION_SETTINGS
});

export type SendTestPushAction = () => SyncAction;
export const sendTestPush: SendTestPushAction = () => ({
    type: SEND_TEST_LOCAL_PUSH
});
