import {
  CORE_REWARDS_BOOTS_GHI_REWARDS,
  CORE_REWARDS_BUPA_GHI_REWARDS,
  CORE_REWARDS_GARMIN_GHI_REWARDS,
  CORE_REWARDS_LIVING_DNA_GHI_REWARDS,
  CORE_REWARDS_THRIVA_GHI_REWARDS,
  CORE_REWARDS_YORK_GHI_REWARDS,
} from "../_data";
import { GHI_SINGLE_VOUCHER_DETAILS } from "./types";

export const voucherText = (voucher: GHI_SINGLE_VOUCHER_DETAILS) =>
  `£${voucher.value} Voucher - ${voucher.cost} YuCoin`;

// rewards claim page - before unlock

export const paidBy = "Employer scheme";
export const keyInfo = "Key Info";
export const coverlevel = "Cover Level";
export const startDateText = "Start date";
export const membershipNumberText = "Membership Number";
export const membershipNumberOnlineText =
  "Your membership number can be found online, or in-app, via Bupa Touch.";
export const schemeNumber = "Scheme number";
export const coverFor = "What I'm covered for";
export const coverForWApos = "What I’m covered for";
export const howToClaim = "How to make a claim";
export const faq = "FAQs";
export const Bupa_markdown_1 =
  "This information is based on data we received from your company and individual circumstances may vary. This is a group insurance product, should you have any questions about your cover, please contact your employer.";
export const Bupa_markdown_2 =
  "Policies paid for by your employer may have implications on your tax status and take-home pay.";
export const rewards_exclusive_pill = "Health insurance exclusive";

//rewards page

export const groupHealthRewardsHeading = "Group Health Rewards";
export const groupHealthRewardsCompleted = (completed: string) => `${completed} Rewards unlocked`;
export const groupHealthRewardsDescription =
  "Unlock rewards by levelling up each day.\n\nComplete at least one challenge per day to level up. The more days you complete a challenge, the more rewards you will unlock.\n\n6 days left of this journey to go before your progress resets. You've got this!";
export const yugiRewardsImageURL =
  "https://yulife-develop.imgix.net/products/group/rewards/yugi-swipe-2023-07-18.svg?ixlib=js-3.2.1&h=444&w=387&s=0a699bce95b4beadf3b95f99ecfdd6e5";
export const groupHealthRewardsLockedImageURL =
  "https://yulife-develop.imgix.net/content/icons/lock.svg?ixlib=js-3.2.1&w=192&h=192&s=066080739af592173a3a631e3504fe8c";
export const groupHealthRewardsUnlockedImageURL =
  "https://yulife-develop.imgix.net/content/icons/chest.svg?ixlib=js-3.2.1&w=96&h=96&s=f298206b4d2b5507d96a6f563c226a33";

// rewards values and titles

export const groupHealthRewardProgressNames = [
  "Exclusive Discounts",
  "Urban Massage Vouchers",
  "Free Thriva Health Screening Kit",
  "Free Living DNA Test Kit",
  "Free In-person Health Assessment",
  "Free Garmin Smartwatch",
];

export const groupHealthRewardCarouselNames = [
  "Exclusive Discounts",
  "Massage Vouchers",
  "Free Health Screening Kit",
  "Free DNA Kit",
  "Free Health Assessment",
  "Free Smartwatch",
];

export const groupHealthRewardProgressLevels = ["5", "10", "50", "100", "150", "200"];

// reward claim page - after unlock

export const yourRewardHeader = "Your Reward";
export const yourRewardJourneyHeader = "Your Reward Journey:";
export const questionHeader = "Have a question?";
export const questionDescription = "Chat to us through the app, or read more from our Help Centre.";
export const helpCentre = "Help centre";
export const termsAndConditions = "Terms & Conditions";
export const rewardsPolicy = "Rewards Policy";
export const claimReward = "Claim my reward";

// important notes page

