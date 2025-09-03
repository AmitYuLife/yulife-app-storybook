import { screens } from "@appScreens";
import { CONTENT_ITEM_INPUT } from "@ids";
import { navigation } from "@utils";

export const {
  tapRewardInList,
  tapDenomination,
  tapDenominationList,
  tapBuyButton,
  tapPurchasedReward,
} = screens.rewards;

export const {
  scrollFromText,
  scrollFromID,
  swipeFromText,
  swipeToText,
  scrollToAndTapText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollWithLimitedAttemptsUntilIdVisible,
} = navigation.scrolling;

export const { tapText, reloadAppToTab, tapID } = navigation.common;

export const { selectRegionIfVisible } = navigation.login;

export const { tapMenuItem } = screens.menu;

export const enterMobileNumber = (mobileNumber: string) => async () => {
  const mobileNumberInput = element(by.id(CONTENT_ITEM_INPUT("mobileNumber")));
  await waitFor(mobileNumberInput).toBeVisible().withTimeout(30000);
  await mobileNumberInput.tap();
  await mobileNumberInput.replaceText(mobileNumber);
};
