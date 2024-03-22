import { navigation } from "@utils";
import {
  CONTENT_MIDDLE_ITEM_IMAGE,
  DATE_INPUT,
  PERCENTAGE_COVERED,
  PRODUCT_STEP_BODY_SCROLL_VIEW,
  TEXT_TEMPLATE,
} from "@ids";
import { screens } from "@appScreens";
import { scrollUntilTextVisible } from "_utils/navigation/scrolling";
import moment from "moment";
import { expect } from 'detox'
import { PLICoverLevel } from "02_PLI_1/01_PLI/_resources/types";
import { pliHoldingHeader, pliHoldingImg, pliHoldingMessage, viewAccDeathPolicy } from "02_PLI_1/01_PLI/_resources/constants";

export const { idVisible, textVisible, idNotVisible, textNotVisible, multipleTextVisible, textVisibleAtIndex } =
  navigation.common;

export const { onYuscreenV3, onYuscreenV4 } = screens.yuscreen;

const inEvent = "In the event of your passing, we'll pay out:";

const rarePrice = "£1,041.67";
export const rareMonthPrice = "£12.31";
const rareMonthPricePregnancy = "£12.59";


const alsoBenefit = "You'll also benefit from:";
const chestRewardsTitle = "Increased Chest Reward";
const chestRewardsCopy = "Earn a larger YuCoin bounty when opening chests.";
const streakBountyTitle = "Increased Streak Bounty";
const streakBountyCopy = "Earn a larger YuCoin bounty for hitting streaks.";
const policyinfo = "Policy information";
const stepLimitTitle = "Increased Daily Step Limit";
const stepLimitCopy = "Increases the number of daily steps for which you earn YuCoin.";

export const correctPliIntroCopy = (header: string) => async () => {
  switch (header) {
    case "Our simple promise":
      await textVisible(
        "Should you pass away, your family will receive a percentage of your pre-tax salary every month."
      )();
      break;
    case "Cover for a lifetime":
      await textVisible(
        "You can create a policy that lasts between 5 – 40 yrs, as long as you are not older than 70 years old when it ends."
      )();
      break;
    case "Power up!":
      await textVisible("Customise your Yumoji’s style and unlock new Power in the Yuniverse.")();
      break;
    case "Owned by you":
      await textVisible(
        "This policy will be owned by you and is not linked to any policies you have with your employer. You keep both the YuLife app and this policy even if you change jobs."
      )();
      break;
    case "YuCoin":
      await textVisible("You’ll get 1000 YuCoin for completing the questions.")();
      break;
  }
};

export const isOnLetsGetPersonalScreen = (name: string) => async () => {
  const titleText = `Let's get personal, ${name}.`;
  const handshakeText = "In order to get you covered, we’ll need to know a bit about you.";
  const internetText = "You’ll need an active internet connection to answer some questions.";
  const privacyText = "This policy will be owned by you, and your answers will not be seen by your employer.";
  const exitText =
    "Should you exit or drop out of the journey at any stage your progress will be saved and you can simply pick up where you left off.";
  const termsText = "Before we get started, please take a moment to read the YuLife Terms of Business.";
  const buttonText = "Let's go!";
  const privacyPolicy = "Privacy policy";
  const termsOfBusiness = "Terms of Business";

  await expect(element(by.text(titleText))).toBeVisible();
  await expect(element(by.text(handshakeText))).toBeVisible();
  await expect(element(by.text(internetText))).toBeVisible();
  await expect(element(by.text(privacyText))).toBeVisible();
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, termsOfBusiness, "down")();
  await expect(element(by.text(exitText))).toBeVisible();
  await expect(element(by.text(termsText))).toBeVisible();
  await expect(element(by.text(buttonText))).toBeVisible();
  await expect(element(by.text(privacyPolicy))).toBeVisible();
  await expect(element(by.text(termsOfBusiness))).toBeVisible();
};

export const isOnPromiseYugiScreen = async () => {
  const yugiText =
    "Do you promise to answer honestly, accurately and to the best of your knowledge? If you are not honest, claims may not be paid out or your policy can be cancelled.";
  const buttonText = "Yes, I promise";

  await expect(element(by.text(yugiText))).toBeVisible();
  await expect(element(by.text(buttonText))).toBeVisible();
};

export const isOnNameScreen = (user: any) => async () => {
  const title = "Okay! Let's start with the easy stuff: is this your name?";
  const firstName = user.data.firstName;
  const lastName = user.data.lastName;

  await expect(element(by.text(title))).toBeVisible();
  await expect(element(by.text(firstName))).toBeVisible();
  await expect(element(by.text(lastName))).toBeVisible();
};