export const importantNotesHeaderImage =
  "https://yulife-develop.imgix.net/reward-claiming/intro-logo.svg?ixlib=js-3.2.1&w=960&h=672&s=e268f41154dbb95f1ab1bfa4cdadb25e";
export const importantNotesButtonText = "Fill in details";

// fill in details page

export const detailsPageHeading =
  "Help us get the test kit to you safely! Carefully fill in your details:";
export const thrivaDetailsGender =
  "Thriva's lab needs this to process your tests — we respect that your identifying gender might be different.";

// generic details warnings

export const detailsCorrectWarningMessages = [
  "Wait! Please check that you have filled in your details correctly.",
  "\nYou will not be able to change them once you’ve submitted.",
];
export const detailsCorrectWarningYugiImg =
  "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46";

// Kit ordered page

export const parcelImg =
  "https://yulife-develop.imgix.net/reward-claiming/shipment.svg?ixlib=js-3.2.1&w=672&h=546&s=eb52e3f40b29b599ad49f11f689d6a44";
export const kitOrderedSuccessButtonText = "Got it!";
export const thrivaSuccessHeader = "Your Thriva test kit is on its way!";
export const thrivaDeliveryMessages = [
  "Delivery can take around 3-5 working days.",
  "To track your kit delivery, check your email. We’ve sent you a link!",
];
export const livingDNASuccessHeader = "Your Living DNA test kit is on its way!";
export const livingDNADeliveryMessages = [
  "Delivery can take around 3-5 working days.",
  "Head over to your Living DNA rewards page to view the rest of your rewards journey!",
];

// email subjects

export const urbanMassageEmailSubject = "[detox] Your Urban Massage Voucher Awaits!";
export const bupaEmailSubject = "[detox] Your Bupa Be.Motivated Voucher Awaits!";
export const garminEmailSubject = "[detox] Your Garmin Voucher Awaits!";
export const thrivaEmailSubject = "[detox] Your Thriva Voucher Awaits!";

// sparkle animation

export const sparkleAnimation =
  "https://yulife-develop.imgix.net/products/group/rewards/card-stars.png?ixlib=js-3.2.1&s=bf4beba34d32a3c412a95c90caadb320";

// Garmin choice

export const selectReward = "Select your reward";
export const chooseGarmin = "Get my Garmin";
export const chooseGOSH = "Make a GOSH donation instead";
export const areYouSure = "Are you sure?";
export const goshWarningMessage = "You won't be able to get a Garmin if you donate to GOSH:";
export const makeDonation = "Make donation 💖";

// GOSH confirmation

export const donationHeader = "Thank you for your donation!";
export const donationMessage =
  "Your donation will help to give support to seriously ill children and their families, offering them the best chance to fulfil their potential. To learn more about GOSH's work and how your donation will make a difference, please click here.";

// Quest Screen Modals

export const lockedLevelText = (level: number) => {
  return `Unlock at level ${level.toString()}`;
};
export const takeChallengeText = "Almost there! Take a challenge to unlock your reward.";
export const moreRewardsAheadHeader = "More rewards ahead!";
export const getMoreRewardsHeader = "Get more rewards!";
export const moreRewardsAheadText =
  "Doing challenges every day helps you unlock more rewards faster.";
export const learnMoreButton = "Learn more";
export const chestTease = "A chest full of YuCoin!";
export const rewardsTeaseHeader = "Stay tuned!";
export const rewardsTeaseText =
  "Soon you’ll unlock exciting rewards as you progress through levels.";
export const streakModalGameHeaderUnlocked = "Reward unlocked. You did it!";
export const streakModalGameHeaderTease = "You’re one step closer to your next reward.";

export const ghiRewardIdsMinusUrban = [
  CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
  CORE_REWARDS_YORK_GHI_REWARDS.data._id,
  CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
  CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
  CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
  CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
];

export const rewardsGameOnTheWayImg =
  "https://yulife-develop.imgix.net/bupa/images/rewards_on_the_way_2023-03-23.png?ixlib=js-3.2.1&w=981&h=714&s=4809f351b905b43bb783ab2519e188f7";

