import { screens } from "@appScreens";
import { navigation } from "@utils";
export { authoriseFitkit } from "@socket";
import { sendSteps } from "@socket";
import * as ids from "@ids";

export const { tapText, tapID, wait, navigateTo, tapYuCoinIcon, navigateViaID } = navigation.common;

export const { closeQuitChallengeScreen, exitChallenge, startChallenge } = screens.challenges;

export const { goToYuScreenAndDismissIntro, startYumojiBuilder } = screens.yuscreen;

export const { scrollFromID } = navigation.scrolling;

export const selectAndCompleteWalkingChallenge =
  (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)();
    await sendSteps(steps, 40000)();
  };

export const openInventoryModal =
  (waitTime = 3_000) =>
  async () => {
    await tapID(ids.INVENTORY_BANNER, waitTime)();
  };

export const tapInventoryItem =
  (itemName: string, waitTime = 3_000) =>
  async () => {
    await tapID(ids.INVENTORY_ITEM(itemName), waitTime)();
  };

export const closeInventoryModal =
  (waitTime = 3_000) =>
  async () => {
    await tapID(ids.CLOSE_INVENTORY, waitTime)();
  };

export const tapActivateButton =
  (waitTime = 3_000) =>
  async () => {
    await tapID(ids.ACTIVATE_POWER_UP_BUTTON(true), waitTime)();
  };
