import { navigation } from "@navigation";
import { screens } from "@appScreens";

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible
} = navigation.scrolling

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex,
  testMultipleIndexesVisibility,
  objCopyVisible
} = navigation.common;

export const {
  onChallengeComplete,
} = screens.challenges