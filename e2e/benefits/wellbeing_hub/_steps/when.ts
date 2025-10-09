import { navigation } from "@utils";
import { getLocalisedString as t } from "@i18n";
import * as ids from "@ids";

export const {
  tapText,
  tapID,
  navigateViaText,
  typeViaID,
  replaceTextViaID,
  replaceTextByID,
  clearFieldByID,
  tapIDAtIndex,
} = navigation.common;

export const {
  scrollFromID,
  scrollUntilIdVisible,
  scrollWithLimitedAttemptsUntilIdVisible,
  swipeFromText,
} = navigation.scrolling;

export const navigateViaButton = (text: string) => async () => {
  await navigateViaText(text);
};

export const goToWellbeingHub = async () => {
  await tapID(ids.MENU_ICON, 4000)();
  await tapID(ids.MENU_ITEM("Wellbeing Hub"))();
};
