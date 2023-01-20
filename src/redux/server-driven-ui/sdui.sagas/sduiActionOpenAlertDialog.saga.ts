import { Alert } from "react-native";
import { call } from "redux-saga/effects";
import { store as reduxStore } from "@redux/_core/store";
import Logger from "@services/logging/logger";
import { parseJSON } from "@utils";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";

export function* sduiActionOpenAlertDialogSaga(action: SduiActionWithServerPayload) {
  try {
    const dispatch = reduxStore.dispatch;
    const { isValid, data } = parseJSON(getServerPayload(action.payload));

    if (isValid) {
      const { title, message, buttons } = data;

      yield call(() => {
        Alert.alert(
          title,
          message,
          buttons.map((button: { text: string; onPress: SduiActionWithServerPayload }) => ({
            ...button,
            onPress: !button.onPress ? null : () => dispatch(button.onPress),
          }))
        );
      });
    }
  } catch (e) {
    yield call(() =>
      Logger.logMixpanelEvent("app_debug", {
        sdui: true,
        location: "sduiActionOpenAlertDialogSaga",
        error: e?.message,
      })
    );
  }
}
