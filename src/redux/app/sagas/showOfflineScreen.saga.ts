import { setOfflineRoot } from "@navigation/root";
import { call, select } from "redux-saga/effects";
import { ROUTES } from "@navigation/constants";
import { getRouteState } from "../app.selectors";
import Logger from "@services/logger/logger";
import { UPDATE_OFFLINE_STATE, updateOfflineState } from "../app.actions";

export default function* showOfflineScreenSaga(dataPayload: ReturnType<typeof updateOfflineState>) {
  const { payload, type } = dataPayload ?? {};
  if (type === UPDATE_OFFLINE_STATE && payload.isOffline) {
    try {
      const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

      if (currentRoute !== ROUTES.offline) {
        yield call(setOfflineRoot);
      }
    } catch (e) {
      Logger.error(e, { event: "showOfflineScreen" });
    }
  }
}
