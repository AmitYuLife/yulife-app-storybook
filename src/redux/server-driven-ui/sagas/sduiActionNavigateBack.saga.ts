import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { call, select, all, put, spawn } from "redux-saga/effects";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";

export function* sduiActionNavigateBackSaga({ payload }: SduiActionWithServerPayload) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  const onExit = () => Navigation.pop(currentRoute);

  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(getServerPayload(payload), ["title", "message", "cancelLabel", "confirmLabel"]);

  try {
    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dispatchActions", file: "sduiActionNavigateBackSaga" });
    });
  }

  if (isValid) {
    const onPressSecondary = () => Navigation.dismissModal(MODALS.generic);
    const onPress = () => {
      onExit();
      onPressSecondary();
    };

    yield call(() =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading: data.title,
            subheading: data.message,
            ctaLabel: data.confirmLabel,
            ctaLabelSecondary: data.cancelLabel,
            onPress,
            onPressSecondary,
          },
        },
      })
    );

    return;
  }

  yield call(onExit);
}
