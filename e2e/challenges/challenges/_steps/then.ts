import { multipleTextVisible, navigation } from "@utils";
import { wait } from "../../../_utils/navigation/common";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { GOALS_2 } from "../../_data";
import { buttonVisible } from "_utils/appScreens/challenges";
import { expect } from "detox";
import { sendSteps } from "@socket";
import { getLocalisedString as t } from "@i18n";
import { WorldType } from "../_resources/types";

export const {
  idVisible,
  textVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  textVisibleAtIndex,
  idVisibleAtIndex,
  navigateViaText,
  navigateViaID,
} = navigation.common;

export const {} = screens.streaks;

export const {
  onChallengeComplete,
  startChallenge,
  canSeeNewChallengePage,
  canSeeChallengeTiles,
  levelSVGVisible,
  successScreenHintVisible,
} = screens.challenges;

export const {
  scrollUntilTextVisible,
  swipeFromText,
  swipeToText,
  swipeFromTextAtIndex,
  scrollUntilIdVisible,
  swipeFromIDAtIndex,
} = navigation.scrolling;

export const {
  yuCoinPowerInfoVisible,
  chestNudgeVisible,
  walkingNudgeVisible,
  maximiseYucoinVisible,
} = screens.yuscreen;

export const isOnInivteColleaguePage = async () => {
  await expect(element(by.id(ids.REFERRALS_CODE_TITLE("Your referral code:")))).toBeVisible();
  await expect(element(by.id(ids.REFERRALS_SHARE_CODE_BUTTON))).toBeVisible();
  await expect(element(by.text("Your referrals"))).toExist();
};

export const onTodaysEarnings =
  (steps = 0, cycling: string, mindfulness = 0, yuCoinPowerEarnRate: string) =>
  async () => {
    await expectIsVisibleViaID(ids.TODAYS_EARNINGS);
    await textVisible("Today you've earned")();
    await textVisible("200 YuCoin")();
    await idVisible(ids.YUCOIN_POWER("13"))();
    await expectIsVisibleViaText(`${steps} / 12000 steps`);
    await expectIsVisibleViaText(`${cycling}`);
    await expectIsVisibleViaText(`${mindfulness} / 30 mindful mins`);
    await textVisibleAtIndex(`0/${yuCoinPowerEarnRate}`, 0)();
    await textVisibleAtIndex(`0/${yuCoinPowerEarnRate}`, 1)();
    await textVisible("0/52", 500)();
    await scrollUntilTextVisible(ids.TODAYS_EARNINGS, "No challenge done", "down")();
    await scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Take a challenge (1 left)", "down")();
    await textVisible("Today's challenges (0/1)")();
  };

export const eventToBeCompletedVisible =
  (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`;
    const eventTimeframe = GOALS_2.data.title;

    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
    await textVisible(eventTimeframe)();
    await idVisible(ids.HERO_CARD_BADGE("NEW"))();
  };

export const eventCompletedVisible =
  (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`;
    const eventTimeframe = GOALS_2.data.title;

    await textVisible(eventTimeframe)();
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const onEventDetailsScreen = async () => {
  const eventTimeframe = GOALS_2.data.title;
  const eventDescriptionTitle = GOALS_2.data.descriptionTitle;
  const eventDescription = GOALS_2.data.description;

  await textVisible(eventTimeframe)();
  await textVisible(eventDescriptionTitle)();
  await textVisible(eventDescription)();

  await swipeFromText(eventDescriptionTitle, "up", "fast")();
  for (const info of GOALS_2.data.info) {
    await textVisible(info.title)();
    await textVisible(info.description)();
  }
  await scrollUntilTextVisible(ids.EVENT_DIALOG_SCREEN_SCROLL, eventDescriptionTitle, "up")();
  await swipeFromText(eventDescriptionTitle, "down", "fast")();
};

export const personalDataVisible = (name: string, world: string) => async () => {
  await textVisibleAtIndex(name, 0)();
  await textVisible(world)();
};

export const yuCoinPageEventDataCorrect =
  (numberOfProfiles: number, progressWidth: number) => async () => {
    const description = `${numberOfProfiles} / 5 profiles viewed`;
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const claimVisible = (numOfStars: number) => async () => {
  await textVisible("Claim", 3000)();
  await idVisible(ids.CLAIM_BUTTON)();
  await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
  await idVisible(ids.NUM_OF_STARS(numOfStars))();
};

export const onCompletedEventMilestonePage =
  (event: string, yuCoin: string, numOfStars: number, challengeType: string) => async () => {
    const eventTitle = `${event} event`;

    await textVisible(eventTitle)();
    await textVisible("Great job!")();
    await textVisible(
      "You have reached the event milestone!\nCongratulations. Claim your rewards",
      3000
    )();
    await textVisible(`${yuCoin} YuCoin`)();
    await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
    await idVisible(ids.NUM_OF_STARS(numOfStars))();
    await textVisible(challengeType)();
    await buttonVisible("Claim")();
  };

export const milestoneComplete = (index: number) => async () => {
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), index, 3000)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), index, 3000)();
};

