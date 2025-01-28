import { navigation } from "@utils";
import { screens } from "@appScreens";

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
