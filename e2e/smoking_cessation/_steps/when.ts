import { launchApp, navigation } from "@utils";

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText,
  scrollWithLimitedAttemptsUntilIdVisible,
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
  tapLocalisedText,
  minimiseAndReopenApp,
  terminateApp,
} = navigation.common;

export const goToSmokingCessation = async () => {
  await launchApp({ url: "yulifeapp-detox://yulife/smoking" });
};
