import { all, call, put, race, delay, select, take } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { region } from "@locale";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";
import deepLink from "@navigation/deepLink";
import client, { regionalClients } from "@graphql/_core/client";
import { GetMobileGameThemeDocument } from "@graphql/__generated";
import { DETOX_ENABLED } from "@services/socket";
import dd from "@services/datadog";
import { getUserFeatures } from "@redux/user/user.selectors";
import { READY_TO_SET_MAIN_ROOT, setMainRoot } from "../../app.actions";
import { getToken } from "@services/storage";
import queryConfig from "./queryConfig";

const HYDRATE_TIMEOUT_MS = 4_000;

const initialPayloadTypes = ["INIT"];

export default function* hydrateApiConfigSaga({ type, payload }: SyncAction) {
  const isFromInit = initialPayloadTypes.includes(type);

  if (isFromInit) {
    const [{ timeout }] = yield all([
      race({
        hydration: call(runHydration, { type, payload }),
        timeout: delay(HYDRATE_TIMEOUT_MS),
      }),
      take(READY_TO_SET_MAIN_ROOT),
    ]);

    if (timeout) {
      Logger.error(new Error("API config hydration timed out"), { file: "hydrateApiConfigSaga" });
    }

    yield put(setMainRoot());
  } else {
    yield call(runHydration, { type, payload });
  }
}

function* runHydration({ type, payload }: SyncAction) {
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

    const token: string = yield call(getToken);
    if (shouldFetchConfig) {
      if (DETOX_ENABLED) {
        yield call(hydrateForDetox, features.tempGameEnableAppTheme, token);
      } else {
        const response: Awaited<ReturnType<typeof queryConfig>> = yield call(() =>
          queryConfig({ apolloClient: client(), tempGameEnableAppTheme: features.tempGameEnableAppTheme, token })
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

  return true;
}

const hydrateForDetox = async (tempGameEnableAppTheme: boolean, token: string) => {
  for (const regionalClient of regionalClients) {
    try {
      const response = await queryConfig({ apolloClient: regionalClient, tempGameEnableAppTheme, token });

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
