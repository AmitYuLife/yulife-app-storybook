import { navigation } from "@navigation";
import * as ids from "@ids";
import { PensionContributionInfo } from "../_resources/types";
import { boldTextType, nonBoldTextType, pensionPageDesc } from "../_resources/constants";

export const { scrollUntilTextVisible, scrollUntilIdVisible } = navigation.scrolling;

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex,
} = navigation.common;

export const cannotSeePensionOnboarding = async () => {
  await textNotVisible("Earn as you save")();
  await textNotVisible("Connect my Smart Pension")();
};

const CONTRIBUTION_PERCENTAGES = ["7%", "5%", "3%"] as const;
const YUCOIN_REWARDS = ["15", "10", "5"] as const;

const verifyBalanceSection = async (info: PensionContributionInfo) => {
  await textVisible("£*******")();
  await tapID(ids.SHOW_HIDE_BALANCE)();
  await wait(1000)();
  await textVisible(`£${info.valuation}`)();
  await textVisible(
    `As of ${info.valuationDate}. Currently processing £${info.balance} not shown above`
  )();
};

const scrollToContributionSection = async () => {
  await scrollUntilTextVisible(
    ids.SDUI_BODY_SCROLL,
    "Manage my contribution",
    "down",
    0.5,
    0.5,
    4_000
  )();
  await wait(500)();
};

const verifyContributionTiers = async () => {
  for (const percentage of CONTRIBUTION_PERCENTAGES) {
    await idVisible(ids.TEXT_TEMPLATE(percentage, nonBoldTextType))();
  }
  for (const reward of YUCOIN_REWARDS) {
    await idVisible(ids.TEXT_TEMPLATE(reward, nonBoldTextType))();
  }
};

const verifyStatusLabels = async (status: "Pending" | "Paused") => {
  await idVisibleAtIndex(ids.TEXT_TEMPLATE(status, nonBoldTextType), 0)();
  await idVisibleAtIndex(ids.TEXT_TEMPLATE(status, nonBoldTextType), 1)();
};

const verifyFooterSection = async () => {
  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Display Piggy Bank", "down")();
  await wait(500)();
  await textVisible("Unlink my pension")();
};

type PensionPageType = "active" | "pending" | "paused";

export const canSeePensionContributionPage =
  (type: PensionPageType, info?: PensionContributionInfo, rewardPerc?: string) => async () => {
    await textVisible(pensionPageDesc)();

    switch (type) {
      case "active":
        await verifyBalanceSection(info);
        await scrollToContributionSection();
        await textVisible(`${info.employersContribution}%`)();
        await textVisible(`${info.yourContribution}%`)();
        await idVisible(ids.TEXT_TEMPLATE(`${rewardPerc}%`, boldTextType))();
        break;

      case "pending":
        await idVisible(ids.TEXT_TEMPLATE("£ – Pending", boldTextType))();
        await textVisible(
          "Currently processing. Will be updated as soon as we receive data provided by Smart Pension"
        )();
        await scrollToContributionSection();
        await verifyStatusLabels("Pending");
        await verifyContributionTiers();
        await textVisible(
          "We are currently waiting for data provided by Smart Pension. Check back later."
        )();
        break;

      case "paused":
        await verifyBalanceSection(info);
        await scrollToContributionSection();
        await verifyStatusLabels("Paused");
        await verifyContributionTiers();
        await textVisible(
          `Your monthly contribution and YuCoin reward is paused right now. Follow \u201CManage my contribution\u201D to review.`
        )();
        break;
    }

    await verifyFooterSection();
  };

export const onPensionProductPage = async () => {
  await textVisible(pensionPageDesc)();
};

export const canSeePendingPensionEarnings =
  (infoFilledIn = true) =>
  async () => {
    await textVisible(
      "We are waiting for data from your pension provider. This can take up to one month."
    )();
    await textVisible("Waiting")();

    if (infoFilledIn) {
      await textVisible("Pension contribution")();
      return;
    }

    await textVisible("? Pension contribution")();
  };

export const canSeePausedPensionEarnings = async () => {
  await textVisible("Pension contribution")();
  await textVisible("Paused")();
  await textVisible("Manage")();
};

export const cannotSeePensionConnectPrompt = async () => {
  await textNotVisible("Connection bonus")();
  await textNotVisible(
    "Connect to your Smart Pension account and earn up to 15 YuCoin per day for your existing pension contributions"
  )();
};
