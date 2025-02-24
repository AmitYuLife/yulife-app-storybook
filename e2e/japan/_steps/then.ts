import * as ids from "@ids";
import { expect } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { scrollFromID } from "./when";
export {
  canSeeEngagementSurveyAgreeCheckBoxes,
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

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } =
  navigation.scrolling;

export const wellbeingServiceVisible = async () => {
  const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"];

  for (const i of titles) {
    await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")();
    await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible();
  }
};

export const cycleThroughGiftMessages = async () => {
  await tapID("P2P_MESSAGE_ありがとうございました！🙏")();
  await tapID("P2P_MESSAGE_お疲れ様でした！⭐️")();
  await tapID("P2P_MESSAGE_さすがです！❤️")();
  await tapID("P2P_MESSAGE_今日も頑張りましょう！💪")();
  await tapID("P2P_MESSAGE_お誕生日おめでとうございます！🎂")();
  await tapID("P2P_MESSAGE_おめでとうございます！🎉")();
  await tapID("P2P_MESSAGE_息抜きしてくださいね！⏰")();
  await scrollFromID(ids.P2P_MESSAGE("おめでとうございます！🎉"), "up", "fast", 0.2)();
  await tapID("P2P_MESSAGE_ほんの感謝の気持ちです！✨")();
  await tapID("P2P_MESSAGE_今日も頑張りましょう！👍")();
};
