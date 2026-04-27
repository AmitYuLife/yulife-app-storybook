import { screens } from "@appScreens";
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps } from "@socket";
import { sendSteps, addSampleQueries, sendMindfulnessData } from "@socket";
import { getLocalisedString as t } from "@i18n";
import * as ids from "@ids";
import moment from "moment";

export const {
  tapText,
  tapID,
  reloadAppToTab,
  navigateViaText,
  wait,
  booleanTextVisible,
  tapIDAtPoint,
  navigateViaID,
  textVisible,
} = navigation.common;

export const { startChallenge, startChallengeFromQuests } = screens.challenges;

export const { scrollFromID, swipeFromText } = navigation.scrolling;

export const { goToYuScreenAndDismissIntro, startYumojiBuilder } = screens.yuscreen;

export const completeNewWorldShortStroll = (levelNumber: number) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))();
  await textVisible("Almost there! Take a challenge to unlock your reward.")();
  await navigateViaText("Let's do it", 2000);
  await startChallenge("Short Stroll")();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text("Continue")))
    .toBeVisible()
    .withTimeout(5000);
  await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
  await navigateViaText("Open the chest", 3000);
  await navigateViaText("Continue", 3000);
  await navigateViaText("Done", 3000);
};

export const completYuniversWorldShortStroll = async () => {
  await startChallenge("Short Stroll")();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text("Continue")))
    .toBeVisible()
    .withTimeout(5000);
  await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
  await waitFor(element(by.text("Done")))
    .toBeVisible()
    .withTimeout(5000);
  await navigateViaText("Done");
};

export const tapExploreYuniverse = async () => {
  await tapText("Explore the Yuniverse", 2000);
};

export const completeChallenge = (levelNumber: number, challengeType: string) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))();
  await startChallenge(challengeType)();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text("Continue")))
    .toBeVisible()
    .withTimeout(5000);
  await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
  await navigateViaText("Done");
};

export const completeSecondChallenge = (levelNumber: number, challengeType: string) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))();
  await startChallenge(challengeType)();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text("Continue")))
    .toBeVisible()
    .withTimeout(5000);
  await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
};

export const selectAndCompleteWalkingChallenge =
  (challengeType: string, steps: number) => async () => {
    await startChallenge(challengeType)();
    await sendSteps(steps, 35000)();
    await waitFor(element(by.text("Continue")))
      .toBeVisible()
      .withTimeout(5000);
    await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
  };

export const tapYuniverseLevelForFirstTime = (x: number, y: number) => async () => {
  await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(1))).tap({ x: x, y: y });
};

export const tapYuniverseLevelAfterFirstTime = (x: number, y: number) => async () => {
  await element(by.id(ids.QUESTS_SCREEN_YUNIVERSAL(2))).tap({ x: x, y: y });
};

export const selectAndCompleteMeditationChallengeWithMedia =
  (mindfulnessdata: number) => async () => {
    await navigateViaID(ids.CHALLENGE_TILE("Meditation"))();
    await navigateViaText("Take challenge");
    await swipeFromText("Or use an app", "up", "slow")();
    await tapText("Use a different app")();
    await sendMindfulnessData(mindfulnessdata, 75000)();
    await waitFor(element(by.text("Continue")))
      .toBeVisible()
      .withTimeout(5000);
    await tapID(ids.CHALLENGE_SUCCESS_CTA, 3000)();
  };
