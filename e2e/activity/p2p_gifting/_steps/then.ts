import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { getTranslation, replaceName, splitPlural } from "_utils/translations/getTranslations";
const locale = process.env.TARGET_LOCALE || "en-GB";
const translation = getTranslation(locale);
import { CUSTOMER_1 } from "../../_data";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES, P2P_GIFTING_STICKERS } from "../_resources/constants";
import { scrollFromID } from "./when";
export { searchReferralVisible } from "../../leaderboard/_steps/then";
export { leaderboardVisible, isOnInspectScreen } from "../../leaderboard/_steps/then";

export const {
  idVisible,
  textVisible,
  idNotVisible,
  textNotVisible,
  multipleTextVisible,
  textVisibleAtIndex,
  idExist,
  tapID,
  inputHasValue,
  idVisibleAtIndex,
} = navigation.common;

export const {
  challengeNudgeVisible,
  hqNudgeVisible,
  maximiseYucoinVisible,
  yuScreenV5HeaderVisible,
} = screens.yuscreen;

export const { scrollUntilTextVisible } = navigation.scrolling;

export const giftingModalVisible = (name: string) => async () => {
  await idVisible(ids.P2P_GIFTING_CARD, 3000)();
  await textVisible(translation.screens.gifting.send_prompt.title)();
  const descriptionTemplate = translation.screens.gifting.send_prompt.description;
  const newDescription = replaceName(descriptionTemplate, name);
  await textVisible(newDescription, 3000)();
};

export const giftingSelectionScreenVisible = (selectUsers: typeof CUSTOMER_1[]) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.select_target.description;
  const newDescription = splitPlural(descriptionTemplate, 5);

  await textVisible(translation.screens.gifting.top_bar.select_target.heading, 2000)();
  await textVisible(newDescription)();
  await idVisible(ids.INPUT_FIELD)();
  await selectedUsersVisible(selectUsers)();
};

export const selectedUsersVisible = (users: typeof CUSTOMER_1[]) => async () => {
  await idVisible(ids.P2P_SELECTED_SECTION(users.length))();
  users.forEach((user) => async () => {
    await idVisible(ids.P2P_SELECTED_USER(user.data.firstName))();
  });
};

export const messageSelectionScreenVisible = (users: number) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.select_message.description;
  const newDescription = splitPlural(descriptionTemplate, users);
  await textVisible(translation.screens.gifting.top_bar.select_message.heading)();
  await textVisible(newDescription)();
  P2P_MESSAGES.forEach((message) => async () => {
    await idVisible(ids.P2P_MESSAGE(message))();
  });
};

export const giftingAmountScreenVisible = (users: number, totalYuCoin: number) => async () => {
  const descriptionTemplate = translation.screens.gifting.top_bar.set_coins.description;
  const newDescription = splitPlural(descriptionTemplate, users);
  await textVisible(translation.screens.gifting.top_bar.set_coins.heading)();
  await textVisible(newDescription)();
  await correctGiftingAmountsVisible(users, totalYuCoin)();
};

export const correctGiftingAmountsVisible = (users: number, totalYuCoin: number) => async () => {
  for (const amount of P2P_GIFTING_AMOUNTS) {
    const message = `${amount} YuCoin`;

    if (amount * users <= totalYuCoin) {
      await idVisible(ids.P2P_GIFTING_AMOUNT(message))();
    } else {
      await idNotVisible(ids.P2P_GIFTING_AMOUNT(message))();
    }
  }

  await idVisible(ids.P2P_GIFTING_AMOUNT(translation.screens.gifting.no_yu_coin))();
};

export const onGiftingPreviewScreen = (message: string, amount: number) => async () => {
  await textVisible(translation.screens.gifting.top_bar.message_preview.heading)();
  await idExist(ids.P2P_MESSAGE(message))();
  await textVisible(translation.screens.gifting.change_background)();
  await textVisible(`+${amount.toString()}`)();
};

export const onGiftingSuccessScreen = (recipients: number) => async () => {
  const { description, title } = translation.screens.gifting.success;

  const newTexts = [description, title].map((text) => splitPlural(text, recipients));

  for (const text of newTexts) {
    await textVisible(text, 4000)();
  }
};

export const cycleThroughGiftMessages = async () => {
  for (let i = 0; i < P2P_MESSAGES.length; i++) {
    const messageId = P2P_MESSAGES[i];
    const testID = ids.P2P_MESSAGE(messageId);
    await tapID(testID)();
    if ((i + 1) % 6 === 0 && i !== P2P_MESSAGES.length - 1) {
      await scrollFromID(testID, "up", "fast", 0.2)();
    }
  }
};

export const cycleThroughStickers = async () => {
  const VISIBLE_PER_SCROLL = 9;

  for (let i = 0; i < P2P_GIFTING_STICKERS.length; i++) {
    const id = P2P_GIFTING_STICKERS[i];
    const testID = ids.P2P_STICKER_ITEMS(id);
    await idVisible(testID, 2000)();

    const isLastSticker = i === P2P_GIFTING_STICKERS.length - 1;

    if (!isLastSticker && (i + 1) % VISIBLE_PER_SCROLL === 0) {
      const scrollAnchorID = ids.P2P_STICKER_ITEMS(P2P_GIFTING_STICKERS[i]);
      await scrollFromID(scrollAnchorID, "up", "fast", 0.14, 1500)();
    }
  }
};
