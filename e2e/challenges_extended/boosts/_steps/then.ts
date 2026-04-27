import { navigation } from "@utils";
import { screens } from "@appScreens";
import { waitFor } from "detox";
import * as ids from "@ids";

export const { idVisible, textVisible, idExist, wait, completedTodayStreakCopyVisible } =
  navigation.common;

export const {
  onChallengeComplete,
  onMeditationChallengeComplete,
  isOnQuitChallengeScreen,
  canSeeNewChallengePage,
  canSeeChallengeTiles,
  yunityRewardsVisible,
  stepsChallengeDataCorrect,
} = screens.challenges;

export const { scrollUntilTextVisibleAtIndex, scrollUntilIdVisible } = navigation.scrolling;

export const { unlockedYumojiItemsVisible } = screens.yuscreen;

export const canSeeForestYunity = async () => {
  await textVisible("You've achieved Yunity\nwith the Forest")();
};

export const canSeeForestYunityChestIntro = async () => {
  await textVisible("You've earned the\nYunity Forest Chest!")();
};

export const inventoryItemVisible =
  (itemName: string, timeout = 3_000) =>
  async () => {
    await waitFor(element(by.id(ids.INVENTORY_ITEM(itemName))))
      .toBeVisible()
      .withTimeout(timeout);
  };

export const inventoryItemNotVisible =
  (itemName: string, timeout = 3_000) =>
  async () => {
    await waitFor(element(by.id(ids.INVENTORY_ITEM(itemName))))
      .not.toBeVisible()
      .withTimeout(timeout);
  };

export const activateButtonDisabled = async (timeout = 3_000) => {
  await waitFor(element(by.id(ids.ACTIVATE_POWER_UP_BUTTON(false))))
    .toBeVisible()
    .withTimeout(timeout);
};

export const activateButtonEnabled = async (timeout = 3_000) => {
  await waitFor(element(by.id(ids.ACTIVATE_POWER_UP_BUTTON(true))))
    .toBeVisible()
    .withTimeout(timeout);
};

export const inventoryItemActivated = async (timeout = 3_000) => {
  await waitFor(element(by.id(ids.ACTIVATED_INVENTORY_ITEM)))
    .toBeVisible()
    .withTimeout(timeout);
};

export const itemNotSelectable = async (timeout = 3_000) => {
  await waitFor(element(by.id(ids.ACTIVATE_POWER_UP_BUTTON(false))))
    .toBeVisible()
    .withTimeout(timeout);
};
