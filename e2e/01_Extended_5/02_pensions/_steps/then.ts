import { navigation } from "@navigation";
import * as ids from "@ids"
import { PensionContributionInfo } from "../_resources/types";
import { boldTextType, nonBoldTextType, pensionPageDesc } from "../_resources/constants";
import moment from "moment";

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible
} = navigation.scrolling

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex
} = navigation.common;

export const cannotSeePensionOnboarding = async () => {
  await textNotVisible("Earn as you save")()
  await textNotVisible("Connect my Smart Pension")()
}

export const canSeePensionContributionPage = (type: "active" | "pending" | "paused", info?: PensionContributionInfo, rewardPerc?: string) => async () => {

  switch (type) {
    case "active":
      await textVisible(pensionPageDesc)()
      await textVisible("£*******")()
      await tapID(ids.SHOW_HIDE_BALANCE)()
      await textVisible(`£${info.valuation}`)()
      await textVisible(`As of ${info.valuationDate}. Currently processing £${info.balance} not shown above`)()
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Manage my contribution", "down")()
      await textVisible(`${info.employersContribution}%`)()
      await textVisible(`${info.yourContribution}%`)()
      await idVisible(ids.TEXT_TEMPLATE(`${rewardPerc}%`, boldTextType))()
      break;
    case "pending":
      await textVisible(pensionPageDesc)()
      await idVisible(ids.TEXT_TEMPLATE("£ – Pending", boldTextType))()
      await textVisible("Currently processing. Will be updated as soon as we receive data provided by Smart Pension")()
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Manage my contribution", "down")()
      await idVisibleAtIndex(ids.TEXT_TEMPLATE("Pending", nonBoldTextType), 0)()
      await idVisibleAtIndex(ids.TEXT_TEMPLATE("Pending", nonBoldTextType), 1)()
      await idVisible(ids.TEXT_TEMPLATE("7%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("5%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("3%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("15", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("10", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("5", nonBoldTextType))()
      await textVisible("We are currently waiting for data provided by Smart Pension. Check back later.")()
      break;
    case "paused":
      await textVisible(pensionPageDesc)()
      await textVisible("£*******")()
      await tapID(ids.SHOW_HIDE_BALANCE)()
      await textVisible(`£${info.valuation}`)()
      await textVisible(`As of ${info.valuationDate}. Currently processing £${info.balance} not shown above`)()
      await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Manage my contribution", "down")()
      await idVisibleAtIndex(ids.TEXT_TEMPLATE("Paused", nonBoldTextType), 0)()
      await idVisibleAtIndex(ids.TEXT_TEMPLATE("Paused", nonBoldTextType), 1)()
      await idVisible(ids.TEXT_TEMPLATE("7%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("5%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("3%", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("15", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("10", nonBoldTextType))()
      await idVisible(ids.TEXT_TEMPLATE("5", nonBoldTextType))()
      await textVisible("Your monthly contribution and YuCoin reward is paused right now. Follow “Manage my contribution” to review.")()
      break;
    default:
      break;
  }

  await scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Display Piggy Bank", "down")()
  await textVisible("Unlink my pension")()
}

export const onPensionProductPage = async () => {
  await textVisible(pensionPageDesc)()
}

export const canSeePendingPensionEarnings = (infoFilledIn = true) => async () => {
  await textVisible("We are waiting for data from your pension provider. This can take up to one month.")()
  await textVisible("Waiting")()

  if (infoFilledIn) {
    await textVisible("Pension contribution")()
    return
  }

  await textVisible("? Pension contribution")()

}

export const canSeePausedPensionEarnings = async () => {
  await textVisible("Pension contribution")()
  await textVisible('Paused')()
  await textVisible("Manage")()
}

export const cannotSeePensionConnectPrompt = async () => {
  await textNotVisible("Connection bonus")()
  await textNotVisible("Connect to your Smart Pension account and earn up to 15 YuCoin per day for your existing pension contributions")()
}