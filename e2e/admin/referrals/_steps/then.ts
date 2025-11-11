import { navigation } from "@utils";
import * as ids from "@ids";
import { screens } from "@appScreens";
import { expect } from "detox";

export const { wait, idVisible, textVisible, idNotVisible, textNotVisible, multipleTextVisible } =
  navigation.common;

export const { menuItemsVisible } = screens.menu;

export const { onDailySteps } = screens.dailySteps;

export const { scrollFromID } = navigation.scrolling;

export const referralsPopoverVisible =
  (referralReward = "1000") =>
  async () => {
    const popoverTitle = element(by.text("Invite colleagues"));
    const popoverText = element(
      by.text(`Share the love and get ${referralReward} YuCoin for every referral.`)
    );

    await waitFor(popoverTitle).toExist().withTimeout(15000);
    await waitFor(popoverText).toExist().withTimeout(5000);

    await expect(popoverTitle).toBeVisible();
    await expect(popoverText).toBeVisible();
  };

export const referralsPopoverNotVisible =
  (referralReward = "1000") =>
  async () => {
    await expect(element(by.text("Invite colleagues"))).not.toBeVisible();
    await expect(
      element(by.text(`Share the love and get ${referralReward} YuCoin for every referral.`))
    ).not.toBeVisible();
  };

export const isOnInivteColleaguePage = (image: string, waitTime?: number) => async () => {
  await wait(waitTime)();
  await expect(element(by.id(ids.REFERRALS_IMAGE_URI(image)))).toBeVisible();
  await expect(element(by.id(ids.REFERRALS_SHARE_CODE_BUTTON))).toBeVisible();
  await scrollFromID(ids.REFERRALS_SHARE_CODE_BUTTON, "up", "fast")();
  await expect(element(by.text("Your referrals"))).toBeVisible();
};

export const referralVisible =
  (customer: any, referralDate: string, yuCoin = "1000") =>
  async () => {
    const customerName = `${customer.data.firstName} ${customer.data.lastName}`;

    await textVisible(customerName)();
    await textVisible(referralDate)();
    await textVisible(yuCoin)();
  };

export const referralNotVisible =
  (customer: any, referralDate: string, yuCoin = "1000") =>
  async () => {
    const customerName = `${customer.data.firstName} ${customer.data.lastName[0]}`;

    await textNotVisible(customerName)();
    await textNotVisible(referralDate)();
    await textNotVisible(yuCoin)();
  };

export const referralEmptyState = async () => {
  await scrollFromID(ids.REFERRALS_SHARE_CODE_BUTTON, "up", "fast")();
  await textVisible("Your referrals")();
  await textVisible(
    "Nobody’s used your code just yet – time for a nudge? Once they sign up with your code, their names will appear below.",
    2000
  )();
};
