import Logger from "@services/logging/logger";
import { put, select, spawn } from "redux-saga/effects";
import { markNotificationsAsViewedByType } from "../user.actions";
import { getRouteState } from "../../app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { getTabNotifications } from "../user.selectors";
import { MobileTabs } from "@graphql/_core/schema/globalTypes";

const ROUTE_TO_MOBILE_TAB: Partial<Record<keyof typeof ROUTES, MobileTabs>> = {
  [ROUTES.dailySteps]: MobileTabs.dailySteps,
  [ROUTES.quests]: MobileTabs.quests,
  [ROUTES.yuScreen]: MobileTabs.yuScreen,
  [ROUTES.leaderboard]: MobileTabs.leaderboard,
  [ROUTES.rewards]: MobileTabs.rewards,
};

export default function* updateMobileTabsNotifications() {
  try {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
    const currentMobileTab: MobileTabs = ROUTE_TO_MOBILE_TAB[currentRoute as keyof typeof ROUTES];
    const tabNotifications: ReturnType<typeof getTabNotifications> = yield select(getTabNotifications);

    if (currentMobileTab && tabNotifications.includes(currentMobileTab)) {
      yield put(markNotificationsAsViewedByType({ type: currentMobileTab }));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "updateMobileTabsNotifications" });
    });
  }
}
