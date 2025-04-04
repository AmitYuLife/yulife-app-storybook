import * as ids from "@ids";
import { expect } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { getTranslation } from "_utils/translations/getTranslations";
export {
  canSeeEngagementSurvey1To10CheckBoxes,
  canSeeEngagementSurveySupportedByCheckBoxes,
} from "../../activity/FWQ/_steps/then";
export { smokingTileVisible, smokingCardVisible, onSmokingHub } from "../../health/_steps/then";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  idVisibleAtIndex,
  textVisibleAtIndex,
  tapIDNotBeingVisible,
  enrolmentEndsIn,
  objCopyVisible,
  tapID,
} = navigation.common;

export const { yuScreenV5HeaderVisible } = screens.yuscreen;

export const {
  swipeToID,
  swipeFromText,
  scrollUntilIdVisible,
  scrollUntilTextVisible,
  scrollFromID,
} = navigation.scrolling;

export const wellbeingServiceVisible = async () => {
  const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"];

  for (const i of titles) {
    await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")();
    await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible();
  }
};

export const cycleThroughGiftMessages = async () => {
  await tapID(
    ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.this_is_just_a_token_of_my_gratitude")
  )();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.thank_you_as_always"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.youve_done_well"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.please_take_a_break"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.lets_do_our_best_today_too"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.keep_it_up"))();
  await tapID(ids.P2P_MESSAGE("game.gifting.message_preset.ja-JP.youve_helped_me_so_much"))();
};

export const canSeeEngagementSurveyAgreeCheckBoxesJp = async () => {
  await idVisible(ids.CHECK_BOX_STATE("とてもそう思う", false))();
  await idVisible(ids.CHECK_BOX_STATE("ややそう思う", false))();
  await idVisible(ids.CHECK_BOX_STATE("どちらともいえない", false))();
  await idVisible(ids.CHECK_BOX_STATE("あまりそう思わない", false))();
  await idVisible(ids.CHECK_BOX_STATE("まったくそう思わない", false))();
};
