import { Platform, PushNotificationIOS } from "react-native";
import Config from "react-native-config";
import PushNotification from "react-native-push-notification";
import { eventChannel } from "redux-saga";

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
            requestPermissions: Platform.OS === "android",
            senderID: Config.GCM_SENDER_ID
        });

        return () => null;
    });
}

export function createPushPermissionsChannel() {
    return eventChannel((emitter) => {
        PushNotification.checkPermissions(emitter);
        return () => null;
    });
}
