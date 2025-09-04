export { authoriseFitkit, sendSteps } from "@socket";
import { screens } from "@appScreens";
import { launchApp, navigation } from "@utils";
import * as ids from "@ids";
import { IMPACT_DONATION } from "../_resources/types";
import { expect } from "detox";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  tapIDAtIndex,
  minimiseApp,
  restartWithoutDelete,
  terminateApp,
} = navigation.common;

export const { closeQuitChallengeScreen, exitChallenge, startChallenge } = screens.challenges;

export const { goToYuScreenAndDismissIntro, startYumojiBuilder } = screens.yuscreen;

export const { scrollFromID, scrollUntilIdVisible } = navigation.scrolling;

export const donate =
  (type: IMPACT_DONATION, taps: number = 1) =>
  async () => {
    for (let i = 0; i < taps; i++) {
      await tapID(ids.DONATION_BUTTON(type), 2500)();
    }
  };

export const goToRewardStore = async () => {
  await launchApp({ url: "yulifeapp-detox://yulife/rewards" });
};

export const dismissRewardPopUp = async () => {
  const gotItButton = element(by.text("Got it"));

  try {
    await waitFor(gotItButton).toBeVisible().withTimeout(2000);

    let isVisible = true;

    while (isVisible) {
      await gotItButton.tap();
      await new Promise((res) => setTimeout(res, 500));
    }
    try {
      await expect(gotItButton).toBeVisible();
    } catch {
      isVisible = false;
    }
  } catch {
    throw new Error("Reward pop-up did not appear within timeout");
  }
};
