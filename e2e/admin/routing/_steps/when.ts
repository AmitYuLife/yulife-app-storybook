import { launchApp, navigation } from "@navigation";
import { screens } from "@appScreens";

export const {
  tapID,
  tapText,
  tapIDAtPoint,
  wait,
  tapIDAtIndex,
  dismissNotificationScreenIfVisible,
  terminateApp,
  minimiseApp,
  typeViaID,
  typeViaIDAtIndex,
  tapIDWithOffset,
} = navigation.common;

export const { tapMenuItem } = screens.menu;

export const { tapRewardInList } = screens.rewards;

export const { scrollFromText, scrollFromID, scrollUntilTextVisible, swipeFromText } =
  navigation.scrolling;

export const goToQuestsScreen = async () => {
  await launchApp({ url: "yulifeapp-detox://yulife/quests" });
};

export const goToleaderboardScreen = async () => {
  await launchApp({ url: "yulifeapp-detox://yulife/leaderboard" });
};
