import * as ids from "@ids";
import { expect } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
export {
  canSeeEngagementSurveyAgreeCheckBoxes,
  canSeeEngagementSurvey1To10CheckBoxes,
  canSeeEngagementSurveySupportedByCheckBoxes,
} from "../../activity/FWQ/_steps/then";

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
} = navigation.common;

export const { yuScreenV5HeaderVisible } = screens.yuscreen;

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } =
  navigation.scrolling;

export { smokingTileVisible, smokingCardVisible, onSmokingHub } from "../../health/_steps/then";

export const wellbeingServiceVisible = async () => {
  const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"];

  for (const i of titles) {
    await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")();
    await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible();
  }
};
