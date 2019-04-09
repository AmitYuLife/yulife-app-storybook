import moment from "moment";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { challengeStartSuccessAction } from "../../levels/levels.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage, numericId } from "../notifications.helpers";
import { getChallengeCompletionNotification } from "../notifications.selectors";

export default function* scheduleChallengeNotificationSaga({
    payload: { createActiveChallenge }
}: ReturnType<typeof challengeStartSuccessAction>) {
    if (!createActiveChallenge.challenge) {
        return null;
    }

    const challengeCompletion = yield select(getChallengeCompletionNotification);

    if (challengeCompletion.active) {
        const { endDateTime, levelSlotId } = createActiveChallenge.challenge;
        const fixedId = numericId(levelSlotId);
        const details = getNotificationTitleAndMessage(challengeCompletion.id);

        yield call(() =>
            PushNotification.localNotificationSchedule({
                ...defaultNotificationSettings,
                date: moment(endDateTime).toDate(),
                group: "Yu Life Challenges", // (optional) add group to message
                id: fixedId, // (optional)
                tag: "challenge_complete", // (optional) add tag to message
                userInfo: Platform.OS === "ios" ? { id: fixedId } : null, // required to cancel iOS local notification
                ...details
            })
        );
    }
}
