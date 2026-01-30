import { navigation } from "@navigation";
import * as ids from "@ids";
export {
  addStepsHistoricalData,
  addCyclingHistoricalData,
  addMindfulnessHistoricalData,
  sendSteps,
} from "@socket";
export { donate, dismissRewardPopUp } from "../../../battle_pass/battle_pass/_steps/when";
import { getLocalisedString as t } from "@i18n";
import { CUSTOMER_1 } from "../../_data";
import { SocialGroupLeaderboard, UserLeaderboardListItem } from "../_resources/types";
import { screens } from "@appScreens";
import { leaderboardConsentCta, leaderboardConsentHeading } from "../_resources/constants";

export const {
  tapID,
  tapText,
  replaceTextByID,
  start,
  navigateViaText,
  wait,
  navigateViaID,
  tapIDAtIndex,
  clearFieldByID,
  typeViaID,
  testMultipleIndexesVisibility,
} = navigation.common;

export const { loginAsUser, continueLogin, continueLoginAfterSignupBonus, fullRestartAndLogin } =
  navigation.login;

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

export const turnOffLeaderboard = (leaderboardID: string) => async () => {
  const leaderboard = element(by.id(leaderboardID));
  const offButton = element(by.text(t("Turn it off")));

  await leaderboard.tap();
  await offButton.tap();
};

export const clickUser = (user: typeof CUSTOMER_1) => async () => {
  if (device.name.includes("(iPhone SE (3rd generation))")) {
    await swipeFromText("Steps", "up", "slow")();
  }
  await tapText(`${user.data.firstName} ${user.data.lastName}`)();
};

export const wait3secs = async () => {
  await wait(3000)();
};

export const tapTab =
  (tabName: string, shouldSwipe = false, direction?: Detox.Direction, swipeName?: string) =>
  async () => {
    if (shouldSwipe) {
      let x = tabName;
      if (swipeName) x = swipeName;
      await swipeToID(ids.CATEGORY_TYPE(x), ids.YUMOJI_PART_ID(tabName), direction, 1)();
    }
    const tab = element(by.id(ids.CATEGORY_TYPE(tabName)));
    await tab.tap();
  };

export const tapItem = (partID: string) => async () => {
  await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.YUMOJI_PART_ID(partID), "down")();
  const item = element(by.id(ids.YUMOJI_PART_ID(partID)));
  await item.tap();
};

export const tapColour =
  (hexValue: string, waitTime = 2000) =>
  async () => {
    await wait(waitTime)();
    await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.COLOUR(hexValue), "down")();
    await tapID(ids.COLOUR(hexValue))();
  };

export const clickNext = async () => {
  await navigateViaText("Next");
};

export const clickLetsGo = async () => {
  await wait(1500)();
  await tapText("Let's go")();
};

export const tapLeaderboardConsentSwitch =
  (leaderboard: SocialGroupLeaderboard, consent: boolean) => async () => {
    await tapID(ids.LEADERBOARD_SWITCH(leaderboard.type, consent))();
  };

export const tapLeaderboardUser = (user: UserLeaderboardListItem) => async () => {
  const type = user.type ? user.type : "leaderboard";

  if (device.name.includes("(iPhone SE (3rd generation))")) {
    await swipeFromText("Steps", "up", "slow")();
  }
  await tapIDAtIndex(ids.LEADERBOARD_NAME(user.name, user.score, user.rank, type), 0)();
};

export const tapHighlightedLeaderboardUser =
  (user: UserLeaderboardListItem, waitTime = 1500) =>
  async () => {
    await wait(1500)();
    if (device.name.includes("(iPhone SE (3rd generation))")) {
      await swipeFromText("Steps", "up", "slow")();
    }
    await tapID(
      ids.HIGHLIGHTED_LEADERBOARD_NAME(user.name, user.score, user.rank, user.highlightColour),
      1500
    )();
  };

export const tapJoinLeaderboard = async () => {
  if (device.name.includes("(iPhone SE (3rd generation))")) {
    await swipeFromText(leaderboardConsentHeading, "up", "fast")();
  }
  await tapText(leaderboardConsentCta)();
};
