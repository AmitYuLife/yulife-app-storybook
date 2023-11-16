import { navigation } from "@navigation";
import { screens } from "@appScreens"
import moment from "moment";
export { authoriseFitkit, sendSteps } from "@socket";
import * as ids from "@ids"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
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

export const chooseCorrectDoB = (age: number) => async () => {
  const format = "YYYY-MMMM-DD";
  const date = moment().subtract(age, "years").format(format);

  await navigateViaID(ids.DATE_INPUT);
  await expect(element(by.id(ids.DATE_PICKER))).toBeVisible();
  await element(by.id(ids.DATE_PICKER)).setDatePickerDate(date, format);

  await navigateViaText("Confirm");

};

export const enterRandomisedEmail = async () => {
  const emailFront = generateRandomMongoId()
  await typeViaID(ids.CONTENT_ITEM_INPUT("email"), `${emailFront.toString()}@fakeemail.com`)()
}

export const tapYuniverseLevelForFirstTime = (x: number, y: number) => async () => {
  await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(1))).tapAtPoint({x:x, y:y});
}