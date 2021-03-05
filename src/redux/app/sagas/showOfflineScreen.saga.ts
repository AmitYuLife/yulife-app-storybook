import { setOfflineRoot } from "@navigation/root";
import { call, select } from "redux-saga/effects";
import { ROUTES } from "@navigation/constants";
import { getRouteState } from "../app.selectors";
import Logger from "@services/logging/logger";

interface IMainRootPayload {
  payload: boolean;
  type: string;
}

export default function* showOfflineScreenSaga({ payload: isOffline }: IMainRootPayload) {
  if (isOffline) {
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
