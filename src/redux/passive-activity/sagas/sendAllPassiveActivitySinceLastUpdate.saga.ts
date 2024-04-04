/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { spawn, call, select, delay, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getUserFeatures, getUserPassiveChallengesLastUpdate } from "../../user/user.selectors";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { Platform } from "react-native";
import { getRouteState } from "@redux/app/app.selectors";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import getPassiveSinceLastUpdateAndroid from "./getPassiveSinceLastUpdateAndroid.saga";
import getPassiveSinceLastUpdateIos from "./getPassiveSinceLastUpdateIos.saga";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { getReadableShortDateFormat } from "@locale";
import { getVideoPlayerIsActive } from "@redux/levels/levels.selectors";
import { PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT } from "@services/constants";
import { DETOX_ENABLED } from "@services/socket";
import { ChallengesPayload } from "@graphql/__generated";

export default function* sendPassiveActivity(): any {
  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  const readableDateFormat = getReadableShortDateFormat();

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const {
      meditation: meditationLastUpdate,
      cycling: cyclingLastUpdate,
      steps: stepsLastUpdate,
    } = yield select(getUserPassiveChallengesLastUpdate);

    if (!stepsLastUpdate && !meditationLastUpdate && !cyclingLastUpdate) {
      return;
    }

    const endOfYesterday = moment().subtract(1, "day").endOf("day");

    let awardedYucoin = 0;
    let dynamicStepsLastUpdate = stepsLastUpdate;
    let dynamicMeditationLastUpdate = meditationLastUpdate;
    let dynamicCyclingLastUpdate = cyclingLastUpdate;
    let allResults: ChallengesPayload[] = [];
    let lastUpdateValidation = isPassiveActivityUpToDate(
      dynamicStepsLastUpdate,
      dynamicMeditationLastUpdate,
      dynamicCyclingLastUpdate
    );

    let attempts = 0;
    while (!lastUpdateValidation.upToDate && attempts < 12) {
      attempts++;

      const { isStepLastUpdateYesterday, isMeditationLastUpdateYesterday, isCyclingLastUpdateYesterday } =
        lastUpdateValidation;
      if (Platform.OS === "android") {
        allResults = yield call(
          getPassiveSinceLastUpdateAndroid,
          isStepLastUpdateYesterday ? undefined : dynamicStepsLastUpdate,
          isMeditationLastUpdateYesterday ? undefined : dynamicMeditationLastUpdate,
          isCyclingLastUpdateYesterday ? undefined : dynamicCyclingLastUpdate,
          userFeatures
        );
      } else {
        allResults = yield call(
          getPassiveSinceLastUpdateIos,
          isStepLastUpdateYesterday ? undefined : dynamicStepsLastUpdate,
          isMeditationLastUpdateYesterday ? undefined : dynamicMeditationLastUpdate,
          isCyclingLastUpdateYesterday ? undefined : dynamicCyclingLastUpdate,
          userFeatures
        );
      }

      if (allResults.length) {
        while (allResults.length > 0) {
          const payload = allResults.splice(0, 15);
          let isUpdated = false;

          while (!isUpdated) {
            try {
              const response: Unpacked<typeof upsertDailyPassives> = yield call(upsertDailyPassives, payload);

              awardedYucoin += response?.data?.upsertDailyPassives?.totalCoins || 0;
              if (!DETOX_ENABLED) {
                yield delay(5000);
              }

              isUpdated = true;
            } catch (e) {
              yield spawn(() => {
                Logger.error(e, { event: "upsertPassiveChallengesSinceLastUpdate" });
              });
              yield delay(15000);
            }
          }
        }
      }

      dynamicStepsLastUpdate = moment(dynamicStepsLastUpdate).add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days").format();
      dynamicMeditationLastUpdate = moment(dynamicMeditationLastUpdate)
        .add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days")
        .format();
      dynamicCyclingLastUpdate = moment(dynamicCyclingLastUpdate)
        .add(PASSIVE_ACTIVITY_LAST_UPDATE_LIMIT, "days")
        .format();
      lastUpdateValidation = isPassiveActivityUpToDate(
        dynamicStepsLastUpdate,
        dynamicMeditationLastUpdate,
        dynamicCyclingLastUpdate
      );

      if (!lastUpdateValidation.upToDate && !DETOX_ENABLED) {
        yield delay(5000);
      }
    }

    if (awardedYucoin > 0) {
      const route = yield select(getRouteState);

      // check for token before showing collect modal
      // user can logout before last update query is finished
      const userToken: Unpacked<typeof getToken> = yield call(getToken);
      if (!userToken) {
        return;
      }

      if (route !== MODALS.collectReward) {
        const startDateTime = moment.min(
          moment(meditationLastUpdate),
          moment(stepsLastUpdate),
          moment(cyclingLastUpdate)
        );

        /*
         user was already awarded for startDateTime once last update was set as startDateTime,
         to not make user confused why we're awarding twice for the same day
         we should add one day to the startDateTime.
        */
        if (startDateTime.format(readableDateFormat) !== endOfYesterday.format(readableDateFormat)) {
          startDateTime.add(1, "day");
        }

        const firstDay = startDateTime.format(readableDateFormat);
        const lastDay = endOfYesterday.format(readableDateFormat);

        // adding 6s delay here to prevent it to colliding with leanplum modal
        yield delay(6000);
        yield showRewardModal(firstDay, lastDay, awardedYucoin);
        yield put(refreshTotalCoins());
      }
    }
  } catch (e) {
    yield call(() => {
      Logger.error(e, { event: "sendPassiveActivitySinceLastUpdate" });
    });
  }
}

const isPassiveActivityUpToDate = (
  stepsLastUpdate: string,
  meditationLastUpdate: string,
  cyclingLastUpdate: string
) => {
  const yesterdayMoment = moment().startOf("day").subtract(1, "day");
  const isStepLastUpdateYesterday = moment(stepsLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
  const isMeditationLastUpdateYesterday = moment(meditationLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
  const isCyclingLastUpdateYesterday = moment(cyclingLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);

  const upToDate = isStepLastUpdateYesterday && isMeditationLastUpdateYesterday && isCyclingLastUpdateYesterday;
  return { upToDate, isStepLastUpdateYesterday, isMeditationLastUpdateYesterday, isCyclingLastUpdateYesterday };
};

function* showRewardModal(firstDay: string, lastDay: string, awardedYucoin: number) {
  const heading = firstDay !== lastDay ? `${firstDay} - ${lastDay}` : firstDay;

  const videoPlayerIsActive: ReturnType<typeof getVideoPlayerIsActive> = yield select(getVideoPlayerIsActive);

  if (!videoPlayerIsActive) {
    yield call(() => {
      showYuModal({
        component: {
          id: MODALS.collectReward,
          name: MODALS.collectReward,
          passProps: {
            heading,
            onPress: () => Navigation.dismissModal(MODALS.collectReward),
            yucoin: awardedYucoin,
          },
        },
      });
    });
  }
}
