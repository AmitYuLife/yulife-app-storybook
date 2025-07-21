import { navigation } from "@navigation";
import * as ids from "@ids";
export {
  addStepsHistoricalData,
  addCyclingHistoricalData,
  addMindfulnessHistoricalData,
  sendSteps,
} from "@socket";
import { screens } from "@appScreens";
import { CUSTOMER_18 } from "activity/_data";

export const {
  tapID,
  tapText,
  replaceTextByID,
  restartWithData,
  navigateViaText,
  wait,
  navigateViaID,
  tapIDAtIndex,
  clearFieldByID,
  typeViaID,
  testMultipleIndexesVisibility,
} = navigation.common;

export const { loginAsUser, continueLogin, continueLoginAfterSignupBonus } = navigation.login;

export const {
  scrollFromID,
  scrollUntilIdVisible,
  swipeFromText,
  swipeFromIDAtIndex,
  scrollUntilTextVisible,
  swipeToID,
} = navigation.scrolling;

export const { tapMenuItem } = screens.menu;

export const { searchLeaderboard, switchLeaderboard, triggerSearchTokens } = screens.leaderboard;

export { pressGiftingGotIt } from "../../p2p_gifting/_steps/when";

export const tapBirthdayNotification = (user: typeof CUSTOMER_18) => async () => {
  const firstName = user.data.firstName;
  const lastNameInitial = user.data.lastName.charAt(0);
  await tapID(
    ids.NOTIFICATION_PINK_DOT_ARROW(`It’s ${firstName} ${lastNameInitial}’s birthday!`, true, true)
  )();
};
