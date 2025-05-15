import { navigation } from "@utils";
import { screens } from "@appScreens";
import { readEmailContent } from "@yu-life/yulife-bdd-framework";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  typeViaPlaceholder,
  terminateApp,
} = navigation.common;

export const {
  tapRewardInList,
  tapDenomination,
  tapDenominationList,
  tapBuyButton,
  tapPurchasedReward,
} = screens.rewards;

export const followEmailLink = (emailAddress: string) => async () => {
  const email = await readEmailContent(emailAddress, true);
  const link = email.html
    .split("\n")
    .join("")
    .match(
      /http:\/\/localhost:5000\/redirect\?link=yulifeapp-detox:\/\/yulife\/signup\/confirm\?email=[^&]+&otp=[^&]+&redirectUrl=[^&]+&region=UK/gi
    )?.[0];

  if (!link) {
    throw new Error(`Link not found in the email`);
  }

  const [_, deeplink] = link.split("?link=");

  await device.launchApp({
    newInstance: true,
    url: deeplink,
  });
};
