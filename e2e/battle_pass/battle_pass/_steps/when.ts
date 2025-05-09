export { authoriseFitkit, sendSteps } from "@socket";
import { screens } from "@appScreens";
import { navigation } from "@utils";
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
} = navigation.common;

export const { closeQuitChallengeScreen, exitChallenge, startChallenge } = screens.challenges;

export const { goToYuScreenAndDismissIntro, startYumojiBuilder } = screens.yuscreen;

export const donate =
  (type: IMPACT_DONATION, taps: number = 1) =>
  async () => {
    for (let i = 0; i < taps; i++) {
      await tapID(ids.DONATION_BUTTON(type), 2500)();
    }
  };

export const goToDonationsScreen = async () => {
  await device.launchApp({ url: "yulifeapp-detox://yulife/rewards?tab=donations" });
};
