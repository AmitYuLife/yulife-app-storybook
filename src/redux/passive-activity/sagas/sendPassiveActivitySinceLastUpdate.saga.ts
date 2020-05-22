import addData from "@graphql/challenges/addData.gql";
import { AddHistoricalSteps_addHistoricalSteps } from "@graphql/_core/schema";
import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { ChallengePayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { MODALS } from "@navigation/constants";
import { getLastUpdatedBeforeToday as getStepsLastUpdateBeforeToday } from "@redux/daily-steps/daily-steps.selectors";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { call, put, select, spawn, delay } from "redux-saga/effects";
import { queryMindfulSessions, querySteps } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { pathOr } from "@services/utils";
import { getRouteState } from "../../app/app.selectors";
import { meditationSinceLastUpdateSuccess } from "../../daily-meditation/daily-meditation.actions";
import { getLastUpdatedBeforeToday as getMeditationLastUpdatedBeforeToday } from "../../daily-meditation/daily-meditation.selectors"; // tslint:disable-line
import { stepsSinceLastUpdateSuccess } from "../../daily-steps/daily-steps.actions";
import { getUserFeatures } from "../../user/user.selectors";

type HistoricalData = AddHistoricalSteps_addHistoricalSteps;

export default function* sendPassiveActivity() {
  try {
    const features = yield select(getUserFeatures);
    const startOfDay = moment().startOf("day");

    const meditationLastUpdatedBeforeToday = yield select(getMeditationLastUpdatedBeforeToday);

    let meditationHistoricalDataResponse: HistoricalData;

    if (
      meditationLastUpdatedBeforeToday &&
      moment(meditationLastUpdatedBeforeToday).isBefore(startOfDay) &&
      features.usePassiveMeditation
    ) {
      const startTime = moment(meditationLastUpdatedBeforeToday).startOf("day").format();
      const endTime = moment().subtract(1, "day").endOf("day").format();

      const meditationResults = yield call(queryMindfulSessions, startTime, endTime, features);

      if (meditationResults.length > 0) {
        const aggregateMeditationChallengeArray: ChallengePayload[] = sampleMeditationDataToAggregatedData(
          startTime,
          endTime,
          meditationResults
        );
        let isUpdated = false;
        while (!isUpdated) {
          try {
            const res = yield call(addData, aggregateMeditationChallengeArray, PassiveChallengeType.MEDITATION);

            meditationHistoricalDataResponse = pathOr<HistoricalData>(res, "data.addData", {
              endDateTime: "",
              startDateTime: "",
              yucoin: 0,
            });

            isUpdated = true;
            yield put(meditationSinceLastUpdateSuccess());
          } catch (e) {
            yield spawn(() => Logger.logMixpanelError(e, "sendMeditationSinceLastUpdated"));
            yield delay(15000);
          }
        }
      }
    }

    const lastUpdatedBeforeToday = yield select(getStepsLastUpdateBeforeToday);
    let stepsHistoricalDataResponse: HistoricalData;

    if (lastUpdatedBeforeToday) {
      const momentLastUpdatedBeforeToday = moment(lastUpdatedBeforeToday);

      if (momentLastUpdatedBeforeToday.isBefore(startOfDay)) {
        let isUpdated = false;
        // get steps from start of last updated date until the end of previous day
        const { results } = yield call(
          querySteps,
          momentLastUpdatedBeforeToday.clone().startOf("day"),
          moment().subtract(1, "day").endOf("day"),
          features
        );

        if (results.length > 0) {
          while (!isUpdated) {
            try {
              const res = yield call(addHistoricalSteps, results, true, true);
              stepsHistoricalDataResponse = pathOr<HistoricalData>(res, "data.addHistoricalSteps", {
                endDateTime: "",
                startDateTime: "",
                yucoin: 0,
              });

              isUpdated = true;
              yield put(stepsSinceLastUpdateSuccess());
            } catch (e) {
              yield spawn(() => Logger.logMixpanelError(e, "sendStepsSinceLastUpdated"));
              yield delay(15000);
            }
          }
        }
      }
    }

    const awardedYucoin =
      (meditationHistoricalDataResponse ? meditationHistoricalDataResponse.yucoin : 0) +
      (stepsHistoricalDataResponse ? stepsHistoricalDataResponse.yucoin : 0);

    if (awardedYucoin > 0) {
      const route = yield select(getRouteState);

      if (route !== MODALS.collectReward) {
        let startDateTime;
        let endDateTime;

        if (meditationHistoricalDataResponse && stepsHistoricalDataResponse) {
          startDateTime = moment(meditationHistoricalDataResponse.startDateTime).isBefore(
            moment(stepsHistoricalDataResponse.startDateTime)
          )
            ? meditationHistoricalDataResponse.startDateTime
            : stepsHistoricalDataResponse.startDateTime;

          endDateTime = moment(meditationHistoricalDataResponse.endDateTime).isBefore(
            moment(stepsHistoricalDataResponse.endDateTime)
          )
            ? meditationHistoricalDataResponse.endDateTime
            : stepsHistoricalDataResponse.endDateTime;
        } else if (meditationHistoricalDataResponse && !stepsHistoricalDataResponse) {
          startDateTime = meditationHistoricalDataResponse.startDateTime;
          endDateTime = meditationHistoricalDataResponse.endDateTime;
        } else if (stepsHistoricalDataResponse && !meditationHistoricalDataResponse) {
          startDateTime = stepsHistoricalDataResponse.startDateTime;
          endDateTime = stepsHistoricalDataResponse.endDateTime;
        }

        const firstDay = moment(startDateTime).format("DD MMM");
        const lastDay = moment(endDateTime).format("DD MMM");
        const date = firstDay !== lastDay ? `${firstDay} - ${lastDay}` : firstDay;

        yield call(() => {
          Navigation.showModal({
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
    }
  } catch (e) {
    yield spawn(() => Logger.logMixpanelError(e, "sendPassiveActivitySinceLastUpdate"));
  }
}

function sampleMeditationDataToAggregatedData(
  startTime: string,
  endTime: string,
  meditationResults: ChallengePayload[]
): ChallengePayload[] {
  const daysCount = Math.ceil(moment(endTime).diff(startTime, "hours") / 24);

  const aggregateMeditationChallengeArray: ChallengePayload[] = [];

  for (let i = 0; i < daysCount; i++) {
    const startOfEachDay = moment(startTime).add(i, "days");

    let meditationSeconds = 0;

    meditationResults.forEach((element: ChallengePayload) => {
      if (
        moment(element.startDateTime).isAfter(startOfEachDay) &&
        moment(element.startDateTime).isBefore(moment(startOfEachDay).add(1, "day"))
      ) {
        meditationSeconds = meditationSeconds + element.value;
      }
    });

    aggregateMeditationChallengeArray.push({
      startDateTime: startOfEachDay.format(),
      endDateTime: moment(startOfEachDay).add(1, "day").format(),
      value: meditationSeconds,
    });
  }
  return aggregateMeditationChallengeArray;
}
