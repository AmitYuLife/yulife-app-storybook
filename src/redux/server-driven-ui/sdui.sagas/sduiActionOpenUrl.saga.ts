import { call } from "redux-saga/effects";
import { handleLinkPress } from "@services/app-link";
import Logger from "@services/logging/logger";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";

export function* sduiActionOpenUrlSaga({ payload }: SduiActionWithServerPayload) {
  try {
    const link = getServerPayload(payload);

    if (link) {
      yield call(handleLinkPress(link));
    }
  } catch (e) {
    yield call(() =>
      Logger.logMixpanelEvent("app_debug", {
        sdui: true,
        location: "sduiActionOpenUrlSaga",
        error: e?.message,
      })
    );
  }
}
