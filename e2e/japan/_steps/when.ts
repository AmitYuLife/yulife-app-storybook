import { navigation } from "@utils";
import * as ids from "@ids";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { screens } from "@appScreens";
export { cycleThroughEngagementSurveyAgreeCheckBoxes } from "../../activity/FWQ/_steps/when";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
  scrollUntilTextVisibleAtIndex,
  scrollUntilIdVisibleAtIndex,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  wait,
  tapIDAtPoint,
  tapIDAtIndex,
  textNotVisible,
  tapTextAtIndex,
  minimiseAndReopenApp,
} = navigation.common;

export const goToWellbeingHub = async () => {
  await tapID(ids.MENU_ICON, 2000)();
  await tapID(ids.MENU_ITEM("Well-beingセンター"), 2000)();
};

export const { triggerSearchTokens } = screens.leaderboard;

export const fillOutEngagementSurvey = async () => {
  await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
  await tapID(ids.BUTTON_BASE("始める"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
};
