import { region } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { getMenuSide } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { getSupportLevel } from "@redux/user/user.selectors";
import { IntercomClient } from "@services/logging/intercom";
import Logger from "@services/logger/logger";
import { UserSupportLevel } from "@services/logging/types";
import { call, select } from "redux-saga/effects";

export function* sduiActionOpenSupportChatSaga() {
  const supportLevel: ReturnType<typeof getSupportLevel> = yield select(getSupportLevel);

  try {
    if (supportLevel === UserSupportLevel.Basic) {
      const route: ReturnType<typeof getRouteState> = yield select(getRouteState);
      const sduiJourney = region.getConfig("sduiJourney");

      if (!sduiJourney.supportRequest) {
        Logger.notify(new Error("No supportRequest journey found in region config"), {
          file: "sduiActionOpenSupportChatSaga",
        });
        return;
      }

      yield call(() =>
        Navigation.push(route, {
          component: {
            id: ROUTES.journey,
            name: ROUTES.journey,
            passProps: {
              journeyId: sduiJourney.supportRequest,
            },
            options: {
              sideMenu: {
                [getMenuSide()]: {
                  enabled: false,
                  visible: false,
                },
              },
            },
          },
        })
      );
    } else {
      yield call(IntercomClient.displayMessenger);
    }
  } catch (e) {
    Logger.notify(e, { file: "sduiActionOpenSupportChatSaga" });
  }
}
