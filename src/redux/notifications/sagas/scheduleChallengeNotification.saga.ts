import { ApolloQueryResult } from "apollo-client";
import moment from "moment";
import PushNotification from "react-native-push-notification";
import { call } from "redux-saga/effects";
import { YULIFE_PN_CHANNEL_ID } from "@services/constants";
import Logger from "@services/logging/logger";
import { GetUserNotificationsSettings } from "@graphql/_core/schema";
import { UserNotificationsType } from "@graphql/_core/schema/globalTypes";
import getUserNotificationsSettings from "@graphql/pushNotifications/getUserNotificationsSettings.gql";
import { challengeStartSuccessAction } from "../../levels/levels.actions";
import { defaultNotificationSettings, getNotificationTitleAndMessage, numericId } from "../notifications.helpers";
import { addSecondsToChallengeEndDateTime } from "@services/utils";

export default function* scheduleChallengeNotificationSaga({
  payload: { createActiveChallenge },
}: ReturnType<typeof challengeStartSuccessAction>) {
  if (!createActiveChallenge.challenge) {
    return;
  }

  try {
    const { data }: ApolloQueryResult<GetUserNotificationsSettings> = yield call(getUserNotificationsSettings);

    if (data?.getUserNotificationsSettings?.length) {
      const challengeCompletion = data.getUserNotificationsSettings.find(
        (item) => item.type === UserNotificationsType.challengeCompletion
      );

      if (challengeCompletion?.isActive) {
        const { endDateTime, levelSlotId } = createActiveChallenge.challenge;
        const fixedId = numericId(levelSlotId);
        const details = getNotificationTitleAndMessage();
        const id = Number(fixedId);

        yield call(() =>
          PushNotification.localNotificationSchedule({
            ...defaultNotificationSettings,
            date: moment(addSecondsToChallengeEndDateTime(endDateTime)).toDate(),
            channelId: YULIFE_PN_CHANNEL_ID,
            group: "Yu Life Challenges", // (optional) add group to message
            id,
            tag: "challenge_complete", // (optional) add tag to message
            ...details,
          })
        );
      }
    }
  } catch (e) {
    Logger.error(e, { file: "scheduleChallengeNotification.saga" });
  }
}
