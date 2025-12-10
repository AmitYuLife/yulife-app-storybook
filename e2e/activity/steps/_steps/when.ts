import { navigation } from "@navigation";
export {
  sendSteps,
  addSteps3DaysHistoricalData,
  addStepsHistoricalData,
  addSteps20DaysHistoricalData,
  addCycling20DaysHistoricalData,
  addMins20DaysHistoricalData,
  addMindfulnessHistoricalData,
} from "@socket";
import { screens } from "@appScreens";
import moment from "moment";
import { ACTIVITY_HISTORY_MONTH } from "@ids";

export const {
  tapID,
  tapText,
  replaceTextByID,
  start,
  reloadAppToTab,
  minimiseAndReopenApp,
  wait,
} = navigation.common;

export const { loginAsUser, continueLogin, continueLoginAfterSignupBonus, loginToYuScreen } =
  navigation.login;

export const {
  scrollFromID,
  swipeFromText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeToText,
  swipeToID,
} = navigation.scrolling;

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
  const leaderboard = element(by.id(leaderboardID));
  const offButton = element(by.text("Turn it off"));

  await leaderboard.tap();
  await offButton.tap();
};

export const { tapMenuItem } = screens.menu;

export const tapPreviousMonth = () => async () => {
  const previousMonth = moment().subtract(1, "months").format("MMMM");
  await tapID(ACTIVITY_HISTORY_MONTH(previousMonth), 3_000)();
};