// Learn More page

export const learnMorePageHeader = "Exclusive rewards as you progress through levels!";
export const learnMorePageFinishedHeader = "You’ve unlocked all your rewards!";
export const learnMorePageDesc = `Every day you complete a challenge, you level up and get closer to unlocking cool rewards!`;
export const learnMoreTeaseDesc = (days: number) =>
  `Get ready for an exciting journey! Soon, taking a challenge each day will help you level up and get you closer to unlocking cool rewards.\n\nYou’ll have ${days.toString()} days to get those rewards before your progress resets and the fun begins again. In the meantime, keep rocking those challenges! 🚀`;
export const learnMoreFinishedDec =
  "Fantastic job! 🔥 You’ve unlocked all your health rewards! You’ll be able to start unlocking more rewards soon — we’ll let you know when. Till then, keep up those challenges!";
export const learnMorePageButton = "Take a challenge";
export const learnMoreFAQ1 = "How do I level up?";
export const learnMoreFAQ2 = "How do I claim my rewards?";
export const learnMoreFAQ3 = "What happens when the time runs out?";
export const learnMoreFAQ1Text =
  "Level up by completing at least one challenge per day on your quest map. Levelling up will get you one step closer to unlocking new rewards. You can only level up once per day so make sure to come back every day to unlock your rewards as quickly as possible.";
export const learnMoreFAQ2Text = [
  "Claim your rewards on the Rewards page.",
  "Let’s say you’ve unlocked your Garmin smartwatch after completing 200 levels since  you started levelling up for rewards. Head to the rewards page and look for “Garmin smartwatch”. Within that page, you’ll be able to find the steps that will help you ‌claim your Garmin watch. (If you’d prefer not to get a Garmin you can also make a donation to Great Ormond Street Hospital.)",
  "Other rewards work in much the same way as well.",
];
export const learnMoreFAQ3Text =
  "Once you start levelling up for rewards, you will have until the end of the current reward cycle to level up as far as possible. A reward cycle can last up to a year but could be shorter depending on when you enter it. At the end of the current reward cycle, your progress will reset to 0, and you will start a new cycle. Once the next cycle starts, you'll be able to unlock more rewards, while still being able to redeem some of the rewards you previously unlocked.";

export const learnMoreFAQPage1 = [learnMoreFAQ1, learnMoreFAQ1Text];
export const learnMoreFAQPage2 = [learnMoreFAQ2, ...learnMoreFAQ2Text];
export const learnMoreFAQPage3 = [learnMoreFAQ3, learnMoreFAQ3Text];

// GIP Rewards Purchase History Titles

export const skinVisionPurchaseHistory = "1-day SkinVision promo code";

// Withings claim notes page

export const withingsNotesPageImg =
  "https://yulife-develop.imgix.net/reward/illustration/withings-intro.svg?ixlib=js-3.2.1&w=320&h=224&fit=clip&fm=png&dpr=3&s=52b6fae00d15abcd2210e77388afdf63";
export const withingsNotesPageHeading = "Your Withings Body Smart scale awaits!";
export const withingsNotesPageSubHeading = "We just need a few details from you.";
export const withingsNotesPageDisclaimer1 =
  "By providing us with your personal details to claim your free Withings Body Smart scale, you are consenting to us sharing these personal details with Withings for the purpose of fulfilling your order.";
export const withingsNotesPageDisclaimer2 =
  "Delivery will only be available within the United Kingdom.";
export const withingsNotesPageDisclaimer3 =
  "You will also need to download the Withings app to use this smart scale.";
export const withingsDetailsPageHeader =
  "Help us get the Body Smart scale to you safely! Carefully fill in your details:";
export const withingsSuccessHeader = "Your Withings Body Smart scale is on its way!";
export const withingsDeliveryMessages = ["Delivery can take around 5-7 days."];
