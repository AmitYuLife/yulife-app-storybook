import moment from "moment";
import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { defaultNotificationSettings } from "../notifications.helpers";

export default function* sendTestPushSaga() {
    yield call(() =>
        PushNotification.localNotificationSchedule({
            ...defaultNotificationSettings,
            bigText: "My big text that will be shown when notification is expanded", // (optional)
            color: "red", // (optional) default: system default
            date: moment()
                .add(5, "seconds")
                .toDate(),
            group: "group", // (optional) add group to message
            id: "0", // (optional)
            message: "My Notification Message", // (required)
            repeatType: "day",
            subText: "This is a subText", // (optional) default: none
            tag: "some_tag", // (optional) add tag to message
            ticker: "My Notification Ticker", // (optional)
            title: "My Notification Title" // (optional, for iOS this is only used in apple watch)
        })
    );
}
