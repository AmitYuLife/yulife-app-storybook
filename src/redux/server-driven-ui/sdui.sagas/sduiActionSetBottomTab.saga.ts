import { Navigation } from "@navigation/main";
import { all, call, put } from "redux-saga/effects";
import { TAB_ROUTES } from "@navigation/root";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { parseJSON } from "@utils";

export function* sduiActionSetBottomTabSaga({ payload }: SduiActionWithServerPayload) {
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId, popCurrentStackTo, postDispatchActions = [] } = data;

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

      if (postDispatchActions.length) {
        yield all(postDispatchActions.map((postDispatchAction: { type: string }) => put(postDispatchAction)));
      }
    }

    if (popCurrentStackTo) {
      yield call(() => Navigation.popTo(popCurrentStackTo));
    }
  }
}
