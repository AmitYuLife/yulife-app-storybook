import { spawn } from "redux-saga/effects";
import { SduiActionWithServerPayload } from "../sdui.types";
import { Navigation as NativeNavigation } from "react-native-navigation";
import Logger from "@services/logger/logger";
import { noop, parseJSON } from "@utils";
import { getServerPayload } from "../sdui.helpers";

export function* sduiActionDismissModal({ payload }: SduiActionWithServerPayload) {
  try {
    const { isValid, data } = parseJSON<{ modalId: string }>(getServerPayload(payload), ["modalId"]);
    if (isValid) {
      NativeNavigation.dismissModal(data.modalId).catch(noop);
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "dispatchActions", file: "sduiActionDismissModal" });
    });
  }
}
