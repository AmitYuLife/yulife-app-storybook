import { Navigation } from "react-native-navigation";
import { call } from "redux-saga/effects";
import { TAB_ROUTES } from "@navigation/root";
import { parseJSON, getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";

export function* sduiActionSetBottomTabSaga({ payload }: SduiActionWithServerPayload) {
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId } = data;

    const currentTabIndex = TAB_ROUTES.findIndex((item) => item === routeId);

    if (currentTabIndex !== -1) {
      yield call(() =>
        Navigation.mergeOptions(routeId, {
          bottomTabs: {
            currentTabIndex,
          },
          statusBar: {
            drawBehind: false,
            visible: true,
          },
        })
      );
    }
  }
}
