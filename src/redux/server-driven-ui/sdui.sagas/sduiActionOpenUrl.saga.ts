import { all, call, put, spawn } from "redux-saga/effects";
import { handleLinkPress } from "@services/app-link";
import Logger from "@services/logging/logger";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";
import { parseJSON } from "@utils";

export function* sduiActionOpenUrlSaga({ payload }: SduiActionWithServerPayload) {
  try {
    const {
      isValid,
      data: { dispatchActions = [], ...data },
    } = parseJSON(getServerPayload(payload));

    if (!isValid && typeof payload === "string") {
      yield call(handleLinkPress(payload));
    }

    if (data.link) {
      yield call(handleLinkPress(data.link));
    }

    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dispatchActions", file: "sduiActionOpenUrlSaga" });
    });
  }
}
