import { Navigation } from "@navigation/main";
import { call } from "redux-saga/effects";
import { parseJSON } from "@utils";
import Logger from "@services/logging/logger";
import { getServerPayload } from "../sdui.helpers";
import { SduiActionWithServerPayload } from "../sdui.types";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { ROUTES } from "@navigation/constants";

export function* sduiActionGenericNavigateBackToRoot({ payload }: SduiActionWithServerPayload) {
  const { isValid, data } = parseJSON<{ routeId: string }>(getServerPayload(payload), ["routeId"]);

  if (isValid && data.routeId) {
    try {
      // TODO: add dispatch to refetch yuscreen
      if (
        data.routeId === ROUTES.yuScreen ||
        data.routeId === ROUTES.todayEarnings ||
        data.routeId === ROUTES.pensionDetails
      ) {
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
