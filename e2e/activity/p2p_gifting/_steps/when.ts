import { screens } from "@appScreens";
import { navigation } from "@utils";
import { getTranslation } from "_utils/translations/getTranslations";
const locale = process.env.TARGET_LOCALE || "en-GB"
const translation = getTranslation(locale);

export { clickUser } from "../../leaderboard/_steps/when"

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText
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
  navigateTo
} = navigation.common;

export const { loginOnly } = navigation.login;

export const {
  searchLeaderboard,
  switchLeaderboard,
  triggerSearchTokens
} = screens.leaderboard

export const pressGiftingGotIt = async () => {
  await tapText(translation.screens.gifting.success_alert.cta_label)()
}

