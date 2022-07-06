/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { spawn, call, select, delay, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getUserFeatures, getUserPassiveChallengesLastUpdate } from "../../user/user.selectors";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { Platform } from "react-native";
import { getRouteState } from "@redux/app/app.selectors";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import getPassiveSinceLastUpdateAndroid from "./getPassiveSinceLastUpdateAndroid.saga";
import getPassiveSinceLastUpdateIos from "./getPassiveSinceLastUpdateIos.saga";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";
import { getReadableShortDateFormat } from "@locale";

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

    const { meditation: meditationLastUpdate, cycling: cyclingLastUpdate, steps: stepsLastUpdate } = yield select(
      getUserPassiveChallengesLastUpdate
    );

    if (!stepsLastUpdate && !meditationLastUpdate && !cyclingLastUpdate) {
      return;
    }

    const yesterdayMoment = moment().startOf("day").subtract(1, "day");
    const isStepLastUpdateYesterday = moment(stepsLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
    const isMeditationLastUpdateYesterday = moment(meditationLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);
    const isCyclingLastUpdateYesterday = moment(cyclingLastUpdate).startOf("day").isSameOrAfter(yesterdayMoment);

    if (
      isStepLastUpdateYesterday &&
      isMeditationLastUpdateYesterday &&
      (!userFeatures.passiveCyclingEnabled || isCyclingLastUpdateYesterday)
    ) {
      return;
    }

    const shouldQueryCycling = cyclingLastUpdate && userFeatures.passiveCyclingEnabled;
    const endOfYesterday = moment().subtract(1, "day").endOf("day");

    let allResults: ChallengesPayload[] = [];
    if (Platform.OS === "android") {
      allResults = yield call(
        getPassiveSinceLastUpdateAndroid,
        stepsLastUpdate,
        meditationLastUpdate,
        cyclingLastUpdate,
        shouldQueryCycling,
        userFeatures
      );
    } else {
      allResults = yield call(
        getPassiveSinceLastUpdateIos,
        stepsLastUpdate,
        meditationLastUpdate,
        cyclingLastUpdate,
        shouldQueryCycling,
        userFeatures
      );
    }

    if (allResults.length) {
      let awardedYucoin = 0;
      while (allResults.length > 0) {
        const payload = allResults.splice(0, 15);
        let isUpdated = false;
        while (!isUpdated) {
          try {
            const response = yield call(upsertDailyPassives, payload);
            const mutationResult = response?.data?.upsertPassiveChallenges || response?.data?.upsertDailyPassives;

            awardedYucoin += mutationResult?.totalCoins || 0;
            yield delay(5000);
            isUpdated = true;
          } catch (e) {
            yield spawn(() => {
              Logger.error(e, { event: "upsertPassiveChallengesSinceLastUpdate" });
            });
            yield delay(15000);
          }
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

          yield showRewardModal(firstDay, lastDay, awardedYucoin);
          yield put(refreshTotalCoins());
        }
      }
    }
  } catch (e) {
    yield call(() => {
      Logger.error(e, { event: "sendPassiveActivitySinceLastUpdate" });
    });
  }
}

function* showRewardModal(firstDay: string, lastDay: string, awardedYucoin: number) {
  const date = firstDay !== lastDay ? `${firstDay} - ${lastDay}` : firstDay;
  yield call(() => {
    showYuModal({
      component: {
        id: MODALS.collectReward,
        name: MODALS.collectReward,
        passProps: {
          date,
          onPress: () => Navigation.dismissModal(MODALS.collectReward),
          yucoin: awardedYucoin,
        },
      },
    });
  });
}
