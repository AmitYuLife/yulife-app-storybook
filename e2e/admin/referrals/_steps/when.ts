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

export const changeReferralSelectedBusiness = (businessName: string) => async () => {
  await tapID(ids.REFERRALS_BUSINESS_ACCOUNT_DROP_DOWN)();
  await tapID(ids.GENERIC_SELECTOR_ITEM(businessName))();
  await tapID(ids.GENERIC_SELECTOR_CONFIRM)();
};
