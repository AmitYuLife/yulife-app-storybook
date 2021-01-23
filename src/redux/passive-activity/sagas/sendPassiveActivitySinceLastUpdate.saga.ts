/* eslint-disable @typescript-eslint/no-explicit-any */
import addData from "@graphql/challenges/addData.gql";
import { AddHistoricalSteps_addHistoricalSteps } from "@graphql/_core/schema";
import addHistoricalSteps from "@graphql/challenges/addHistoricalSteps.gql";
import { ChallengePayload, PassiveChallengeType } from "@graphql/_core/schema/globalTypes";
import { MODALS } from "@navigation/constants";
import { getLastUpdatedBeforeToday as getStepsLastUpdateBeforeToday } from "@redux/daily-steps/daily-steps.selectors";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { call, CallEffect, put, PutEffect, select, SelectEffect, all, AllEffect, delay } from "redux-saga/effects";
import { queryMindfulSessions, querySteps } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { getRouteState } from "../../app/app.selectors";
import { meditationSinceLastUpdateSuccess } from "../../daily-meditation/daily-meditation.actions";
import { getLastUpdatedBeforeToday as getMeditationLastUpdatedBeforeToday } from "../../daily-meditation/daily-meditation.selectors"; // tslint:disable-line
import { stepsSinceLastUpdateSuccess } from "../../daily-steps/daily-steps.actions";
import { getUserFeatures } from "../../user/user.selectors";
import { IFeature } from "../../user/user.reducer";

type HistoricalData = AddHistoricalSteps_addHistoricalSteps;

type SendPassiveActivityYieldResult = SelectEffect | CallEffect<void> | AllEffect<CallEffect<HistoricalData>>;

type SendPassiveActivityGenerator = Generator<SendPassiveActivityYieldResult, void, any>;

const defaultData: HistoricalData = {
  endDateTime: moment().format(),
  startDateTime: moment().format(),
  yucoin: 0,
};

export function* sendMeditation(
  features: IFeature,
  startOfDay: moment.Moment
): Generator<SelectEffect | CallEffect<any> | PutEffect<{ type: string }>, HistoricalData, any> {
  let meditationHistoricalDataResponse: HistoricalData;
  const meditationLastUpdatedBeforeToday = yield select(getMeditationLastUpdatedBeforeToday);

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

          meditationHistoricalDataResponse = res?.data?.addData || defaultData;

          isUpdated = true;
          yield put(meditationSinceLastUpdateSuccess());
        } catch (e) {
          yield call(() => {
            Logger.error(e, { event: "sendMeditationSinceLastUpdated" });
          });
          yield delay(15000);
        }
      }
    } else {
      yield put(meditationSinceLastUpdateSuccess());
    }
  }

  return meditationHistoricalDataResponse;
}

export function* sendSteps(
  features: IFeature,
  startOfDay: moment.Moment
): Generator<SelectEffect | CallEffect<any> | PutEffect<{ type: string }>, HistoricalData, any> {
  let stepsHistoricalDataResponse: HistoricalData;
  const lastUpdatedBeforeToday = yield select(getStepsLastUpdateBeforeToday);

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
            stepsHistoricalDataResponse = res?.data?.addHistoricalSteps || defaultData;

            isUpdated = true;
            yield put(stepsSinceLastUpdateSuccess());
          } catch (e) {
            yield call(() => {
              Logger.error(e, { event: "sendStepsSinceLastUpdated" });
            });
            yield delay(15000);
          }
        }
      } else {
        yield put(stepsSinceLastUpdateSuccess());
      }
    }
  }

  return stepsHistoricalDataResponse;
}

export default function* sendPassiveActivity(): SendPassiveActivityGenerator {
  try {
    const features = yield select(getUserFeatures);
    const startOfDay = moment().startOf("day");

    const [steps, meditation]: HistoricalData[] = yield all([
      call(sendSteps, features, startOfDay.clone()),
      call(sendMeditation, features, startOfDay.clone()),
    ]) as AllEffect<CallEffect<HistoricalData>>;

    const awardedYucoin = (meditation?.yucoin || 0) + (steps?.yucoin || 0);

    if (awardedYucoin > 0) {
      const route = yield select(getRouteState);

      if (route !== MODALS.collectReward) {
        let startDateTime;
        let endDateTime;

        if (meditation?.yucoin && steps?.yucoin) {
          startDateTime = moment.min(moment(meditation.startDateTime), moment(steps.startDateTime));
          endDateTime = moment.min(moment(meditation.endDateTime), moment(steps.endDateTime));
        } else if (meditation?.yucoin && !steps?.yucoin) {
          startDateTime = meditation.startDateTime;
          endDateTime = meditation.endDateTime;
        } else if (steps?.yucoin && !meditation?.yucoin) {
          startDateTime = steps.startDateTime;
          endDateTime = steps.endDateTime;
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
    yield call(() => {
      Logger.error(e, { event: "sendPassiveActivitySinceLastUpdate" });
    });
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
