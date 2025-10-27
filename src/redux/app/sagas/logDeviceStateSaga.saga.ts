import { call, select } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
import { SyncAction } from "@redux/_core/types";
import { getUserFeatures } from "@redux/user/user.selectors";
import { WHITELIST_REDUX_EVENTS } from "@redux/_core/logging";

/**
 * Send redux state changes to mixpanel for debugging purposes
 */
export default function* logDeviceStateSaga(action: SyncAction) {
  try {
    // Get features toggles
    const features: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
    // if feature toggle enabled save log entry
    if (features.logReduxState) {
      // Check if event is whitelisted
      if (WHITELIST_REDUX_EVENTS.includes(action.type)) {
        const timestamp = new Date().toISOString();
        const reduxEvent = {
          reduxEvent: action.type,
          payload: action.payload,
          timestamp,
        };
        yield call(dd.info, "Redux state change", reduxEvent);
      }
    }
  } catch (e) {
    Logger.error(e, { file: "logDeviceStateSaga.saga" });
  }
}
