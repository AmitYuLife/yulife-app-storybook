import { launchApp, navigation } from "@utils";
import { screens } from "@appScreens";
import { dataManager, IDatabaseItem, readEmailContent } from "@yu-life/yulife-bdd-framework";
import { INPUT_SHORT_CODE } from "@ids";

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
  wait,
  minimiseAndReopenApp,
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

  await launchApp({
    newInstance: true,
    url: deeplink,
  });
};

export const submitShortCodeFromEmail = (emailAddress: string) => async () => {
  const email = await readEmailContent(emailAddress, true);
  // The short code is rendered inside a <span> tag in the email HTML.
  const match = email.html.match(/<span[^>]*>([A-Z2-9]{6})<\/span>/);

  if (!match) {
    throw new Error("Short code not found in the email");
  }

  const shortCode = match[1];

  // The hidden TextInput is transparent so Detox won't consider it "visible".
  // Tap the visible container to focus, then type into the input directly.
  await element(by.id(INPUT_SHORT_CODE)).tap();
  const input = element(by.id(`${INPUT_SHORT_CODE}_INPUT`));
  await waitFor(input).toExist().withTimeout(3000);
  await input.typeText(shortCode);
};

export const triggerGiftReceivedEmail =
  (customer: IDatabaseItem, gift: IDatabaseItem) => async () => {
    await dataManager.triggerEvent("gift_sent_to_users", {
      fromUserId: customer.data.customerId,
      transactionId: gift.data._id,
      source: "business",
      gifts: [
        {
          senderId: gift.data.fromUserId,
          recipientId: gift.data.toUserId,
          id: gift.data._id,
          yuCoinAmount: gift.data.amount,
        },
      ],
    });
  };
