import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import * as data from "../../_data";
import { buttonVisible } from "_utils/appScreens/challenges";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import { expect } from "detox";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const { menuItemsVisible } = screens.menu;

export const {
  idVisible,
  textVisible,
  textExists,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  textVisibleAtIndex,
  idVisibleAtIndex,
  idNotVisible,
  textNotVisible,
  multipleTextVisible,
} = navigation.common;

export const {} = screens.streaks;

export const { onChallengeComplete, stepsChallengeDataCorrect } = screens.challenges;

export const { scrollUntilTextVisible, swipeFromText } = navigation.scrolling;

export const isOnInivteColleaguePage = async () => {
  await expect(element(by.id(ids.REFERRALS_INVITE_BUTTON))).toBeVisible;
  await expect(element(by.text("Your referrals"))).toBeVisible();
};

export const eventCompletedVisible =
  (numberOfChallenges: number, progressWidth: number) => async () => {
    const description = `${numberOfChallenges} / 4 perfect challenge(s)`;
    const eventTimeframe = data.GOALS_4.data.title;

    await textVisible(eventTimeframe)();
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const yuCoinPageEventDataCorrect =
  (numberOfChallenges: number, progressWidth: number) => async () => {
    const description = `${numberOfChallenges} / 4 perfect challenge(s)`;
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const claimVisible = (numOfStars: number) => async () => {
  await textVisible("Claim")();
  await idVisible(ids.CLAIM_BUTTON)();
  await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
  await idVisible(ids.NUM_OF_STARS(numOfStars))();
};

export const onGreatJobCompletedEventPage = (event: string, yuCoin: string) => async () => {
  const eventTitle = `${event} event`;

  await textVisible(eventTitle)();
  await textExists("Great job!")();
  await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")();
  await textVisible(`${yuCoin} YuCoin`)();
  await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
  await buttonVisible("Claim")();
};

export const milestoneComplete = (index: number) => async () => {
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), index)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), index)();
};

export const onCompletedAllEventMilestonesPage =
  (event: string, challengeType1: string, yuCoin1: string, yuCoin2: string, yuCoin3: string) =>
  async () => {
    const eventTitle = `${event} event finished`;

    await textVisible(eventTitle)();
    await textExists("Great job!")();
    await textVisible(
      "You collected all milestone rewards. Good job! \n This event will be closed."
    )();
    await textVisible(challengeType1)();
    await textVisible(yuCoin1)();
    await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
    await idVisible(ids.NUM_OF_STARS(3))();
    await textVisible(yuCoin2)();
    await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
    await swipeFromText(yuCoin2, "left", "fast")();
    await textExists(yuCoin3)();
    await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 1)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1)();
    await swipeFromText(yuCoin2, "right", "fast")();
    await buttonVisible("Claim")();
  };

export const threeStarEventToBeCompletedVisible =
  (numberOf3StarChallenges: number, progressWidth: number, badgeCopy: string) => async () => {
    const description = `${numberOf3StarChallenges} / 4 perfect challenge(s)`;
    const eventTimeframe = data.GOALS_4.data.title;

    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
    await textVisible(eventTimeframe)();
    badgeCopy && (await idVisible(ids.HERO_CARD_BADGE(badgeCopy))());
  };

export const eventScreenDetailsAreCorrect = (goal: typeof data.GOALS_4) => async () => {
  const eventTitle = goal.data.title;
  const eventDescriptionTitle = goal.data.descriptionTitle;
  const eventDescription = goal.data.description;

  await multipleTextVisible([eventTitle, eventDescriptionTitle])();
  await scrollUntilTextVisible(
    ids.EVENT_DIALOG_SCREEN_SCROLL,
    eventDescription,
    "down",
    0.5,
    0.25
  )();
  await textVisible(eventDescription)();
  await swipeFromText(eventDescriptionTitle, "up", "fast")();
  for (const info of goal.data.info) {
    await textVisible(info.title)();
    await textVisible(info.description)();
  }
  await swipeFromText("Task", "down", "fast")();
};

export const allMilestonesVisible = async () => {
  await textVisible(data.GOAL_REWARD_MILESTONE_9.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_9.data.rewardDescription)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#E7E7EB"), 0)();
  await idVisible(ids.NUM_OF_STARS(1))();
  await textVisible(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_10.data.rewardDescription)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#E7E7EB"), 1)();
  await idVisible(ids.NUM_OF_STARS(2))();
  await swipeFromText(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardDescription)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#E7E7EB"), 2)();
  await idVisible(ids.NUM_OF_STARS(3))();
};

