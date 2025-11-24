import { all, call, put, spawn } from "redux-saga/effects";
import { getServerPayload } from "../sdui.helpers";
import { ProductStepAction } from "../sdui.types";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { Navigation } from "@navigation/main";

export function* sduiActionGenericNavigatePopToSaga({ payload }: ProductStepAction) {
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(getServerPayload(payload), ["routeId"]);

  try {
    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dispatchActions", file: "sduiActionNavigateSaga" });
    });
  }

  if (isValid) {
    const { routeId } = data;

    yield call(() => Navigation.popTo(routeId));
  }
}
