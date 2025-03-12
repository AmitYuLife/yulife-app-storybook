import { navigation } from "@utils";
import { loginOnly } from "_utils/navigation/login";
import * as ids from "@ids";
export { authoriseFitkit, sendSteps, addStepsHistoricalData } from "@socket";
export { triggerSearchTokens } from "_utils/appScreens/leaderboard";

export const { scrollFromText, scrollFromID, swipeToText } = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  completeOnboardingIntro,
  reloadOnly,
  wait,
  navigateViaText,
  tapIDAtIndex,
  restartWithoutDelete,
} = navigation.common;

export const { restartAndLoginToTab, loginAndCollectSignupBonus, fullRestartAndLogin } =
  navigation.login;

export const tapTab = (tabName: string) => async () => {
  const tab = element(by.id(ids.BODY_ITEM_TITLE(tabName)));
  await tab.tap();
};

export const restartToDuelsRequest =
  (customer: any, auth: any, fitkitAuth = true, waitTime: number) =>
  async () => {
    await wait(waitTime)();
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true });
    await wait(waitTime)();
    await loginOnly(customer, auth, fitkitAuth)();
    await navigateViaText("Let's go");
  };

export const searchForDuelOpponent = (user: string) => async () => {
  await typeViaID("SEARCH_INPUT", user)();
};

export const acceptAndChangeLeaderboard =
  (socialGroupName: string, leaderboardSwitch?: string, leaderboardSwitchToggle?: boolean) =>
  async () => {
    await tapID(ids.NAV_BAR("leaderboard"))();
    await tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1)();
    await tapID(ids.COMMUNITY_LIST_ITEM(socialGroupName))();
    await tapText("View Leaderboard")();
    await tapText("Join the Leaderboard")();
    if (leaderboardSwitch) {
      await tapID(ids.LEADERBOARD_SWITCH(leaderboardSwitch, leaderboardSwitchToggle))();
    }
  };

export const completeDuelsIntro = async () => {
  await tapText("Next")();
  await tapText("Next")();
  await tapText("Let's go")();
};

export const challengeFriendToDuel = (firstName: string, lastName: string) => async () => {
  await tapID(ids.CHALLENGE_FRIEND_BUTTON)();
  await typeViaID("SEARCH_INPUT", firstName)();
  await tapText(`${firstName} ${lastName}`)();
  await tapText("Set the duel")();
  await tapText("Select a wager")();
  await tapText("25 YuCoin")();
  await tapText("Send duel request")();
  await tapText("Confirm")();
};

export const switchLeaderboard =
  (socialGroupName: string, leaderboardSwitch?: string, leaderboardSwitchToggle?: boolean) =>
  async () => {
    await tapIDAtIndex(ids.LEADERBOARD_DROPDOWN, 1)();
    await tapID(ids.COMMUNITY_LIST_ITEM(socialGroupName))();
    await tapText("View Leaderboard")();
    if (leaderboardSwitch) {
      await tapID(ids.LEADERBOARD_SWITCH(leaderboardSwitch, leaderboardSwitchToggle))();
    }
  };
