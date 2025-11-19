import { navigation } from "@utils";
import * as ids from "@ids";

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
} = navigation.common;

export const { loginAsUser } = navigation.login;

export const changeReferralSelectedBusiness =
  (businessName: string, waitTime = 1000) =>
  async () => {
    await wait(waitTime)();
    await tapID(ids.REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN, 500, 0, 5)();
    await tapID(ids.GENERIC_SELECTOR_ITEM(businessName), 1000)();
    await tapID(ids.GENERIC_SELECTOR_CONFIRM, 500)();
  };
