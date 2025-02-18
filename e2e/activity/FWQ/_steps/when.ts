import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";

export const { tapMenuItem } = screens.menu;

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  tapTextWithParentID,
  tryTapID,
  tryTapText,
  wait,
  clearFieldByID,
  restartWithData,
  restartWithoutDelete,
  idVisible,
  navigateViaText,
  navigateViaID,
  textVisible,
  slowType,
  tapTextAtIndex,
  booleanIdVisible,
  tapIDAtIndex,
  navigateTo,
} = navigation.common;

export const { loginOnly } = navigation.login;

export const cycleThroughEngagementSurveyAgreeCheckBoxes = async () => {
  await tapID("RADIO_ITEM_SELECTED_agree_false")();
  await tapID("RADIO_ITEM_SELECTED_neutral_false")();
  await tapID("RADIO_ITEM_SELECTED_disagree_false")();
  await tapID("RADIO_ITEM_SELECTED_strongly_disagree_false")();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
};

export const fillOutEngagementSurvey = async () => {
  await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
  await tapID(ids.BUTTON_BASE("Let’s go!"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("Next"))();
};
