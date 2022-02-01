/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChallengesPayload } from "@graphql/_core/schema/globalTypes";
import moment from "moment";
import { spawn, call, select, delay, put } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { getUserFeatures } from "../../user/user.selectors";
import upsertPassiveChallenges from "@graphql/challenges/upsertPassiveChallenges.gql";
import upsertDailyPassives from "@graphql/challenges/upsertDailyPassives.gql";
import { Platform } from "react-native";
import getPassiveChallengesLastUpdate from "@graphql/challenges/getPassiveChallengesLastUpdate.gql";
import { GetPassiveChallengesLastUpdate } from "@graphql/_core/schema";
import { ApolloQueryResult } from "apollo-client";
import { getRouteState } from "@redux/app/app.selectors";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "react-native-navigation";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import getPassiveSinceLastUpdateAndroid from "./getPassiveSinceLastUpdateAndroid.saga";
import getPassiveSinceLastUpdateIos from "./getPassiveSinceLastUpdateIos.saga";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { Unpacked } from "@utils";
import { getToken } from "@services/storage";

export default function* sendPassiveActivity(dataPayload: { payload: string; type: string }): any {
  const { payload: appState, type } = dataPayload || {};
  if (type === UPDATE_APP_STATE && appState !== "active") {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);
  if (!token) {
    return;
  }

  try {
    const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    if (!Object.keys(userFeatures).length) {
      return;
    }

    const { data }: ApolloQueryResult<GetPassiveChallengesLastUpdate> = yield call(getPassiveChallengesLastUpdate);

    const { meditation: meditationLastUpdate, cycling: cyclingLastUpdate, steps: stepsLastUpdate } =
      data?.getPassiveChallengesLastUpdate || {};

    if (!stepsLastUpdate && !meditationLastUpdate && !cyclingLastUpdate) {
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
            const mutation = userFeatures.usePassiveChallengesService ? upsertDailyPassives : upsertPassiveChallenges;
            const response = yield call(mutation, payload);
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

        if (route !== MODALS.collectReward) {
          const startDateTime = moment.min(
            moment(meditationLastUpdate),
            moment(stepsLastUpdate),
            moment(cyclingLastUpdate)
          );

          const firstDay = startDateTime.format("DD MMM");
          const lastDay = endOfYesterday.format("DD MMM");

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
