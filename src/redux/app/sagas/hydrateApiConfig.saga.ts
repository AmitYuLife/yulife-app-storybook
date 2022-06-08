import { getApiConfigWithClient } from "@graphql/config";
import { call } from "redux-saga/effects";
import { Unpacked } from "@utils";
import Logger from "@services/logging/logger";
import region from "@services/region";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";

export default function* hydrateApiConfigSaga(payload: SyncAction) {
  try {
    let shouldFetchConfig = true;
    const isFromInit = payload?.type === "INIT";

    if (isFromInit) {
      yield call(region.hydratePreferredRegion);

      const existingConfig = region.getConfig("mixpanelKey");

      if (!existingConfig) {
        shouldFetchConfig = false;
      }
    }

    if (shouldFetchConfig) {
      const response: Unpacked<typeof getApiConfigWithClient> = yield call(getApiConfigWithClient);

      if (response?.data?.config?.mixpanelKey) {
        yield call(region.setConfig, response.data.config);
      }
    }

    yield call(Logger.init);
    yield call(initStripe);
  } catch (error) {
    Logger.error(error, { file: "hydrateApiConfigSaga" });
  }
}