export const allChallengesVisible = async () => {
  await idVisible(ids.CHALLENGE_SET)();
  await idVisible(ids.CHALLENGE_TILE("Short Stroll"))();
  await idVisible(ids.CHALLENGE_TILE("Brisk Walk"))();
  await idVisible(ids.CHALLENGE_TILE("Long Walk"))();
  await idVisible(ids.CHALLENGE_TILE("Meditation"))();
  await swipeFromText("Meditation", "up", "fast")();
};

export const challengesYuCoinValuesCorrect = (earnRate: number) => async () => {
  await idVisible(ids.CHALLENGE_REWARD("40"))();
  await idVisibleAtIndex(ids.CHALLENGE_REWARD("60"), 0)();
  await idVisibleAtIndex(ids.CHALLENGE_REWARD("80"), 0)();
  await idVisibleAtIndex(ids.CHALLENGE_REWARD("60"), 1)();
  await swipeFromText("Meditation", "up", "fast")();
  await idVisibleAtIndex(ids.CHALLENGE_REWARD("60"), 2)();
};

export const firstChallengeClaimedVisible = async () => {
  await textVisible(data.GOAL_REWARD_MILESTONE_9.data.rewardTitle)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
  await textVisible(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_10.data.rewardDescription)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#E7E7EB"), 0)();
  await idVisible(ids.NUM_OF_STARS(2))();
  await swipeFromText(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardDescription)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#E7E7EB"), 1)();
  await idVisible(ids.NUM_OF_STARS(3))();
  await idVisible(ids.EVENT_PROGRESS_BAR(0.25))();
  await textVisible("1 / 4 perfect challenges")();
};

export const firstAndSecondChallengeClaimedVisible = async () => {
  await textVisible(data.GOAL_REWARD_MILESTONE_9.data.rewardTitle)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
  await textVisible(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 1)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1)();
  await swipeFromText(data.GOAL_REWARD_MILESTONE_10.data.rewardTitle, "left", "fast")();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardTitle)();
  await textVisible(data.GOAL_REWARD_MILESTONE_11.data.rewardDescription)();
  await idVisible(ids.ANIMATED_CIRCLE("#E7E7EB"))();
  await idVisible(ids.NUM_OF_STARS(3))();
  await idVisible(ids.EVENT_PROGRESS_BAR(0.75))();
  await textVisible("3 / 4 perfect challenge(s)")();
};

export const yuCoinTodayEarned =
  (challengeTotals: number[], milestoneTotal = 0) =>
  async () => {
    const sum = challengeTotals.reduce((acc, val) => acc + val, 0);
    const yuCoinToday = `${addCommasToNumber(sum + milestoneTotal * 10)} YuCoin today`;
    await textVisible(yuCoinToday)();
  };

export const challengesAndYuCoinsAwardedVisible = async () => {
  await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Short Stroll", "40", 3))();
  await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Brisk Walk", "60", 3))();
  await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Long Walk", "80", 3))();
  await idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Meditation", "60", 3))();
};

export const canSeeYesterdaysSteps = async () => {
  await textVisible("4,000 Steps", 3000)();
};

export const onEventDetailsScreen = (goal: typeof data.GOALS_4) => async () => {
  const eventTitle = goal.data.title;
  const eventDescriptionTitle = goal.data.descriptionTitle;

  await multipleTextVisible([eventTitle, eventDescriptionTitle])();
};

export const assertTeamStandings = (matchUp: IDatabaseItem) => async () => {
  const { results } = matchUp.data;
  if (!Array.isArray(results)) {
    throw new Error("Tournament data is missing");
  }
  const sortedResults = [...results].sort((a, b) => b.score - a.score);

  for (let index = 0; index < sortedResults.length; index++) {
    const { teamName, score } = sortedResults[index];
    const position = index + 1;

    await idVisible(ids.LEADERBOARD_NAME(teamName, score, position, "leaderboard"), 2000)();
  }
};

export const personalDataVisible = (name: string, world: string) => async () => {
  await textVisibleAtIndex(name, 0)();
  await textVisible(world)();
};
