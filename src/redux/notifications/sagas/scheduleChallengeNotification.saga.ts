import moment from "moment";
import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { YULIFE_PN_CHANNEL_ID } from "@services/constants";
import { challengeStartSuccessAction } from "../../levels/levels.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage, numericId } from "../notifications.helpers";
import { getChallengeCompletionNotification } from "../notifications.selectors";

export default function* scheduleChallengeNotificationSaga({
  payload: { createActiveChallenge },
}: ReturnType<typeof challengeStartSuccessAction>): Generator<any> {
  if (!createActiveChallenge.challenge) {
    return null;
  }

  const challengeCompletion: any = yield select(getChallengeCompletionNotification);

  if (challengeCompletion.active) {
    const { endDateTime, levelSlotId } = createActiveChallenge.challenge;
    const fixedId = numericId(levelSlotId);
    const details = getNotificationTitleAndMessage(challengeCompletion.id);
    const id = Number(fixedId);

    yield call(() =>
      PushNotification.localNotificationSchedule({
        ...defaultNotificationSettings,
        date: moment(endDateTime).toDate(),
        channelId: YULIFE_PN_CHANNEL_ID,
        group: "Yu Life Challenges", // (optional) add group to message
        id,
        tag: "challenge_complete", // (optional) add tag to message
        ...details,
      })
    );
  }
}