export const isOnDoBScreen = async () => {
  await isOnScreen("What is your date of birth?")();
  await expect(element(by.id(DATE_INPUT))).toBeVisible();
};

export const isOnScreen = (title: string) => async () => {
  await expect(element(by.text(title))).toBeVisible();
};

export const isOnCoverLevelScreen = async () => {
  await expect(element(by.text("Select your cover"))).toBeVisible();
  await expect(element(by.id(PERCENTAGE_COVERED(25)))).toBeVisible();
  await expect(element(by.id(PERCENTAGE_COVERED(50)))).toBeVisible();
  await expect(element(by.id(PERCENTAGE_COVERED(75)))).toBeVisible();
};

export const packageVisible = (cover: PLICoverLevel) => async () => {
  const customsPercentage = "Or, choose a custom percentage";
  const policyStops = "Your policy is set to end when you are 60 years old**. To amend click here";
  const firstCondition = "*Prices are subject to change in the case of further medical information assessment.";
  const secondCondition = "**The policy will stop on the policy anniversary in the year of the age selected, not on the date you turn that age.";


  await textVisible(cover.percent)()
  await textVisible(customsPercentage)()
  await textVisible(`${cover.pricePerMonth}*`)()
  await textVisible("per month")()
  await idVisible(TEXT_TEMPLATE(inEvent))()
  await textVisible(cover.payout)()
  await textVisible(`a month until\n${cover.payoutUntil}`)()
  await textVisible(policyStops)()
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")()
  await textVisible("Documents")()
  await textVisible("FAQs")()
  await textVisible(firstCondition)()
  await textVisible(secondCondition)()
  await textVisible(`${cover.pricePerMonth} / month`)()
  await textVisible(`${cover.percent} of your salary covered`)()
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Select your cover", "up")();
  }

export const isOnDocumentsScreen = async () => {
  const docHeaderText = "Your policy docs, in one easy place.";

  await textVisible(docHeaderText)()
  await textVisible("Policy Wording")()
  await textVisible("Policy Summary")()
  await textVisible("Terms of Business")()
  await textVisible("Privacy Policy")()
};

export const packageSummaryVisible = (packageType: string, totalprice: string, monthlyprice: string) => async () => {
  switch (packageType) {
    case "common":
      await textVisible(monthlyprice)()
      await textVisible("per month")()
      await textVisible(totalprice)()
      await textVisible(alsoBenefit)()
      await textVisible(chestRewardsTitle)()
      await textVisible(chestRewardsCopy)()
      await textVisible(policyinfo)()
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await textVisible("FAQ")()
      break;
    case "rare":
      await textVisible(monthlyprice)()
      await textVisible("per month")()
      await textVisible(totalprice)()
      await textVisible(alsoBenefit)()
      await textVisible(chestRewardsTitle)()
      await textVisible(chestRewardsCopy)()
      await textVisible(streakBountyTitle)()
      await textVisible(streakBountyCopy)()
      await textVisible(policyinfo)()
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await textVisible("FAQ")()
      break;
    case "epic":
      await textVisible(monthlyprice)()
      await textVisible("per month")()
      await textVisible(totalprice)()
      await textVisible(alsoBenefit)()
      await textVisible(chestRewardsTitle)()
      await textVisible(chestRewardsCopy)()
      await textVisible(streakBountyTitle)()
      await textVisible(streakBountyCopy)()
      await textVisible(stepLimitTitle)()
      await textVisible(stepLimitCopy)()
      await textVisible(policyinfo)()
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await textVisible("FAQ")()
      break;
    default:
      break;
  }
};

export const multiFactorPriceChange =
  (myAge: number, priceMonthPrice: string, payOutAmmount: string, setToEndAge: number) => async () => {
    const policyStops = `Your policy is set to end when you are ${setToEndAge} years old**. To amend click here`;
    const yearsCovered = setToEndAge - myAge;
    const addYearsCovered = moment().add(yearsCovered, "y").format("Do MMMM YYYY");
    const payoutUntil = `a month until\n${addYearsCovered}`;

    await textVisible(`${priceMonthPrice}*`)()
    await textVisible("per month")()
    await textVisible(payOutAmmount)()
    await textVisible(payoutUntil)()
    await textVisible(policyStops)()
  };


  export const pliHoldingPageVisible = async () => {
    await idVisible(CONTENT_MIDDLE_ITEM_IMAGE(pliHoldingImg))()
    await idVisible(TEXT_TEMPLATE(pliHoldingHeader, "h1"))()
    await idVisible(TEXT_TEMPLATE(pliHoldingMessage, "b2"))()
    await textVisible(viewAccDeathPolicy)()
  }