import { navigation } from "@navigation";
import { screens } from "@appScreens"
import moment from "moment";
export { authoriseFitkit, sendSteps } from "@socket";
import * as ids from "@ids"
import { expect } from 'detox'

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
  scrollFromText
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

export const tapYuniverseLevelForFirstTime = (x: number, y: number) => async () => {
  await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(1))).tap({x:x, y:y});
}

export const setStoreRegion = async () => {
  await tapID(ids.NAV_BAR("rewards"))()
  await tapText("Confirm selection", 2000)()
  await tapID(ids.NAV_BAR("yu"), 2000)()
}

export const navigateYunityForestJourneyCorrect = async () => {
  await wait(5000)()
  await navigateViaText("Continue")
  await navigateViaText("Open the chest")
  await navigateViaText("Claim rewards")
}