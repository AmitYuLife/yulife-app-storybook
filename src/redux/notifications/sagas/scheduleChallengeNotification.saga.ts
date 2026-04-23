import { ApolloQueryResult } from "@apollo/client";
import moment from "moment";
import * as ExpoNotification from "expo-notifications";
import { call } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import client from "@graphql/_core/client";
import { gql, UserNotificationsType, GetUserNotificationsSettingsQuery } from "@graphql/__generated";
import { challengeStartSuccessAction } from "../../levels/levels.actions";
import {
  expoDefaultNotificationTrigger,
  expoDefaultNotificationContent,
  getNotificationTitleAndMessage,
} from "../notifications.helpers";
import { addSecondsToChallengeEndDateTime } from "@utils";

const getUserNotificationsSettings = () =>
  client().query({ query: gql(`GetUserNotificationsSettingsDocument`), fetchPolicy: "cache-first" });

type Action = ReturnType<typeof challengeStartSuccessAction>;

export default function* scheduleChallengeNotificationSaga({ payload }: Action) {
  if (
    !payload?.createQuestMapLevelChallenge?.challenge ||
    payload.createQuestMapLevelChallenge?.levelSlot?.subtype === "sudoku"
  ) {
    return;
  }

  const { createQuestMapLevelChallenge, videoDuration } = payload;

  if (videoDuration) {
    // for custom media we dont need a notification
    return;
  }

  try {
    const { data }: ApolloQueryResult<GetUserNotificationsSettingsQuery> = yield call(getUserNotificationsSettings);

    if (data?.pushNotifications?.notifications?.length) {
      const challengeCompletion = data.pushNotifications.notifications.find(
        (item) => item.type === UserNotificationsType.ChallengeCompletion
      );

      if (challengeCompletion?.isActive) {
        const { endDateTime, id } = createQuestMapLevelChallenge.challenge;
        const details = getNotificationTitleAndMessage();

        yield call(() =>
          ExpoNotification.scheduleNotificationAsync({
            identifier: id,
            trigger: {
              ...expoDefaultNotificationTrigger,
              type: ExpoNotification.SchedulableTriggerInputTypes.DATE,
              date: moment(addSecondsToChallengeEndDateTime(endDateTime)).toDate(),
            },
            content: {
              ...expoDefaultNotificationContent,
              title: details.title,
              body: details.message,
            },
          })
        );
      }
    }
  } catch (e) {
    Logger.notify(e, { file: "scheduleChallengeNotification.saga" });
  }
}
