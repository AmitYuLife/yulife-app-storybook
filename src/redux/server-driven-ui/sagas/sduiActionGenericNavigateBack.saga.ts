import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { all, call, put, select, spawn } from "redux-saga/effects";
import Logger from "@services/logger/logger";
import { parseJSON } from "@utils";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionGenericNavigateBack({ payload }: SduiActionWithServerPayload) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const onExit = () => Navigation.pop(currentRoute);

  const {
    data: { dispatchActions = [] },
  } = parseJSON(getServerPayload(payload));

  try {
    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "dispatchActions", file: "sduiActionGenericNavigateBackSaga" });
    });
  }

  yield call(onExit);
}
