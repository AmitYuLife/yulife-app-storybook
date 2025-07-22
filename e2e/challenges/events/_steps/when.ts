import { screens } from "@appScreens";
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps, addStepsHistoricalData } from "@socket";
import { sendSteps, sendMindfulnessData, sendReduxEvent } from "@socket";
import * as ids from "@ids";

export const { tapText, tapID, reloadAppToTab, navigateViaText, wait, navigateViaID } =
  navigation.common;

export const { dismissStreakIfVisible } = navigation.login;

export const { startChallenge } = screens.challenges;

export const tapChallenge = (challenge: string) => async () => {
  await tapText(challenge)();
};

export const {
  scrollFromID,
  scrollUntilIdVisible,
  scrollUntilTextVisible,
  scrollFromText,
  swipeFromText,
} = navigation.scrolling;

export const { tapMenuItem } = screens.menu;

export const selectAndCompleteWalkingChallenge =
  (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)();
    await sendSteps(steps, 45000)();
  };

export const selectAndCompleteMeditationChallenge = (mindfulnessdata: number) => async () => {
  await navigateViaID(ids.CHALLENGE_TILE("Meditation"));
  await navigateViaText("Take challenge");

  await waitFor(element(by.text("Use a different app")))
    .toBeVisible()
    .whileElement(by.text("Or use an app"))
    .scroll(1000, "down");

  await tapText("Use a different app", 1500)();
  await sendMindfulnessData(mindfulnessdata, 75000)();
  await waitFor(element(by.text("Collect")))
    .toBeVisible()
    .withTimeout(7000);
  await navigateViaText("Collect");
  await triggerAppUpdateState();
};

export const triggerAppUpdateState = async (): Promise<void> => {
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
};

export const completeYuniversalAndClaim = (level: number) => async () => {
  await tapID(ids.NAV_BAR("quests"))();
  await tapID(ids.LEVEL_CHALLENGE_BUTTON(level))();
  await tapText("Continue")();
  await tapText("Open the chest")();
  await tapText("Claim rewards")();
};
