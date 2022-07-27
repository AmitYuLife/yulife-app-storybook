import { YULIFE_PN_CHANNEL_ID } from "@services/constants";
import { PushNotificationScheduleObject } from "react-native-push-notification";

export const numericId = (id: string) => id.replace(/\D/g, "").substring(0, 9);

export const defaultNotificationSettings: Partial<PushNotificationScheduleObject> = {
  channelId: YULIFE_PN_CHANNEL_ID,
  autoCancel: true, // (optional) default: true
  largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
  ongoing: false, // (optional) set whether this is an "ongoing" notification
  // playSound: false, // (optional) default: true
  smallIcon: "ic_notification", // (optional) default: "ic_notification"
  soundName: "default", // (optional) Sound to play when the notification is shown
  vibrate: true, // (optional) default: true
  vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
};

export const getNotificationTitleAndMessage = () => ({
  title: "Challenge completed",
  message: "Time's up! Check how you did on your latest challenge.",
});
