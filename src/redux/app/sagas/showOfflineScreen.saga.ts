import { setOfflineRoot } from "@navigation/root";
import { call, select } from "redux-saga/effects";
import { ROUTES } from "@navigation/constants";
import { getRouteState } from "../app.selectors";

interface IMainRootPayload {
  payload: boolean;
  type: string;
}

export default function* showOfflineScreenSaga({ payload: isOffline }: IMainRootPayload) {
  if (isOffline) {
    try {
      const currentRoute = yield select(getRouteState);

      if (currentRoute !== ROUTES.offline) {
        yield call(setOfflineRoot);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
