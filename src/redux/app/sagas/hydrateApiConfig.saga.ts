import { call, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { region } from "@locale";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";
import deepLink from "@navigation/deepLink";
import client, { regionalClients } from "@graphql/_core/client";
import {
  gql,
  GetMobileGameThemeDocument,
  GetPublicYuApiConfigWithThemeQuery,
  GetPublicYuApiConfigQuery,
} from "@graphql/__generated";
import { DETOX_ENABLED } from "@services/socket";
import dd from "@services/datadog";
import { getUserFeatures } from "@redux/user/user.selectors";
import { ApolloQueryResult } from "@apollo/client";

const initialPayloadTypes = ["INIT", "SET_MAIN_ROOT"];

export default function* hydrateApiConfigSaga({ type, payload }: SyncAction) {
  try {
    const isFromInit = initialPayloadTypes.includes(type);
    let shouldFetchConfig: boolean = typeof payload === "object" ? (payload || {})?.shouldFetchConfig : true;

    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

    if (isFromInit) {
      const hasValidRegionConfig: boolean = yield call(region.hydratePreferredRegion);
      shouldFetchConfig = !hasValidRegionConfig;

      // We're not running 3 servers for each region at the same time; so every time we select a region that's not spun up, we get a thrown error
      // When reloading the app only, we need the previous part (hydration) to run as it was saved locally
    }

    if (shouldFetchConfig) {
      if (DETOX_ENABLED) {
        yield call(hydrateForDetox, features.tempGameEnableAppTheme);
      } else {
        const response: Awaited<ReturnType<typeof queryConfig>> = yield call(() =>
          queryConfig({ apolloClient: client(), tempGameEnableAppTheme: features.tempGameEnableAppTheme })
        );

        if (response?.data?.config?.__typename) {
          yield call(region.setConfig, response.data.config);
        }

        if (response?.data && "theme" in response.data) {
          client().writeQuery({
            query: GetMobileGameThemeDocument,
            data: { getMobileGameTheme: response.data.theme },
          });
        }

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

async function queryConfig({
  apolloClient,
  tempGameEnableAppTheme,
}: {
  apolloClient: ReturnType<typeof client>;
  tempGameEnableAppTheme: boolean;
}): Promise<ApolloQueryResult<GetPublicYuApiConfigQuery | GetPublicYuApiConfigWithThemeQuery>> {
  if (tempGameEnableAppTheme) {
    return await apolloClient.query({
      query: gql("GetPublicYuApiConfigWithThemeDocument"),
      fetchPolicy: "no-cache",
    });
  }

  return await apolloClient.query({
    query: gql("GetPublicYuApiConfigDocument"),
    fetchPolicy: "no-cache",
  });
}

const hydrateForDetox = async (tempGameEnableAppTheme: boolean) => {
  for (const regionalClient of regionalClients) {
    try {
      const response = await queryConfig({ apolloClient: regionalClient, tempGameEnableAppTheme });

      if (response?.data?.config?.__typename) {
        await region.setConfig(response.data.config);
        return;
      }

      if (response?.data && "theme" in response.data) {
        client().writeQuery({
          query: GetMobileGameThemeDocument,
          data: { getMobileGameTheme: response.data.theme },
        });
      }
    } catch {
      //
    }
  }
};
