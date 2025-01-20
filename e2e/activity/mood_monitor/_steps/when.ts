import { navigation } from "@navigation";
import { screens }from "@appScreens"

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  dismissNotificationScreenIfVisible,
  tapIDAtIndex,
  tapTextAtIndex,
  tryTapIdMultipleIndexes,
  typeViaID,
  clearFieldByID,
  navigateViaText
} = navigation.common;

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
  scrollFromID,
  selectActivityMonth
} = navigation.scrolling

export const {
  completeMoodMonitor
} = screens.challenges

export const {
  tapMenuItem
} = screens.menu
