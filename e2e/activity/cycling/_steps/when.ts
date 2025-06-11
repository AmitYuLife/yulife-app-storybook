import { navigation } from "@navigation";
export { addCyclingData, addCycling3DaysHistoricalData, addCyclingHistoricalData } from "@socket";
import { screens } from "@appScreens";

export const { tapID, tapText, replaceTextByID, restartWithData, reloadAppToTab, wait } =
  navigation.common;

export const { loginAsUser, continueLogin, continueLoginAfterSignupBonus, loginOnly } =
  navigation.login;

export const { scrollFromID, swipeFromText } = navigation.scrolling;

export const { tapMenuItem } = screens.menu;

export const tapChallenge = (challenge: string, waitTime?: number) => async () => {
  await wait(waitTime)();
  await tapText(challenge)();
};
