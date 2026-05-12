import { all, call, put, race, delay, select, take, fork, join } from "redux-saga/effects";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { region } from "@locale";
import { initStripe } from "@services/stripe";
import { SyncAction } from "@redux/_core/types";
import deepLink from "@navigation/deepLink";
import client, { regionalClients } from "@graphql/_core/client";
import { GetMobileGameThemeDocument } from "@graphql/__generated";
import { DETOX_ENABLED } from "@services/socket";
import { getUserFeatures } from "@redux/user/user.selectors";
import { READY_TO_SET_MAIN_ROOT, setMainRoot } from "../../app.actions";
import { getToken } from "@services/storage";
import themeService from "@modules/themes/theme.service";
import queryConfig from "./queryConfig";
import { Task } from "redux-saga";
import { getRouteState } from "@redux/app/app.selectors";

const HYDRATE_TIMEOUT_MS = 4_000;

export default function* hydrateApiConfigSaga({ type, payload }: SyncAction) {
  if (type === READY_TO_SET_MAIN_ROOT) {
    const runHydrationFork: Task<ReturnType<typeof runHydration>> = yield fork(runHydration, { type, payload });

    yield race({
      hydration: join(runHydrationFork),
      // shorter time delay, app loading has already completed.
      timeout: delay(1_000),
    });

    yield put(setMainRoot());
    return;
  }

  if (type === "INIT") {
    const runHydrationFork: Task<ReturnType<typeof runHydration>> = yield fork(runHydration, { type, payload });

    const [{ timeout }, { setMainRootTimeout }] = yield all([
      race({
        hydration: join(runHydrationFork),
        timeout: delay(HYDRATE_TIMEOUT_MS),
      }),
      race({
        readyToSetMainRoot: take(READY_TO_SET_MAIN_ROOT),
        setMainRootTimeout: delay(HYDRATE_TIMEOUT_MS),
      }),
    ]);

    const activeRoute: string = yield select(getRouteState);
    if (setMainRootTimeout) {
      Logger.error(new Error("Listening to readyToSetMainRoot timed out."), {
        file: "hydrateApiConfigSaga",
        activeRoute,
      });
    }

    if (timeout) {
      Logger.error(new Error("API config hydration timed out"), { file: "hydrateApiConfigSaga" });
    }

    yield put(setMainRoot());
    return;
  }

  yield call(runHydration, { type, payload });
}

function* runHydration({ type, payload }: SyncAction) {
  const startTime = Date.now();
  try {
    let shouldFetchConfig: boolean = typeof payload === "object" ? (payload || {})?.shouldFetchConfig : true;

    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    const tempGameEnableAppTheme = features.tempGameEnableAppTheme ?? false;

    if (type === "INIT") {
      const hasValidRegionConfig: boolean = yield call(region.hydratePreferredRegion);
      yield call(themeService.hydrateThemeId);
      shouldFetchConfig = !hasValidRegionConfig;

      // We're not running 3 servers for each region at the same time; so every time we select a region that's not spun up, we get a thrown error
      // When reloading the app only, we need the previous part (hydration) to run as it was saved locally
    }

    const token: string = yield call(getToken);
    if (shouldFetchConfig) {
      if (DETOX_ENABLED) {
        yield call(hydrateForDetox, tempGameEnableAppTheme, token);
      } else {
        const apolloClient = client();
        if (!apolloClient) {
          throw new Error("Apollo client not initialised");
        }

        const response: Awaited<ReturnType<typeof queryConfig>> = yield call(() =>
          queryConfig({ apolloClient, tempGameEnableAppTheme, token })
        );

        if (response?.data?.config?.__typename) {
          yield call(region.setConfig, response.data.config as unknown as Parameters<typeof region.setConfig>[0]);
        }

        if (response?.data && "theme" in response.data) {
          apolloClient.writeQuery({
            query: GetMobileGameThemeDocument,
            data: { getMobileGameTheme: response.data.theme },
          });

          yield call(themeService.setThemeId, response.data.theme.id);
        }
      }
    }

    const sduiStaticDeeplinks = region.getConfig("sduiStaticDeeplinks");
    if (sduiStaticDeeplinks) {
      yield call(deepLink.setDynamicDeeplinks, sduiStaticDeeplinks);
    }

    yield all([call(initStripe), call(Logger.init)]);
  } catch (error) {
    Logger.notify(error, { file: "runHydration" });
  } finally {
    const durationMs = Date.now() - startTime;
    EngagementTracking.logEvent(`config_hydration_completed`, { file: "runHydration", durationMs });
  }

  return true;
}

const hydrateForDetox = async (tempGameEnableAppTheme: boolean, token: string) => {
  for (const regionalClient of regionalClients) {
    try {
      if (!regionalClient) {
        continue;
      }

      const response = await queryConfig({ apolloClient: regionalClient, tempGameEnableAppTheme, token });

      if (response?.data?.config?.__typename) {
        await region.setConfig(response.data.config as unknown as Parameters<typeof region.setConfig>[0]);
        return;
      }

      if (response?.data && "theme" in response.data) {
        const apolloClient = client();
        if (!apolloClient) {
          continue;
        }

        apolloClient.writeQuery({
          query: GetMobileGameThemeDocument,
          data: { getMobileGameTheme: response.data.theme },
        });

        await themeService.setThemeId(response.data.theme.id);
      }
    } catch {
      //
    }
  }
};
