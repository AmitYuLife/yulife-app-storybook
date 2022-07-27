import { addSecondsToChallengeEndDateTime } from "@utils";
import moment from "moment";
import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { defaultNotificationSettings } from "../notifications.helpers";

export default function* sendTestPushSaga() {
  yield call(() =>
    PushNotification.localNotificationSchedule({
      ...defaultNotificationSettings,
      title: "My Notification Title", // (optional, for iOS this is only used in apple watch)
      message: "My Notification Message", // (required)
      id: 0, // (optional)
      date: moment(addSecondsToChallengeEndDateTime(moment().format())).toDate(),

      // keep the rest for testing

      // bigText: "My big text that will be shown when notification is expanded", // (optional)
      // color: "red", // (optional) default: system default
      // group: "group", // (optional) add group to message
      // repeatType: "day",
      // subText: "This is a subText", // (optional) default: none
      // tag: "some_tag", // (optional) add tag to message
      // ticker: "My Notification Ticker", // (optional)
    })
  );
}
