import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { getTranslation, replaceName, splitPlural } from "_utils/translations/getTranslations";
const locale = process.env.TARGET_LOCALE || "en-GB";
const translation = getTranslation(locale);
import { CUSTOMER_1 } from "../../_data";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES } from "../_resources/constants";
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
} = navigation.common;

export const {
  challengeNudgeVisible,
  hqNudgeVisible,
  completedHQNudgeVisible,
  maximiseYucoinVisible,
  yuScreenV5HeaderVisible,
} = screens.yuscreen;

export const { scrollUntilTextVisible } = navigation.scrolling;

export const giftingModalVisible = (name: string) => async () => {
  await idVisible(ids.P2P_GIFTING_CARD)();
  await textVisible(translation.screens.gifting.send_prompt.title)();
  const descriptionTemplate = translation.screens.gifting.send_prompt.description;
  const newDescription = replaceName(descriptionTemplate, name);
  await textVisible(newDescription)();
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
    await textVisible(text)();
  }
};

export const cycleThroughGiftMessages = async () => {
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.great_work_today"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.you_nailed_it"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.certified_legend"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.smashing_it"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.you_got_this"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.have_a_nice_day"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.good_morning"))();
  await scrollFromID(
    ids.P2P_MESSAGE("game.gifting.message_preset.have_a_nice_day"),
    "up",
    "fast",
    0.2
  )();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.heres_a_huge_thank_you"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.you_awesome_me_grateful"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.youre_the_best"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.happy_birthday"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.congratulations"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.high_five"))();
  await scrollFromID(
    ids.P2P_MESSAGE("game.gifting.message_preset.congratulations"),
    "up",
    "fast",
    0.2
  )();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.heres_a_little_sparkle_to_your_day"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.sending_you_energy"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.youre_the_goat"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.boo_yah"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.slay"))();
};

export const cycleThroughStickers = async () => {
  await tapID(ids.P2P_STICKER_ITEMS("gift"))();
  await tapID(ids.P2P_STICKER_ITEMS("gift-2"))();
  await tapID(ids.P2P_STICKER_ITEMS("gift-3"))();
  await tapID(ids.P2P_STICKER_ITEMS("gift-4"))();
  await tapID(ids.P2P_STICKER_ITEMS("gift-5"))();
  await tapID(ids.P2P_STICKER_ITEMS("trophy"))();
  await scrollFromID(ids.P2P_STICKER_ITEMS("gift-5"), "up", "fast", 0.14)();
  await tapID(ids.P2P_STICKER_ITEMS("heart"))();
  await tapID(ids.P2P_STICKER_ITEMS("cake"))();
  await tapID(ids.P2P_STICKER_ITEMS("earthy"))();
  await tapID(ids.P2P_STICKER_ITEMS("arch"))();
  await tapID(ids.P2P_STICKER_ITEMS("surge"))();
  await tapID(ids.P2P_STICKER_ITEMS("letter"))();
  await scrollFromID(ids.P2P_STICKER_ITEMS("surge"), "up", "fast", 0.14)();
  await tapID(ids.P2P_STICKER_ITEMS("deez-nuts"))();
  await tapID(ids.P2P_STICKER_ITEMS("squirrel"))();
  await tapID(ids.P2P_STICKER_ITEMS("rocket"))();
  await tapID(ids.P2P_STICKER_ITEMS("cookie"))();
  await tapID(ids.P2P_STICKER_ITEMS("snail"))();
  await tapID(ids.P2P_STICKER_ITEMS("shooting-star"))();
  await scrollFromID(ids.P2P_STICKER_ITEMS("snail"), "up", "fast", 0.14)();
  await tapID(ids.P2P_STICKER_ITEMS("rainbow"))();
  await tapID(ids.P2P_STICKER_ITEMS("lantern"))();
  await tapID(ids.P2P_STICKER_ITEMS("thumbs-up"))();
  await tapID(ids.P2P_STICKER_ITEMS("thug-yugi"))();
  await tapID(ids.P2P_STICKER_ITEMS("yugi-headphones"))();
  await tapID(ids.P2P_STICKER_ITEMS("fuji"))();
};
