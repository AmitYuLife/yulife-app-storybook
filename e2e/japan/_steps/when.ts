import { navigation } from "@utils";
import * as ids from "@ids";
import { getFullName } from "_utils/users";
import * as data from "../_data/index";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { screens } from "@appScreens";
export { cycleThroughEngagementSurveyAgreeCheckBoxes } from "../../activity/FWQ/_steps/when";

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
  await tapID(ids.MENU_ICON, 2000)();
  await tapID(ids.MENU_ITEM("Well-beingセンター"), 2000)();
};

export const { triggerSearchTokens } = screens.leaderboard;

export const fillOutEngagementSurvey = async () => {
  await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
  await tapID(ids.BUTTON_BASE("始める"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
  await tapID("RADIO_ITEM_SELECTED_strongly_agree_false")();
  await tapID(ids.BUTTON_BASE("次のページ"))();
};

export const sendGiftUserFlow = (giftRecipient: IDatabaseItem) => async () => {
  await tapID(ids.HERO_CARD_SECTION)();
  await tapID(ids.CTA_GET_STARTED)();
  await typeViaID(ids.INPUT_FIELD, getFullName(giftRecipient, "JP"))();
  await tapID(
    ids.LEADERBOARD_NAME(getFullName(giftRecipient, "JP"), undefined, undefined, "search")
  )();
  await tapID(
    ids.LEADERBOARD_NAME(getFullName(giftRecipient, "JP"), undefined, undefined, "search")
  )();
  await tapID(ids.P2P_NEXT_BUTTON, 2000)();
  await tapID(
    ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.this_is_just_a_token_of_my_gratitude"),
    2000
  )();
  await tapID(ids.P2P_NEXT_BUTTON, 2000)();
  await tapID(ids.P2P_GIFTING_AMOUNT("10 YuCoin"), 2000)();
  await tapID(ids.P2P_NEXT_BUTTON, 2000)();
  await tapID(ids.P2P_STICKER, 2000)();
  await tapID(ids.P2P_STICKER_ITEMS("gift"), 2000)();
  await tapID(ids.CTA_SELECT, 2000)();
  await tapID(ids.P2P_SEND_BUTTON, 2000)();
  await tapID(ids.CTA_GOT_IT, 2000)();
};

export const completeSendGiftUserFlow =
  (giftRecipient: IDatabaseItem, timesSent: number = 1) =>
  async () => {
    for (let i = 0; i < timesSent; i++) {
      await sendGiftUserFlow(giftRecipient)();
    }
  };
