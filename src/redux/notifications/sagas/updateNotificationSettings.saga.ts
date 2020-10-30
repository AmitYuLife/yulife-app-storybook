import moment from "moment";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { YULIFE_PN_CHANNEL_ID } from "@services/constants";
import { updateNotificationSettings } from "../notifications.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage } from "../notifications.helpers";

export default function* updateNotificationSettingsSaga({ payload }: ReturnType<typeof updateNotificationSettings>) {
  if (["dailyChallengeReminder", "streakSaver"].includes(payload.key)) {
    if (payload.active) {
      const today = moment().format("YYYY-MM-DD");
      const dateStr = today + " " + payload.time;

      const details = getNotificationTitleAndMessage(payload.id);

      yield call(() =>
        PushNotification.localNotificationSchedule({
          ...defaultNotificationSettings,
          date: moment(dateStr, "YYYY-MM-DD HH:mm").toDate(),
          group: "yulife notifications", // (optional) add group to message
          id: Number(payload.id), // (optional)
          channelId: YULIFE_PN_CHANNEL_ID,
          repeatType: "day",
          userInfo: Platform.OS === "ios" ? { id: payload.id } : null,
          ...details,
        })
      );
    } else {
      yield call(() => PushNotification.cancelLocalNotifications({ id: payload.id }));
    }
  }
}
