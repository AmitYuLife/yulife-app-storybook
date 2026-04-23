import { setUnauthenticatedRoot } from "@navigation/root";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { call, put } from "redux-saga/effects";
import { persistor as reduxPersistor } from "../../_core/store";
import { logOutSuccess } from "../user.actions";
import customerio from "@services/customerio";
import { region } from "@locale";
import themeService from "@modules/themes/theme.service";

export default function* logOutSaga() {
  yield call(EngagementTracking.logEvent, "log_out");
  yield call(setUnauthenticatedRoot);

  yield call(() => {
    // can't be awaited because their libs rely on a weird promise lib and it gets stuck
    reduxPersistor.purge().catch((e) => {
      Logger.notify(e, { location: "logout-purge-persistor" });
    });
  });
  yield call(EngagementTracking.logOut);
  yield call(Logger.clearUser);
  yield call(customerio.clearIdentity);
  yield call(region.clearRegionConfig);
  yield call(themeService.clearThemeId);
  yield put(logOutSuccess());
}
