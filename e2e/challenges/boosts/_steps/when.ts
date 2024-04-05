import { screens } from "@appScreens";
import { navigation } from "@utils";
export { authoriseFitkit } from "@socket";
import { sendSteps } from "@socket";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
} = navigation.common;

export const {
  closeQuitChallengeScreen,
  exitChallenge,
  startChallenge,
} = screens.challenges;

export const selectAndCompleteWalkingChallenge = (challengeType: string, steps: number) => async () => {
  await startChallenge(challengeType)()
  await sendSteps(steps, 40000)()
}

