import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { call } from "redux-saga/effects";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionOpenModalSaga(action: SduiActionWithServerPayload) {
  try {
    const serverPayload = JSON.parse(action.payload.serverPayload);

    const { heading, subheading, ctaLabel, onPress, textAlign } = serverPayload.props;

    yield call(() =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading,
            subheading,
            ctaLabel,
            textAlign,
            onPress: onPress ? onPress : () => Navigation.dismissModal(MODALS.generic),
          },
        },
      })
    );
  } catch (error) {
    // log
  }
}
