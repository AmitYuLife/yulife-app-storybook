import { navigation } from "@navigation";
import { screens } from "@appScreens"
export { authoriseFitkit, sendSteps } from "@socket";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  dismissNotificationScreenIfVisible,
  tapIDAtIndex,
  tapTextAtIndex
} = navigation.common;

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
} = navigation.scrolling

export const {
  tapRewardInList,
  tapDenomination,
  tapDenominationList,
  tapBuyButton,
  tapPurchasedReward,
} = screens.rewards

export const {
  startChallenge,
} = screens.challenges
