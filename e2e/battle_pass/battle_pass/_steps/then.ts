import * as ids from "@ids";
import { expect } from "detox";
import { screens } from "@appScreens";
import { multipleTextVisible, navigation } from "@utils";
import { readInbox } from "@yu-life/yulife-bdd-framework";
import { scrollFromID } from "_utils/navigation/scrolling";
import { EndOfSeasonItems, IMPACT_DONATION } from "../_resources/types";
import { challengeTypes, impactDonationImages } from "../_resources/constants";

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible,
  multipleIDVisible,
  textNotVisible,
  idVisibleAtIndex,
} = navigation.common;

export const {
  onChallengeComplete,
  onMeditationChallengeComplete,
  isOnQuitChallengeScreen,
  canSeeNewChallengePage,
  canSeeChallengeTiles,
  yunityRewardsVisible,
} = screens.challenges;

export const { scrollUntilTextVisibleAtIndex, scrollUntilIdVisible } = navigation.scrolling;

export const { unlockedYumojiItemsVisible } = screens.yuscreen;

export const impactCardsVisible = async (waitTime = 2000) => {
  const titles = ["Plant trees", "Provide water", "Feed families", "Clean the ocean"];
  const donationButtons: IMPACT_DONATION[] = ["tree", "water", "meal", "ocean"];

  for (const [index, title] of titles.entries()) {
    const donationButton = donationButtons[index];
    const imageUri = impactDonationImages[donationButton];

    await idVisible(ids.IMPACT_DONATION_TITLE(title), waitTime)();
    await idVisible(ids.DONATION_BUTTON(donationButton), waitTime)();
    await idVisible(ids.IMPACT_DONATION_IMAGE(imageUri), waitTime)();
    if (index == 1) {
      await scrollFromID(ids.DONATIONS_LIST, "up", "slow", 0.2)();
    }
  }
};

export const extraChallengesInfoModalVisible = async () => {
  for (const type of challengeTypes) {
    const testID = ids.ITEM_DETAILS_REWARD(type);
    await expect(element(by.id(testID))).toBeVisible();
  }
};

export const extraChallengeRewardModalVisible = async () => {
  for (const challenge of challengeTypes) {
    try {
      await expect(element(by.text(`You've won ${challenge}!`))).toBeVisible();
      return;
    } catch {
      // Ignore and try next challenge
    }
  }
  throw new Error("No matching challenge title found");
};

export const assertEndOfSeasonItems =
  (items: EndOfSeasonItems, waitTime = 2000) =>
  async () => {
    for (const { title, score } of items) {
      await idVisible(ids.END_OF_SEASON_ITEM_TITLE(title), waitTime)();
      await idVisible(ids.END_OF_SEASON_ITEM_SCORE(score), waitTime)();
    }
  };

export const assertWalletPopUp = async () => {
  await multipleTextVisible(["Reward collected!", "Find it in your wallet."], 3000)();
};

export const assertInventoryPopUp = async () => {
  await multipleTextVisible(
    ["Power-up collected!", "Find it in your inventory in Quests."],
    3000
  )();
};

export const assertCouponEmailReceived = (email: string, rewardName: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== `[detox] Your link to your ${rewardName} voucher`) {
    throw new Error("Email subject is incorrect");
  }
};
