import { call } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { region } from "@locale";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";
import deepLink from "@navigation/deepLink";
import client, { regionalClients } from "@graphql/_core/client";
import { gql, GetPublicYuApiConfigQuery } from "@graphql/__generated";
import { ApolloQueryResult } from "@apollo/client";
import { DETOX_ENABLED } from "@services/socket";
import dd from "@services/datadog";

const initialPayloadTypes = ["INIT", "SET_MAIN_ROOT"];

export default function* hydrateApiConfigSaga({ type, payload }: SyncAction) {
  try {
    const isFromInit = initialPayloadTypes.includes(type);
    let shouldFetchConfig: boolean = typeof payload === "object" ? (payload || {})?.shouldFetchConfig : true;

    if (isFromInit) {
      const hasValidRegionConfig: boolean = yield call(region.hydratePreferredRegion);
      shouldFetchConfig = !hasValidRegionConfig;

      // We're not running 3 servers for each region at the same time; so every time we select a region that's not spun up, we get a thrown error
      // When reloading the app only, we need the previous part (hydration) to run as it was saved locally
    }

    if (shouldFetchConfig) {
      if (DETOX_ENABLED) {
        yield call(hydrateForDetox);
      } else {
        const response: ApolloQueryResult<GetPublicYuApiConfigQuery> = yield call(() =>
          client().query({
            query: gql("GetPublicYuApiConfigDocument"),
            fetchPolicy: "no-cache",
          })
        );

        if (response?.data?.config?.__typename) {
          yield call(region.setConfig, response.data.config);
        }
      }
    }

    const sduiStaticDeeplinks = region.getConfig("sduiStaticDeeplinks");
    if (sduiStaticDeeplinks) {
      yield call(deepLink.setDynamicDeeplinks, sduiStaticDeeplinks);
    }

    yield call(initStripe);
    yield call(dd.init);
  } catch (error) {
    Logger.error(error, { file: "hydrateApiConfigSaga" });
  }
}

const hydrateForDetox = async () => {
  for (const regionalClient of regionalClients) {
    try {
      const response = await regionalClient.query({
        query: gql("GetPublicYuApiConfigDocument"),
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      });

      if (response?.data?.config?.__typename) {
        await region.setConfig(response.data.config);
        return;
      }
    } catch {
      //
    }
  }
};
