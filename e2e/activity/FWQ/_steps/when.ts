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
  await tapID(ids.CHECK_BOX_STATE("Agree", false))();
  await tapID(ids.CHECK_BOX_STATE("Neutral", false))();
  await tapID(ids.CHECK_BOX_STATE("Disagree", false))();
  await tapID(ids.CHECK_BOX_STATE("Strongly disagree", false))();
  await tapID(ids.CHECK_BOX_STATE("Strongly agree", false))();
};

export const fillOutEngagementSurvey = async () => {
  await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
  await tapID(ids.BUTTON_BASE("Let’s go!"))();
  await tapID(ids.WORK_LIFE_BALANCE_IMPORTANT)();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID(ids.ACCEPTABLE_WORKLOAD)();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID(ids.SUPPORTED_IN_TAKING_LEAVE)();
  await tapID(ids.BUTTON_BASE("Next"))();
};
