import { spawn } from "redux-saga/effects";
import { SduiActionWithServerPayload } from "../sdui.types";
import { Navigation as NativeNavigation } from "react-native-navigation";
import Logger from "@services/logging/logger";
import { parseJSON } from "@utils";
import { getServerPayload } from "../sdui.helpers";

export function* sduiActionDismissOverlay({ payload }: SduiActionWithServerPayload) {
  try {
    const { isValid, data } = parseJSON<{ modalId: string }>(getServerPayload(payload), ["modalId"]);

    if (isValid) {
      NativeNavigation.dismissOverlay(data.modalId);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dispatchActions", file: "sduiActionDismissOverlay" });
    });
  }
}
