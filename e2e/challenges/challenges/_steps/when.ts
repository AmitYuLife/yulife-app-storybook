import { screens } from "@appScreens";
import { navigation } from "@utils";
import * as ids from "@ids";
import { sendSteps } from "@socket";
import { getLocalisedString as t } from "@i18n";
export {
  authoriseFitkit,
  sendSteps,
  sendMindfulnessData,
  closeAndReopenApp,
  quitAndReopenApp,
} from "@socket";

export const {
  tapText,
  tapID,
  tapIDAtIndex,
  reloadAppToTab,
  tapYuCoinIcon,
  navigateViaText,
  wait,
  dismissNotificationScreenIfVisible,
  navigateViaID,
  minimiseAndReopenApp,
  navigateTo,
  relaunchAppWithoutSync,
} = navigation.common;

export const { dismissStreakIfVisible, restartAndLoginToTab, fullRestartAndLogin } =
  navigation.login;

export const { startChallenge, startMeditationChallengeFromQuests } = screens.challenges;

export const tapChallenge = (challenge: string) => async () => {
  await tapText(challenge)();
};

export const {
  scrollFromID,
  scrollUntilIdVisible,
  scrollUntilTextVisible,
  scrollFromText,
  swipeFromText,
  swipeFromIDAtIndex,
  scrollWithLimitedAttemptsUntilIdVisible,
} = navigation.scrolling;

export const { goToYuScreenAndDismissIntro, goToYuScreenAndDismissPower } = screens.yuscreen;

export const completeChallenge = (levelNumber: number, challengeType: string) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber));
  await startChallenge(challengeType)();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text("Collect")))
    .toBeVisible()
    .withTimeout(5000);
};

export const completeSecondChallenge = (levelNumber: number, challengeType: string) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber));
  await startChallenge(challengeType)();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text(t("Collect"))))
    .toBeVisible()
    .withTimeout(5000);
  await navigateViaText(t("Collect"));
};
