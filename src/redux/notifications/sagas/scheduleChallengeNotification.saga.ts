import { ApolloQueryResult } from "@apollo/client";
import moment from "moment";
import * as ExpoNotification from "expo-notifications";
import { call } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { GetUserNotificationsSettings } from "@graphql/_core/schema";
import { UserNotificationsType } from "@graphql/_core/schema/globalTypes";
import getUserNotificationsSettings from "@graphql/pushNotifications/getUserNotificationsSettings.gql";
import { challengeStartSuccessAction } from "../../levels/levels.actions";
import {
  expoDefaultNotificationTrigger,
  expoDefaultNotificationContent,
  getNotificationTitleAndMessage,
  numericId,
} from "../notifications.helpers";
import { addSecondsToChallengeEndDateTime } from "@utils";

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
    const { data }: ApolloQueryResult<GetUserNotificationsSettings> = yield call(getUserNotificationsSettings);

    if (data?.getUserNotificationsSettings?.length) {
      const challengeCompletion = data.getUserNotificationsSettings.find(
        (item) => item.type === UserNotificationsType.challengeCompletion
      );

      if (challengeCompletion?.isActive) {
        const { endDateTime, levelSlotId } = createQuestMapLevelChallenge.challenge;
        const fixedId = numericId(levelSlotId);
        const details = getNotificationTitleAndMessage();
        const id = fixedId;

        yield call(() =>
          ExpoNotification.scheduleNotificationAsync({
            identifier: id,
            trigger: {
              ...expoDefaultNotificationTrigger,
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
    Logger.error(e, { file: "scheduleChallengeNotification.saga" });
  }
}