export const onCompletedEventPage =
  (event: string, challengeType1: string, yuCoin: string) => async () => {
    const eventTitle = `${event} event`;

    await textVisible(eventTitle)();
    await textVisible("Great job!")();
    await textVisible(
      "You have reached the event milestone!\nCongratulations. Claim your rewards"
    )();
    await textVisible(challengeType1)();
    await textVisibleAtIndex(`${yuCoin} YuCoin`, 0)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#F43E8E"), 0)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#F43E8E"), 1)();
    await idVisible(ids.NUM_OF_STARS(4))();
    await idVisible(ids.NUM_OF_STARS(5))();
    await textVisibleAtIndex(`${yuCoin} YuCoin`, 1)();
    await swipeFromTextAtIndex(`${yuCoin} YuCoin`, "left", "fast", 0)();
    await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
    await swipeFromIDAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0, "left", "fast")();
    await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 1)();
    await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1)();
    await swipeFromIDAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1, "right", "fast")();
    await buttonVisible("Claim")();
  };

export const challengeComplete = async () => {
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 1)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1)();
  await swipeFromTextAtIndex("650 YuCoin", "left", "fast", 0)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 2)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 2)();
  await textVisible("5 / 5 profiles viewed")();
  await idVisible(ids.EVENT_PROGRESS_BAR(1))();
};

export const yuCoinEarnedFromEvent =
  (yuCoinPower: number, rewardValue: number, milestone: number) => async () => {
    const yuCoinDownload = 200;
    const yuCoinTotal = (yuCoinPower * rewardValue * milestone + yuCoinDownload).toLocaleString(
      "en-US"
    );
    await textVisible(`${yuCoinTotal} YuCoin today`)();
  };

export const challengeRewardVisible =
  (yuCoinPower: number, rewardValue: number, minRewardValue: number) => async () => {
    const yuCoinTotal = (yuCoinPower * rewardValue).toString();
    const minReward = (minRewardValue * yuCoinPower).toString();
    await idVisibleAtIndex(ids.CHALLENGE_REWARD(`${minReward} - ${yuCoinTotal}`), 0)();
    await idVisibleAtIndex(ids.CHALLENGE_REWARD(`${minReward} - ${yuCoinTotal}`), 1)();
  };

export const yunityCorrect = (worldType: WorldType) => async () => {
  await wait(5000)();
  let label = "";
  let subheading = "";

  switch (worldType) {
    case "Forest":
      label = "You've achieved Yunity\nwith the Forest";
      subheading = "Take a deep, celebratory breath.";
      break;
    case "Ocean":
      label = "You’ve achieved Yunity\nwith the Ocean";
      subheading = "You took the plunge and ascended victorious. You earned a Yunity ocean chest!";
      break;
    case "Desert":
      label = "You’ve achieved Yunity\nwith the Desert";
      subheading = "You are your own wellbeing oasis and earned a Yunity desert chest!";
      break;
    case "Mountain":
      label = "... and you’ve completed your first journey for unity!";
      subheading =
        "You’re ready to explore the Yuniverse in your enlightened state. Enjoy your Yunity Mountain Chest and floating through the cosmos.";
  }

  try {
    await textVisible(label, 3000)();
    await textVisible(subheading)();
    await navigateViaText("Continue");
  } catch (e) {
    await textVisible(label, 3000)();
    await navigateViaText("Continue");
  }
};

export const nextLevelLocked = (level: string) => async () => {
  await idVisible(ids.QUEST_DETAIL_HALF_MODAL(`Unlock at level ${level}`))();
};

export const completeSecondChallenge = (levelNumber: number, challengeType: string) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelNumber))();
  await startChallenge(challengeType)();
  await sendSteps(400, 35000)();
  await waitFor(element(by.text(t("Collect"))))
    .toBeVisible()
    .withTimeout(5000);
  await navigateViaText(t("Collect"));
};
