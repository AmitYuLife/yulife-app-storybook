export { authoriseFitkit, sendSteps } from "@socket";
import { screens } from "@appScreens";
import { launchApp, navigation } from "@utils";
import * as ids from "@ids";
import { IMPACT_DONATION, StripeCardDetails } from "../_resources/types";
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

  let morePopups = true;

  while (morePopups) {
    try {
      await waitFor(gotItButton).toBeVisible().withTimeout(2000);
      await gotItButton.tap();

      await new Promise((res) => setTimeout(res, 500));
    } catch {
      morePopups = false;
    }
  }
};

export const completeStripePayment = (card: StripeCardDetails, amount: string) => async () => {
  const fieldMappings: [string, string][] = [
    ["Card number", card.cardNumber],
    ["expiration date", card.expiry],
    ["CVC", card.cvc],
    ["Postal code", card.postalCode],
  ];

  for (const [label, value] of fieldMappings) {
    await element(by.label(label)).atIndex(0).typeText(value);
  }

  await element(by.label("Or pay with a card")).atIndex(0).tap();

  const payButton = element(by.label(`Pay £${amount}`)).atIndex(0);
  await waitFor(payButton).toBeVisible().withTimeout(5000);

  await payButton.tap();
};
