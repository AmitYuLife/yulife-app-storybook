import * as ids from "@ids";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { scrollFromID } from "_utils/navigation/scrolling";
import { impactDonationImages } from "../_resources/constants";
import { IMPACT_DONATION } from "../_resources/types";

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible,
  multipleIDVisible,
  textNotVisible,
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
