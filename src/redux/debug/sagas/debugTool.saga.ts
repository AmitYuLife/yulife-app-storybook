import moment from "moment";
import { call, select, spawn } from "redux-saga/effects";
import { queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE, updateAppState } from "@redux/app/app.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getToken } from "@services/storage";
import { Unpacked, isAndroid } from "@utils";
import { QueryFitKitByTypesRawResponse } from "@services/fitkit/fitkit.types";
import client from "@graphql/_core/client";
import { QueryResult } from "@apollo/client";
import { FitKitType, GetUserDebugDataQuery, gql } from "@graphql/__generated";
import { yuHealthSampleQuery } from "@services/fitkit/yu-health.helpers";
import { HealthDataType, ISampleQueryResponse } from "@yu-life/react-native-yu-health";
import { SampleQueryResult } from "@yu-life/react-native-fitkit";

export default function* debugTool(dataPayload: ReturnType<typeof updateAppState>) {
  const { payload, type } = dataPayload || {};

  if (type === UPDATE_APP_STATE && payload.appState !== "active") {
    return;
  }

  const token: Unpacked<typeof getToken> = yield call(getToken);

  if (!token) {
    return;
  }

  const { enableDebugTool, tempGameEnableReleaseYuHealthV3 }: ReturnType<typeof getUserFeatures> = yield select(
    getUserFeatures
  );

  try {
    if (!enableDebugTool) {
      return;
    }

    const { data }: QueryResult<GetUserDebugDataQuery> = yield call(() =>
      client().query({ query: gql("GetUserDebugDataDocument"), fetchPolicy: "network-only" })
    );

    if (!data?.getUserDebugData?.sampleQuery) {
      return;
    }

    const { startTime, endTime, disableTypeFilter, fitKitTypes, active } = data.getUserDebugData.sampleQuery || {};

    if (!active) {
      return;
    }

    Logger.logMixpanelEvent(`debug_tool_query_args`, {
      disableUserEntries: false,
      endTime,
      startTime,
      fitKitTypes,
      disableTypeFilter,
      usingYuHealth: !!tempGameEnableReleaseYuHealthV3,
    });

    let results: SampleQueryResult[] = [];

    if (!tempGameEnableReleaseYuHealthV3) {
      const { results: fitkitResults, error: fitkitError }: QueryFitKitByTypesRawResponse = yield call(
        queryFitKitSampleData,
        {
          startTime: moment(startTime).format(),
          endTime: moment(endTime).format(),
          fitKitTypes: disableTypeFilter && isAndroid() ? [] : fitKitTypes,
          features: { disableUserEntries: false, loggingEnabled: true },
          rawData: true,
          metaData: { file: "debugTool.saga" },
        }
      );

      Logger.logMixpanelEvent("debug_tool_query_results", {
        fitkitResults,
        usingYuHealth: false,
        error: fitkitError,
        fitKitTypes,
        location: "debugTool.saga",
      });

      results = (fitkitResults || []).map((r) => ({ ...r, type: r.type as FitKitType, value: Math.round(r.value) }));
    } else {
      const FITKIT_TYPE_MAP: Record<string, HealthDataType> = {
        StepCount: HealthDataType.steps,
        MindfulSession: HealthDataType.mindfulMinutes,
        Cycling: HealthDataType.cyclingDistance,
      };

      const yuHealthResults: ISampleQueryResponse[] = yield call(yuHealthSampleQuery, {
        params: {
          startTime: moment(startTime).toDate(),
          endTime: moment(endTime).toDate(),
          dataType: FITKIT_TYPE_MAP[fitKitTypes[0]] ?? HealthDataType.steps,
        },
        features: { disableUserEntries: false, loggingEnabled: true },
        metadata: { file: "debugTool.saga" },
      });

      Logger.logMixpanelEvent("debug_tool_query_results", {
        yuHealthResults,
        usingYuHealth: true,
        fitKitTypes,
        location: "debugTool.saga",
      });

      results = yuHealthResults.map((r) => ({
        ...r,
        type: fitKitTypes[0],
        value: Math.round(r.value),
        endTime: r.endTime.toString(),
        startTime: r.startTime.toString(),
      }));
    }

    /**
     * Only send to API StepCount data on fitkit, other data types hasn't been tested
     * The SubmitUserDebugData mutation is very specific to fitkit and doens't work with YuHealth as YuHealth has different data types
     * We still need to send some results (empty) so we can mark this debug request as completed
     */
    const sendResults =
      tempGameEnableReleaseYuHealthV3 &&
      fitKitTypes?.length === 1 &&
      fitKitTypes[0] === FitKitType.StepCount &&
      data.getUserDebugData.id;

    yield call(() =>
      client().mutate({
        mutation: gql("SubmitUserDebugDataDocument"),
        errorPolicy: "ignore",
        variables: {
          id: data.getUserDebugData.id,
          results: sendResults
            ? (results || []).map((r) => ({ ...r, type: r.type as FitKitType, value: Math.round(r.value) }))
            : [],
        },
      })
    );
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "debugToolSaga" });
    });
  }
}
