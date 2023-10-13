import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { store as reduxStore } from "@redux/_core/store";
import { showFloatingModal } from "@components/modals/show-floating-modal/showFloatingModal";

export function* sduiActionShowFloatingModal({ payload }: SduiActionWithServerPayload) {
  const { data, isValid } = parseJSON(getServerPayload(payload), ["modalId", "props"]);
  const dispatch = reduxStore.dispatch;

  if (isValid) {
    const { modalId, props } = data;
    try {
      yield call(() =>
        showFloatingModal({
          modalId,
          componentProps: {
            ...props,
            onConfirm: props.onConfirm ? () => dispatch(props.onConfirm) : undefined,
          },
        })
      );
    } catch (e) {
      yield call(() =>
        Logger.logMixpanelEvent("app_debug", {
          location: "sduiActionShowFloatingModal",
          error: e?.message,
        })
      );
    }
  }
}
