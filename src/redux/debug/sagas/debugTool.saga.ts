import moment from "moment";
import { call, select, spawn } from "redux-saga/effects";
import { queryFitKitSampleData } from "@services/fitkit/fitkit.helpers";
import Logger from "@services/logging/logger";
import { UPDATE_APP_STATE } from "@redux/app/app.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getToken } from "@services/storage";
import { Unpacked } from "@utils";
import { QueryFitKitByTypesRawResponse } from "@services/fitkit/fitkit.types";
import { Platform } from "react-native";
import client from "@graphql/_core/client";
import { QueryResult } from "@apollo/client";
import { FitKitType, GetUserDebugDataQuery, gql } from "@graphql/__generated";
import { FitKitType as LegacyFitKitType } from "@graphql/_core/schema/globalTypes";

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

    const { data }: QueryResult<GetUserDebugDataQuery> = yield call(() =>
      client().query({ query: gql("GetUserDebugDataDocument") })
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
    });

    const { results, error }: QueryFitKitByTypesRawResponse = yield call(queryFitKitSampleData, {
      startTime: moment(startTime).format(),
      endTime: moment(endTime).format(),
      fitKitTypes: disableTypeFilter && Platform.OS === "android" ? [] : (fitKitTypes as unknown as LegacyFitKitType[]),
      features: { disableUserEntries: false, loggingEnabled: true },
      rawData: true,
      metaData: { file: "debugTool.saga" },
    });

    Logger.logMixpanelEvent("debug_tool_query_results", {
      results,
      error: error,
      fitKitTypes,
      location: "debugTool.saga",
    });

    /**
     * Only send to API StepCount data, other data types hasn't been tested
     */
    if (fitKitTypes.length === 1 && fitKitTypes[0] === FitKitType.StepCount && data.getUserDebugData.id) {
      yield call(() =>
        client().mutate({
          mutation: gql("SubmitUserDebugDataDocument"),
          errorPolicy: "ignore",
          variables: {
            id: data.getUserDebugData.id,
            results: (results || []).map((r) => ({ ...r, type: r.type as FitKitType })),
          },
        })
      );
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "debugToolSaga" });
    });
  }
}
