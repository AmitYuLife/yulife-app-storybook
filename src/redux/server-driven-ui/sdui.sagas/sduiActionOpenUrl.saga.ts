import { call } from "redux-saga/effects";
import { handleLinkPress } from "@services/app-link";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionOpenUrlSaga({ payload }: SduiActionWithServerPayload) {
  try {
    yield call(handleLinkPress(payload.serverPayload));
  } catch (e) {
    // shrug (log)
  }
}
