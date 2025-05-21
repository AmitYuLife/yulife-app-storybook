import { screens } from "@appScreens";
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps, fitKitAddSampleQueries, sendMindfulnessData } from "@socket";

export const {
  tapText,
  tapID,
  reloadAppToTab,
  navigateViaText,
  wait,
  minimiseAndReopenApp,
  reloadOnly,
} = navigation.common;

export const { dismissStreakIfVisible } = navigation.login;

export const {
  startChallenge,
  startChallengeFromQuests,
  selectMeditopiaChallengeFromQuests,
  completeMeditopiaContentSession,
  pauseMeditopiaChallenge,
  playAndFinishMeditopiaChallenge,
  quitMeditopiaChallenge,
  closeQuitChallengeScreen,
  exitMeditopiaChallenge,
  startAndQuitMeditopiaChallenge,
  startMeditopiaChallenge,
  clickScrubber,
  tapMeditopiaContentCard,
  tapTakeChallenge,
  tapStartSession,
} = screens.challenges;

export const {
  scrollFromID,
  scrollUntilIdVisible,
  scrollUntilTextVisible,
  scrollFromText,
  swipeFromText,
  swipeFromIDAtIndex,
} = navigation.scrolling;

export const waitTenSeconds = async () => {
  await wait(10000)();
};
