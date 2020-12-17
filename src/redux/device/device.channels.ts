import { Platform } from "react-native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { eventChannel } from "redux-saga";
import Logger from "@services/logging/logger";
import { YULIFE_PN_CHANNEL_NAME, YULIFE_PN_CHANNEL_ID } from "@services/constants";

export function createPushNotificationsChannel() {
  return eventChannel((emitter) => {
    PushNotification.configure({
      onNotification: (notification) => {
        emitter(notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onRegister: (result) => {
        emitter(result);
      },
      onRegistrationError: (err) => {
        Logger.error(err, { event: "pushNotification" });
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      requestPermissions: Platform.OS === "android",
    });

    PushNotification.createChannel(
      {
        channelId: YULIFE_PN_CHANNEL_ID, // (required)
        channelName: YULIFE_PN_CHANNEL_NAME, // (required)
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => emitter({ created })
    );

    // PushNotification.popInitialNotification((notification) => {
    //     console.log("@DEVICE CHANNEL ... ", notification);
    // });

    return () => null;
  });
}

export function createPushPermissionsChannel() {
  return eventChannel((emitter) => {
    PushNotification.checkPermissions(emitter);
    return () => null;
  });
}
