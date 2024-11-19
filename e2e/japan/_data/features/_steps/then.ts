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
  enrolmentEndsIn
} = navigation.common;

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } = navigation.scrolling;
