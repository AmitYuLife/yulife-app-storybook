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

export const { skipHealthConnection } = navigation.login;

export { tapLetsGo } from "../../login_and_routing/_steps/when";

export const followEmailLink = (emailAddress: string) => async () => {
  const email = await readEmailContent(emailAddress, true);
  const link = email.html
    .split("\n")
    .join("")
    .match(/http:\/\/localhost:5000\/redirect(.*)/gi)?.[0];

  if (!link) {
    throw new Error(`Link not found in the email`);
  }

  const parsedUrl = new URL(link);

  let deeplink: string | null = null;

  if (parsedUrl.searchParams.has("link")) {
    // old style link with the deeplink straight inside
    deeplink = parsedUrl.searchParams.get("link");
  } else if (parsedUrl.searchParams.has("appDeeplink")) {
    // this is a deeplink base64 encoded
    // as we can't open the URL (to the smart redirect page), we just decode and use it directly with the app
    deeplink = Buffer.from(parsedUrl.searchParams.get("appDeeplink"), "base64").toString("utf-8");
  }

  if (!deeplink) {
    throw new Error(`Deeplink not found in the email`);
  }

  await device.launchApp({
    newInstance: true,
    url: deeplink,
  });
};
