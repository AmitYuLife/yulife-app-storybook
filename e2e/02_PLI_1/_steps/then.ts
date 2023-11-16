import { navigation } from "@utils";
import {
  DATE_INPUT,
  PERCENTAGE_COVERED,
  PRODUCT_STEP_BODY_SCROLL_VIEW,
  TEXT_TEMPLATE,
} from "@ids";
import { screens } from "@appScreens";
import { scrollUntilTextVisible } from "_utils/navigation/scrolling";
import moment from "moment";
import { expect } from 'detox'

export const { idVisible, textVisible, idNotVisible, textNotVisible, multipleTextVisible, textVisibleAtIndex } =
  navigation.common;

export const { onYuscreenV3, onYuscreenV4 } = screens.yuscreen;

const add30Years = moment().add(30, "y").format("Do MMMM YYYY");
const add30YearsFormatedMonth = moment().add(30, "y").format("Do MMM YYYY");

const payoutUntil = `a month until\n${add30Years}`;
const payoutUntilFormatedMonth = `a month until\n${add30YearsFormatedMonth}`;

const inEvent = "In the event of your passing, we'll pay out:";

const rarePrice = "£1,041.67";
export const rareMonthPrice = "£12.31";
const rareMonthPricePregnancy = "£12.59";

const commonPrice = "£520.83";
const commonMonthPrice = "£6.85";
const commonMonthPregnantPrice = "£7.02";

const epicPrice = "£1,562.50";
const epicMonthPrice = "£20.09";
const epicMonthPregnantPrice = "£20.53";

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

export const packageVisible = (packageType: any) => async () => {
  const customsPercentage = "Or, choose a custom percentage";
  const policyStops = "Your policy is set to end when you are 60 years old**. To amend click here";
  const firstCondition = "*Prices are subject to change in the case of further medical information assessment.";
  const secondCondition =
    "**The policy will stop on the policy anniversary in the year of the age selected, not on the date you turn that age.";

  switch (packageType) {
    case "Common":
      await expect(element(by.text("25%"))).toBeVisible();
      await expect(element(by.text(customsPercentage))).toBeVisible();
      await expect(element(by.text(`${commonMonthPrice}*`))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.id(TEXT_TEMPLATE(inEvent)))).toBeVisible();
      await expect(element(by.text(commonPrice))).toBeVisible();
      await expect(element(by.text(payoutUntil))).toBeVisible();
      await expect(element(by.text(policyStops))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("Documents"))).toBeVisible();
      await expect(element(by.text("FAQs"))).toBeVisible();
      await expect(element(by.text(firstCondition))).toBeVisible();
      await expect(element(by.text(secondCondition))).toBeVisible();
      await expect(element(by.text(`${commonMonthPrice} / month`))).toBeVisible();
      await expect(element(by.text("25% of your salary covered"))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Select your cover", "up")();
      break;
    case "Rare":
      await expect(element(by.text("50%"))).toBeVisible();
      await expect(element(by.text(customsPercentage))).toBeVisible();
      await expect(element(by.text(`${rareMonthPrice}*`))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.text(inEvent))).toBeVisible();
      await expect(element(by.text(rarePrice))).toBeVisible();
      await expect(element(by.text(payoutUntil))).toBeVisible();
      await expect(element(by.text(policyStops))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("Documents"))).toBeVisible();
      await expect(element(by.text("FAQs"))).toBeVisible();
      await expect(element(by.text(firstCondition))).toBeVisible();
      await expect(element(by.text(secondCondition))).toBeVisible();
      await expect(element(by.text(`${rareMonthPrice} / month`))).toBeVisible();
      await expect(element(by.text("50% of your salary covered"))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Select your cover", "up")();
      break;
    case "Epic":
      await expect(element(by.text("75%"))).toBeVisible();
      await expect(element(by.text(customsPercentage))).toBeVisible();
      await expect(element(by.text(`${epicMonthPrice}*`))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.text(inEvent))).toBeVisible();
      await expect(element(by.text(epicPrice))).toBeVisible();
      await expect(element(by.text(payoutUntil))).toBeVisible();
      await expect(element(by.text(policyStops))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("Documents"))).toBeVisible();
      await expect(element(by.text("FAQs"))).toBeVisible();
      await expect(element(by.text(firstCondition))).toBeVisible();
      await expect(element(by.text(secondCondition))).toBeVisible();
      await expect(element(by.text(`${epicMonthPrice} / month`))).toBeVisible();
      await expect(element(by.text("75% of your salary covered"))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Select your cover", "up")();
      break;
    default:
      break;
  }
};

export const isOnDocumentsScreen = async () => {
  const docHeaderText = "Your policy docs, in one easy place.";

  await expect(element(by.text(docHeaderText))).toBeVisible();
  await expect(element(by.text("Policy Wording"))).toBeVisible();
  await expect(element(by.text("Policy Summary"))).toBeVisible();
  await expect(element(by.text("Terms of Business"))).toBeVisible();
  await expect(element(by.text("Privacy Policy"))).toBeVisible();
};

export const packageSummaryVisible = (packageType: string, totalprice: string, montlyprice: string) => async () => {
  switch (packageType) {
    case "common":
      await expect(element(by.text(montlyprice))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.text(totalprice))).toBeVisible();
      await expect(element(by.text(alsoBenefit))).toBeVisible();
      await expect(element(by.text(chestRewardsTitle))).toBeVisible();
      await expect(element(by.text(chestRewardsCopy))).toBeVisible();
      await expect(element(by.text(policyinfo))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("FAQ"))).toBeVisible();
      break;
    case "rare":
      await expect(element(by.text(montlyprice))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.text(totalprice))).toBeVisible();
      await expect(element(by.text(alsoBenefit))).toBeVisible();
      await expect(element(by.text(chestRewardsTitle))).toBeVisible();
      await expect(element(by.text(chestRewardsCopy))).toBeVisible();
      await expect(element(by.text(streakBountyTitle))).toBeVisible();
      await expect(element(by.text(streakBountyCopy))).toBeVisible();
      await expect(element(by.text(policyinfo))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("FAQ"))).toBeVisible();
      break;
    case "epic":
      await expect(element(by.text(montlyprice))).toBeVisible();
      await expect(element(by.text("per month"))).toBeVisible();
      await expect(element(by.text(totalprice))).toBeVisible();
      await expect(element(by.text(alsoBenefit))).toBeVisible();
      await expect(element(by.text(chestRewardsTitle))).toBeVisible();
      await expect(element(by.text(chestRewardsCopy))).toBeVisible();
      await expect(element(by.text(streakBountyTitle))).toBeVisible();
      await expect(element(by.text(streakBountyCopy))).toBeVisible();
      await expect(element(by.text(stepLimitTitle))).toBeVisible();
      await expect(element(by.text(stepLimitCopy))).toBeVisible();
      await expect(element(by.text(policyinfo))).toBeVisible();
      await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
      await expect(element(by.text("FAQ"))).toBeVisible();
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

    await expect(element(by.text(`${priceMonthPrice}*`))).toBeVisible();
    await expect(element(by.text("per month"))).toBeVisible();
    await expect(element(by.text(payOutAmmount))).toBeVisible();
    await expect(element(by.text(payoutUntil))).toBeVisible();
    await expect(element(by.text(policyStops))).toBeVisible();
  };
