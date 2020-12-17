import upsertStepsChallenge from "@graphql/challenges/upsertPassiveChallenge.gql";
import moment from "moment";
import { REHYDRATE } from "redux-persist";
import { call, put, race, select, spawn, take, delay } from "redux-saga/effects";
import { PassiveChallengeType } from "../../../graphql/_core/schema/globalTypes";
import { queryMindfulSessions } from "../../../services/fitkit/fitkit.helpers";
import Logger from "../../../services/logging/logger";
import { UPDATE_APP_STATE } from "../../app/app.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { updateDailyMeditation, updateDailyMeditationEmptyResult } from "../daily-meditation.actions";

export default function* getDailyMeditation() {
  while (true) {
    try {
      const { appStart, appUpdated } = yield race({
        appStart: take(REHYDRATE),
        appUpdated: take(UPDATE_APP_STATE),
      });

      const userFeatures = yield select(getUserFeatures);

      if (userFeatures.usePassiveMeditation) {
        if (appStart || appUpdated.payload === "active") {
          const startTime = moment().startOf("day").format();

          const endTime = moment().format();

          const results = yield call(queryMindfulSessions, startTime, endTime, userFeatures);

          if (results.length > 0) {
            const meditationValue = Math.floor(results.reduce((acc: number, item: any) => acc + item.value, 0));
            let isUpdated = false;

            while (!isUpdated) {
              try {
                const { data } = yield call(
                  upsertStepsChallenge,
                  [
                    {
                      value: meditationValue,
                      endDateTime: endTime,
                      startDateTime: startTime,
                    },
                  ],
                  PassiveChallengeType.MEDITATION
                );

                yield put(updateDailyMeditation(data));

                isUpdated = true;
              } catch (e) {
                yield spawn(() => {
                  Logger.error(e, { event: "getDailyMeditation" });
                });
                yield delay(15000);
              }
            }
          } else {
            yield put(updateDailyMeditationEmptyResult());
          }
        }
      }
    } catch (e) {
      yield spawn(() => {
        Logger.error(e, { event: "getDailyMeditation" });
      });
      yield delay(15000);
    }
  }
}
