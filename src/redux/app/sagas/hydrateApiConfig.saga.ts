import { getApiConfigWithClient } from "@graphql/config";
import { call } from "redux-saga/effects";
import { Unpacked } from "@utils";
import Logger from "@services/logging/logger";
import { region } from "@locale";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";
import { DETOX_ENABLED } from "@services/socket";
import deepLink from "@navigation/deepLink";

const initialPayloadTypes = ["INIT", "SET_MAIN_ROOT"];

export default function* hydrateApiConfigSaga(payload: SyncAction) {
  try {
    let shouldFetchConfig = true;
    const isFromInit = initialPayloadTypes.includes(payload?.type);

    if (isFromInit) {
      yield call(region.hydratePreferredRegion);

      const existingConfig = region.getConfig("mixpanelKey");

      if (existingConfig?.length && !region.configIsOutdated()) {
        shouldFetchConfig = false;
      }

      // We're not running 3 servers for each region at the same time; so every time we select a region that's not spun up, we get a thrown error
      // When reloading the app only, we need the previous part (hydration) to run as it was saved locally
      if (DETOX_ENABLED) {
        return;
      }
    }

    if (shouldFetchConfig) {
      const response: Unpacked<typeof getApiConfigWithClient> = yield call(getApiConfigWithClient);

      if (response?.data?.config?.mixpanelKey) {
        yield call(region.setConfig, response.data.config);
      }
    }

    const sduiStaticDeeplinks = region.getConfig("sduiStaticDeeplinks");
    if (sduiStaticDeeplinks) {
      yield call(deepLink.setDynamicDeeplinks, sduiStaticDeeplinks);
    }

    yield call(initStripe);
  } catch (error) {
    Logger.error(error, { file: "hydrateApiConfigSaga" });
  }
}
