import { navigation } from "@utils";
import * as ids from "@ids";
import { waitFor, element, by } from "detox";

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
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
  start,
  restartWithoutDelete,
  restartWithoutDeleteTwoTimes,
  reloadOnly,
  tapIDWithOffset,
} = navigation.common;

export const { loginAsUser } = navigation.login;

export const changeReferralSelectedBusiness =
  (businessName: string, waitTime = 2_000) =>
  async () => {
    await wait(waitTime)();
    await tapIDWithOffset(ids.REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN, 0, 5, 3_000)();
    await tapID(ids.GENERIC_SELECTOR_ITEM(businessName), 1_500)();
    await tapID(ids.GENERIC_SELECTOR_CONFIRM, 1_500)();
    await wait(3_500)();
  };

export const waitForReferralsPageReady =
  (waitTime = 3_000) =>
  async () => {
    await wait(waitTime)();
    await waitFor(element(by.id(ids.REFERRALS_SHARE_CODE_BUTTON)))
      .toBeVisible()
      .withTimeout(10_000);
  };
