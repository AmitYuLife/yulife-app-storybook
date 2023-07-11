import { Navigation } from "@navigation/main";
import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { ROUTES } from "@navigation/constants";

const refreshYuScreenRoutes = [
  ROUTES.yuScreen,
  ROUTES.todayEarnings,
  ROUTES.pensionDetails,
  ROUTES.pensionConnectionSuccess,
  ROUTES.pensionConnectionFailed,
];

export function* sduiActionGenericNavigateBackToRoot({ payload }: SduiActionWithServerPayload) {
  const { isValid, data } = parseJSON<{ routeId: string }>(getServerPayload(payload), ["routeId"]);

  if (isValid && data.routeId) {
    try {
      // TODO: add dispatch to refetch yuscreen
      if (refreshYuScreenRoutes.includes(data.routeId)) {
        yield call(getYuScreen);
      }

      yield call(() => Navigation.popToRoot(data.routeId));
    } catch (e) {
      yield call(() =>
        Logger.logMixpanelEvent("app_debug", {
          sdui: true,
          location: "sduiActionGenericNavigateBackToRoot",
          error: e?.message,
        })
      );
    }
  }
}
