import { navigation } from "@utils";
import { screens } from "@appScreens";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { getTranslation } from "_utils/translations/getTranslations";

const locale = process.env.TARGET_LOCALE || "en-GB";
const translation = getTranslation(locale);

export { clickUser } from "../../leaderboard/_steps/when";

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  tapTextWithParentID,
  tryTapID,
  tryTapText,
  wait,
  clearFieldByID,
  restartWithData,
  restartWithoutDelete,
  idVisible,
  navigateViaText,
  navigateViaID,
  textVisible,
  slowType,
  tapTextAtIndex,
  booleanIdVisible,
  tapIDAtIndex,
  navigateTo,
  minimiseAndReopenApp,
} = navigation.common;

export const { loginOnly } = navigation.login;

export const { searchLeaderboard, switchLeaderboard, triggerSearchTokens } = screens.leaderboard;

export const pressGiftingGotIt = async () => {
  await tapText(translation.labels.cta.got_it, 2000)();
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
