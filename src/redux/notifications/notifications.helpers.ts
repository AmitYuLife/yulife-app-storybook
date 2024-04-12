import { t } from "@locale";
import { YULIFE_PN_CHANNEL_ID } from "@services/constants";
import { AndroidNotificationPriority, NotificationRequestInput } from "expo-notifications";

export const expoDefaultNotificationTrigger = {
  channelId: YULIFE_PN_CHANNEL_ID,
};

export const expoDefaultNotificationContent: Partial<NotificationRequestInput>["content"] = {
  sound: "default",
  vibrate: [300],
  priority: AndroidNotificationPriority.DEFAULT,
};

export const getNotificationTitleAndMessage = () => ({
  title: t("push_notification.challenge_completed.title"),
  message: t("push_notification.challenge_completed.message"),
});
