import { screens } from "@appScreens";
import { navigation } from "@utils";

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

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } = navigation.scrolling;

export { smokingTileVisible, smokingCardVisible, onSmokingHub } from "../../health/_steps/then"
