import { Navigation } from "@navigation/main";
import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionGenericNavigateBackToRoot({ payload }: SduiActionWithServerPayload) {
  const { isValid, data } = parseJSON<{ routeId: string }>(getServerPayload(payload), ["routeId"]);

  if (isValid && data.routeId) {
    try {
      yield call(() => Navigation.popToRoot(data.routeId));
    } catch (e) {
      yield call(() =>
        Logger.logMixpanelEvent("app_debug", {
          sdui: true,
          location: "sduiActionGenericNavigateBackToRoot",
          error: e?.message,
        })
      );
    }
  }
}
