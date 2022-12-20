import moment from "moment";
import { call, select, spawn } from "redux-saga/effects";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { queryFitKitByTypesDebug, getAdditionalCyclingFitnessActivities } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import getUserDebugData from "@graphql/debug/getUserDebugData.gql";
import submitUserDebugData from "@graphql/debug/submitUserDebugData.gql";

export default function* debugTool(dataPayload: { payload: string; type: string }) {
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

    if (!userFeatures.enableDebugTool) {
      return;
    }

    const { data }: Unpacked<typeof getUserDebugData> = yield call(getUserDebugData);

    if (!data?.getUserDebugData?.sampleQuery) {
      return;
    }

    const { startTime, endTime, disableTypeFilter, fitKitTypes, active } = data.getUserDebugData.sampleQuery || {};

    if (!active) {
      return;
    }

    const additionalCyclingFitnessActivities = new Map<FitKitType, string[]>([
      [FitKitType.Cycling, getAdditionalCyclingFitnessActivities(userFeatures)],
    ]);

    const { results }: Unpacked<typeof queryFitKitByTypesDebug> = yield call(
      queryFitKitByTypesDebug,
      moment(startTime).format(),
      moment(endTime).format(),
      fitKitTypes,
      disableTypeFilter || false,
      additionalCyclingFitnessActivities
    );

    /**
     * Only send to API StepCount data, other data types hasn't been tested
     */
    if (fitKitTypes.length === 1 && fitKitTypes[0] === FitKitType.StepCount && data.getUserDebugData.id) {
      yield call(submitUserDebugData, data.getUserDebugData.id, results);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "debugToolSaga" });
    });
  }
}
