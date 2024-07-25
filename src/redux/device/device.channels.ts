import { eventChannel } from "redux-saga";
import Logger from "@services/logging/logger";

import * as ExpoNotification from "expo-notifications";
import { YULIFE_PN_CHANNEL_NAME, YULIFE_PN_CHANNEL_ID, YULIFE_PN_CHANNEL_DESCRIPTION } from "@services/constants";
import { isAndroid } from "@utils";

export async function createPushNotificationsChannel() {
  return eventChannel((emitter) => {
    ExpoNotification.setNotificationHandler({
      async handleNotification(notification) {
        emitter(notification);
        return {
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
          priority: ExpoNotification.AndroidNotificationPriority.DEFAULT,
        };
      },
      handleError(_, error) {
        Logger.error(error, { event: "pushNotification" });
      },
    });

    if (isAndroid()) {
      ExpoNotification.setNotificationChannelAsync(YULIFE_PN_CHANNEL_ID, {
        enableVibrate: true,
        enableLights: true,
        name: YULIFE_PN_CHANNEL_NAME,
        description: YULIFE_PN_CHANNEL_DESCRIPTION,
        importance: ExpoNotification.AndroidImportance.DEFAULT,
        lockscreenVisibility: ExpoNotification.AndroidNotificationVisibility.PUBLIC,
      });
    }

    ExpoNotification.getDevicePushTokenAsync()
      .then((value) =>
        emitter({
          os: value.type,
          token: value.data,
        })
      )
      .catch((error) => Logger.error(error, { event: "pushNotification" }));

    return () => null;
  });
}

/** should rename this into check iOS permissions */
export function createPushPermissionsChannel() {
  return eventChannel((emitter) => {
    ExpoNotification.getPermissionsAsync()
      .then((val) =>
        emitter({
          alert: val.ios.allowsAlert,
          badge: val.ios.allowsBadge,
          sound: val.ios.allowsSound,
        })
      )
      .catch((error) => Logger.error(error, { event: "pushNotification" }));

    return () => null;
  });
}
