export { authoriseFitkit, sendSteps } from "@socket";
import { screens } from "@appScreens";
import { launchApp, navigation } from "@utils";
import * as ids from "@ids";
import { IMPACT_DONATION } from "../_resources/types";

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
