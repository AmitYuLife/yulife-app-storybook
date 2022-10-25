import { Alert } from "react-native";
import { call } from "redux-saga/effects";
import { store as reduxStore } from "@redux/_core/store";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionOpenAlertDialogSaga(action: SduiActionWithServerPayload) {
  try {
    const dispatch = reduxStore.dispatch;
    const serverPayload = JSON.parse(action.payload.serverPayload);

    const { title, message, buttons } = serverPayload;

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
  } catch (error) {
    // log
  }
}
