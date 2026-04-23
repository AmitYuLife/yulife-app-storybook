import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { Navigation } from "@navigation/main";
import { parseJSON } from "@utils";
import Logger from "@services/logger/logger";
import { call } from "redux-saga/effects";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getServerPayload } from "../sdui.helpers";

export function* sduiActionOpenModalSaga(action: SduiActionWithServerPayload) {
  try {
    const { data, isValid } = parseJSON(getServerPayload(action.payload));

    if (!isValid || !Object.values(MODALS).includes(data.routeId)) {
      throw new Error("Invalid action payload!");
    }

    yield call(() =>
      showYuModal({
        component: {
          id: data.routeId,
          name: data.routeId,
          passProps: {
            ...data.props,
            onPress: data.props.onPress ? data.props.onPress : () => Navigation.dismissModal(data.routeId),
          },
        },
      })
    );
  } catch (e) {
    yield call(() =>
      Logger.notify(e, {
        sdui: true,
        location: "sduiActionOpenModalSaga",
      })
    );
  }
}
