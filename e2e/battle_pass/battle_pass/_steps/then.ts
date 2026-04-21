import * as ids from "@ids";
import { by, element, expect, waitFor } from "detox";
import { screens } from "@appScreens";
import { navigation } from "@utils";
import { readInbox } from "@yu-life/yulife-bdd-framework";
import { scrollFromID } from "_utils/navigation/scrolling";
import { EndOfSeasonItems, IMPACT_DONATION } from "../_resources/types";
import { challengeTypes, impactDonationImages } from "../_resources/constants";

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  tapID,
  completedTodayStreakCopyVisible,
  multipleIDVisible,
  multipleTextVisible,
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

export const impactCardsVisible =
  (waitTime = 2000) =>
  async () => {
    const titles = ["Plant trees", "Provide water", "Feed families", "Clean the ocean"];
    const donationButtons: IMPACT_DONATION[] = ["tree", "water", "meal", "ocean"];

    for (const [index, title] of titles.entries()) {
      const donationButton = donationButtons[index];
      const imageUri = impactDonationImages[donationButton];

      await idVisible(ids.IMPACT_DONATION_TITLE(title), waitTime)();
      await idVisible(ids.DONATION_BUTTON(donationButton), waitTime)();
      await idVisible(ids.IMPACT_DONATION_IMAGE(imageUri), waitTime)();
      if (index == 1) {
        await scrollFromID(ids.DONATIONS_LIST, "up", "slow", 0.2, waitTime)();
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
      await waitFor(element(by.text(`${challenge} collected!`)))
        .toBeVisible()
        .withTimeout(3000);
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
  // Dismisses "Got it" pop-ups that can appear before the wallet reward pop up (Yumoji and/or power-up).
  for (const title of ["Yumoji item collected!", "Power-up collected!"] as const) {
    try {
      await waitFor(element(by.text(title))).toBeVisible().withTimeout(1500);
    } catch {
      continue;
    }

    await tapID(ids.CTA_GOT_IT, 1500)();
  }

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
