import { navigation } from "@utils";
import * as ids from "@ids";
import { getFullName } from "_utils/users";
import * as data from "../_data/index";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { screens } from "@appScreens";
import { P2P_MESSAGES_JP } from "../_resources/constants";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
  scrollUntilTextVisibleAtIndex,
  scrollUntilIdVisibleAtIndex,
  scrollYuScreenDown,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  wait,
  tapIDAtPoint,
  tapIDAtIndex,
  textNotVisible,
  tapTextAtIndex,
  minimiseAndReopenApp,
} = navigation.common;

export const goToWellbeingHub = async () => {
  await tapID(ids.MENU_ICON, 4000)();
  await tapID(ids.MENU_ITEM("Well-beingセンター"), 4000)();
};

export const { triggerSearchTokens } = screens.leaderboard;

const selectRecipient = async (recipientName: string, waitTime = 4000) => {
  await tapID(ids.HERO_CARD_SECTION, waitTime)();
  await tapID(ids.CTA_GET_STARTED, waitTime)();
  await replaceTextViaID(ids.INPUT_FIELD, recipientName)();
  await tapID(
    ids.LEADERBOARD_NAME(recipientName, undefined, undefined, "search"),
    10000,
  )();
};

const composeAndSendGift = async (waitTime = 4000) => {
  await tapID(ids.P2P_NEXT_BUTTON, waitTime)();
  await tapID(ids.P2P_MESSAGE(P2P_MESSAGES_JP[0]), waitTime)();
  await tapID(ids.P2P_NEXT_BUTTON, waitTime)();
  await tapID(ids.P2P_GIFTING_AMOUNT("10 YuCoin"), waitTime)();
  await tapID(ids.P2P_NEXT_BUTTON, waitTime)();
  await tapID(ids.P2P_STICKER, waitTime)();
  await tapID(ids.P2P_STICKER_ITEMS("gift"), waitTime)();
  await tapID(ids.P2P_SEND_BUTTON, waitTime)();
  await tapID(ids.CTA_GOT_IT, waitTime)();
};

export const sendGiftUserFlow = (giftRecipient: IDatabaseItem) => async () => {
  await selectRecipient(getFullName(giftRecipient, "JP"));
  await composeAndSendGift();
};

export const completeSendGiftUserFlow =
  (giftRecipient: IDatabaseItem, timesSent: number = 1) =>
  async () => {
    for (let i = 0; i < timesSent; i++) {
      await sendGiftUserFlow(giftRecipient)();
    }
  };

export const triggerGiftReceivedNotification =
  (customer: IDatabaseItem, gift: IDatabaseItem) => async () => {
    await dataManager.triggerEvent("gift_sent_to_users", {
      fromUserId: customer.data.customerId,
      transactionId: gift.data._id,
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

export const triggerThanksForGiftNotification =
  (customer: IDatabaseItem, gift: IDatabaseItem) => async () => {
    await dataManager.triggerEvent("gift_thanked", {
      fromUserId: customer.data.customerId,
      giftId: gift.data._id,
      giftSenderUserId: gift.data.fromUserId,
      giftReceiverUserId: gift.data.toUserId,
    });
  };
