import { navigation } from "@navigation";
import { screens } from "@appScreens";
export { progressBarVisible } from "activity/FWQ/_steps/then";

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

export const {
  moodMonitorNudgeVisible,
  completedMoodMonitorNudgeVisible,
  maximiseYucoinVisible
} = screens.yuscreen