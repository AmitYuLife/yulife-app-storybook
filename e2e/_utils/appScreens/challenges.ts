import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  navigateViaText,
  navigateViaID,
  expectIsVisibleViaID,
  textVisible,
  idVisible,
  dismissNotificationScreenIfVisible,
  wait,
  textNotVisible,
  idNotVisible,
  idVisibleAtIndex,
  tapText,
  idExist,
  tapID,
  multipleIDVisible,
} from "@navigation";
import { sendSteps } from "@socket";
import { getLocalisedString as t } from "@i18n";
import { expect } from "detox";
import * as ids from "@ids";
import {
  BriskWalkTargetsAndRewards,
  FiitTargetsAndRewards,
  LongWalkTargetsAndRewards,
  MeditationTargetsAndRewards,
  ShortStrollTargetsAndRewards,
  WorkoutTargetsAndRewards,
  YudokuTargetsAndRewards,
  briskWalkMaxReward,
  longWalkMaxReward,
  meditationMaxReward,
  shortStrollMaxReward,
  yudokuMaxReward,
} from "./utils";
import { scrollUntilIdVisible, scrollFromID } from "_utils/navigation/scrolling";

export const onChallengeComplete =
  (stepCount: number, level = 1) =>
  async () => {
    const steps = `${stepCount} steps`;
    const challengeLevel = `Level ${level}`;

    const screenCopy = ["Well done!", "Collect", steps, challengeLevel];

    await wait(5000)();
    for (const i of screenCopy) {
      await waitFor(element(by.text(i)))
        .toBeVisible()
        .withTimeout(10000);
      await expect(element(by.text(i))).toBeVisible();
    }
  };

export const onMeditationChallengeComplete = (minutes: number, level: number) => async () => {
  wait(3000)();
  const challengeLevel = `Level ${level}`;

  let timeSpent = `${minutes} minute`;
  if (minutes > 1) {
    timeSpent = `${minutes} minutes`;
  }

  const screenCopy = ["Well done!", "Collect", timeSpent, challengeLevel];

  for (const i of screenCopy) {
    await waitFor(element(by.text(i)))
      .toBeVisible()
      .withTimeout(10000);
    await expect(element(by.text(i))).toBeVisible();
  }
};

export const startChallenge = (challengeTile: string) => async () => {
  await navigateViaID(ids.CHALLENGE_TILE(challengeTile));
  await navigateViaText(t("Take challenge"));
  try {
    await navigateViaText(t("maybe later"));
  } catch (e) {
    await idVisible(ids.CHALLENGE_PROGRESS_BAR)();
  }
};

export const startChallengeFromQuests =
  (levelButton: number, challengeName: string) => async () => {
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelButton));
    await navigateViaID(ids.CHALLENGE_TILE(challengeName));
    await navigateViaText("Take challenge");

    if (challengeName === "Meditation") {
      await wait(5000)();
    }

    try {
      await navigateViaText("maybe later");
    } catch (e) {
      await idVisible(ids.CHALLENGE_PROGRESS_BAR)();
    }
  };

export const startMeditationChallengeFromQuests = (levelButton: number) => async () => {
  await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelButton));
  await navigateViaID(ids.CHALLENGE_TILE("Meditation"));
  await navigateViaText("Take challenge");
  await navigateViaText("Use a different app");
  await dismissNotificationScreenIfVisible();
};

export const completeShortStroll = (steps: number, waitTime: number) => async () => {
  await navigateViaID(ids.CHALLENGE_TILE("Short Stroll"));
  await navigateViaText("Take challenge");
  await navigateViaText("maybe later");
  await sendSteps(steps, waitTime)();
};

export const meditationAppsButtonsVisible = (appName: string) => async () => {
  const buttonText = element(by.text(`Use ${appName} app`));
  await expect(buttonText).toBeVisible();
};

export const buttonVisible = (text: string) => async () => {
  const buttonText = element(by.text(text));
  await expect(buttonText).toBeVisible();
};

export const openOtherAppButtonVisible = async () => {
  const buttonText = element(by.text("Use a different app"));
  await expect(buttonText).toBeVisible();
  await expectIsVisibleViaID(ids.USE_OTHER_APP_BUTTON);
};

export const meditopiaContentCardVisible = (mins: string, yuCoin: string) => async () => {
  await textVisible(`${mins} mins • Earn ${yuCoin}`)();
};

export const isOnChallengeLoadScreen = async () => {
  await expectIsVisibleViaID(ids.MEDITOPIA_CHALLENGE_LOAD_SCREEN);
};

export const selectMeditopiaChallengeFromQuests =
  (levelButton: number, challengeName: string) => async () => {
    await navigateViaID(ids.LEVEL_CHALLENGE_BUTTON(levelButton));
    await scrollFromID(ids.CHALLENGE_SET, "up", "fast")();
    await navigateViaID(ids.CHALLENGE_TILE(challengeName));
  };

export const onChallengeDetailsScreen = (yuCoin: string) => async () => {
  await idVisible(ids.CHALLENGE_DETAILS_SCREEN)();
  await idVisible(ids.CHALLENGE_TYPE("Meditation"))();
  await idVisible(ids.TARGET("3 mins"))();
  await idVisible(ids.REWARD_AMOUNT(60))();
  await textVisible(yuCoin)();
  await idVisible(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON)();
  await idVisible(ids.SET_UP_BUTTON("Set up tutorial"))();
  await buttonVisible("Take challenge")();
  await buttonVisible("Set up tutorial")();
};

export const on3ChallengesDetailsScreen = async () => {
  await idVisible(ids.CHALLENGE_DETAILS_SCREEN)();
  await idVisible(ids.CHALLENGE_TYPE("Meditation"))();
  await idVisible(ids.TARGET("3 mins"))();
  await idVisible(ids.TARGET("5 mins"))();
  await idVisible(ids.TARGET("10 mins"))();
  await idVisible(ids.REWARD_AMOUNT(20))();
  await idVisible(ids.REWARD_AMOUNT(40))();
  await idVisible(ids.REWARD_AMOUNT(60))();
  await idVisible(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON)();
  await idVisible(ids.SET_UP_BUTTON("Set up tutorial"))();
};

export const tapTakeChallenge = async () => {
  await tapID(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON)();
};

export const onMeditationContentIntroScreen =
  (
    contentName:
      | "Awareness"
      | "Explore your breath"
      | "Counting breaths"
      | "Body scan"
      | "Relaxing the body"
      | "Rediscovering senses"
      | "Grounding"
      | "Deep relaxation"
      | "Being aware of the present moment"
      | "Slowing down"
      | "Improving attention and focus"
      | "Compassion"
      | "Gratitude"
      | "Acceptance"
      | "Expand",
    duration: number,
    stars: number,
    yuCoinReward: number,
    yuCoinTotal: number
  ) =>
  async () => {
    const challengeStats = `Meditation • ${duration} sec`;
    await wait(5000)();
    let label = "";
    let subheading = "";

    switch (contentName) {
      case "Awareness":
        label = "Awareness";
        subheading =
          "Deep Mindfulness - You'll experience the building blocks of meditation more deeply, allowing your practice to take root.";
        break;
      case "Explore your breath":
        label = "Explore your breath";
        subheading =
          "Breath - Getting to know your breath in one of the fundamental steps of meditation. By noticing the natural flow of your breath, you will see that you can easily step into peace, relaxation and balance.";
        break;
      case "Counting breaths":
        label = "Counting breaths";
        subheading =
          "Breath - Getting to know your breath in one of the fundamental steps of meditation. By noticing the natural flow of your breath, you will see that you can easily step into peace, relaxation and balance.";
        break;
      case "Body scan":
        label = "Body scan";
        subheading =
          "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day.";
        break;
      case "Relaxing the body":
        label = "Relaxing the body";
        subheading =
          "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves.";
        break;
      case "Rediscovering senses":
        label = "Rediscovering senses";
        subheading =
          "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves.";
        break;
      case "Grounding":
        label = "Grounding";
        subheading =
          "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day.";
        break;
      case "Deep relaxation":
        label = "Deep relaxation";
        subheading =
          "Body - Noticing the sensations in your body and observing their changes leads to deeper relaxation, better focus, and more impactful brain waves.";
        break;
      case "Being aware of the present moment":
        label = "Being aware of the present moment";
        subheading =
          "Being Present - Your mind constantly swings between the past and the future. During meditation, aim to focus on the moment, and fully experience all the gifts that come from being fully present.";
        break;
      case "Slowing down":
        label = "Slowing down";
        subheading =
          "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day.";
        break;
      case "Improving attention and focus":
        label = "Improving attention and focus";
        subheading =
          "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day.";
        break;
      case "Compassion":
        label = "Compassion";
        subheading =
          "Compassion - You will try to understand any feelings that arise, and show both yourself and others compassion, kindness and welcome.";
        break;
      case "Gratitude":
        label = "Gratitude";
        subheading =
          "Gratitude - Gratitude is a powerful healing emotion. If you look carefully, you'll see that there are many things that you can be thankful for.";
        break;
      case "Acceptance":
        label = "Acceptance";
        subheading =
          "Acceptance - You will learn to let events happen on their own, and to soften your resistance to reality.";
        break;
      case "Expand":
        label = "Expand";
        subheading =
          "Relax Quickly - Amidst the chaos of daily responsibilities, tasks, and to-do lists, we may think we don't have any time to relax. But, we actually don't need hours of time to rest. With these short meditations, you can invite your body and mind to relax throughout your day.";
        break;
    }

    try {
      await wait(10000)();
      await textVisible(label)();
      await textVisible(challengeStats, 3000)();
      await textVisible(subheading)();
      await idVisible(ids.MEDITATION_STAR_REWARD(stars));
      await idVisible(ids.MEDITATION_YUCOIN_REWARD(yuCoinReward));
      await idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(yuCoinTotal));
      await buttonVisible("Start session")();
    } catch (e) {
      await textVisible(label, 3000)();
      await buttonVisible("Start session")();
    }
  };

export const tapStartSession = async () => {
  await navigateViaID(ids.VIDEO_PLAYER_START_BUTTON);
};

export const completeMeditopiaContentSession = async () => {
  // Try dismissing "maybe later", but don't fail if it's not there
  try {
    await navigateViaID(ids.GENERIC_SCREEN_CTA("maybe later"), 1200);
  } catch (e) {
    // CTA not present, that's fine
  }
  await multipleIDVisible([
    ids.VIDEO_PLAYER,
    ids.VIDEO_LOGO,
    ids.VIDEO_PLAYER_TIMER,
    ids.VIDEO_PROGRESS_BAR,
    ids.VIDEO_PLAY_PAUSE_BUTTON(false),
  ])();

  await wait(20000)();
};

export const onMeditopiaChallengeComplete =
  (minutes: number, level: number, yuCoin: string) => async () => {
    const challengeLevel = `Level ${level}`;

    let timeSpent = `${minutes} minute`;
    if (minutes > 1) {
      timeSpent = `${minutes} minutes`;
    }

    const screenCopy = ["Well done!", "Collect", timeSpent, challengeLevel, yuCoin];

    for (const i of screenCopy) {
      await waitFor(element(by.text(i)))
        .toBeVisible()
        .withTimeout(10000);
      await expect(element(by.text(i))).toBeVisible();
    }
  };

export const pauseMeditopiaChallenge =
  (waitTime = 1500) =>
  async () => {
    await navigateViaID(ids.GENERIC_SCREEN_CTA("maybe later"), waitTime);
    await tapID(ids.VIDEO_PLAY_PAUSE_BUTTON(false), waitTime)();
  };

export const pauseChallengeTimeVisible = async () => {
  await textNotVisible("00:00")();
  await idVisible(ids.VIDEO_PLAY_PAUSE_BUTTON(true))();
  await idNotVisible(ids.MEDITOPIA_TIMER_SECS(":00"))();
  await idVisibleAtIndex(ids.MEDITOPIA_TIMER_MINUTES("00"), 0)();
};

export const playAndFinishMeditopiaChallenge = async () => {
  await wait(2000)();
  await navigateViaID(ids.VIDEO_PLAY_PAUSE_BUTTON(true));
  await wait(18000)();
};

export const startAndQuitMeditopiaChallenge = async () => {
  await navigateViaID(ids.GENERIC_SCREEN_CTA("maybe later"));
  await navigateViaID(ids.SCREEN_CLOSE);
};

export const quitMeditopiaChallenge = async () => {
  await navigateViaID(ids.SCREEN_CLOSE);
};

export const isOnQuitChallengeScreen = async () => {
  await idVisible(ids.GENERIC_SCREEN_HEADING("Call it quits?"))();
  await textVisible("Call it quits?")();
  await textVisible("Your current progress will be lost but you can retry any time")();
  await buttonVisible("Exit challenge")();
  await buttonVisible("Cancel")();
  await idVisible(ids.GENERIC_SCREEN_CTA("Exit challenge"))();
  await idVisible(ids.GENERIC_SCREEN_CTA("Cancel"))();
};

export const closeQuitChallengeScreen = async () => {
  await navigateViaID(ids.GENERIC_SCREEN_CTA("Cancel"), 1500);
};

export const exitMeditopiaChallenge = async () => {
  await navigateViaID(ids.GENERIC_SCREEN_CTA("Exit challenge"));
};

export const onChooseMeditopiaContentScreen = async () => {
  await textVisible("Meditate inside the YuLife app with Meditopia")();
  await idVisible(ids.CHOOSE_MEDITOPIA_SCREEN)();
};

export const startMeditopiaChallenge = async () => {
  await navigateViaText("Start session");
  await navigateViaText("maybe later");
};

export const clickScrubber = async () => {
  await navigateViaID(ids.VIDEO_PROGRESS_BAR);
};

export const onScreenButtonsNotVisible = async () => {
  await idNotVisible(ids.SCREEN_CLOSE)();
  await idNotVisible(ids.VIDEO_PLAY_PAUSE_BUTTON(true))();
  await idNotVisible(ids.LOADING_BAR)();
};

export const isOnTodaysMeditationScreen = (mins1: string, yuCoin1: string) => async () => {
  await wait(2000)();
  await idVisible(ids.TODAYS_MEDITATION_SCREEN, 2000)();
  await idVisible(ids.TODAYS_MEDITATION_HEADER("Today’s Meditations"))();
  await idVisible(ids.TODAYS_MEDITATION_DESCRIPTION("Free sessions powered by"))();
  await idVisible(ids.MEDITATION_PARTNER_LOGO)();
  await textVisible("Today’s Meditations")();
  await textVisible("Free sessions powered by")();
  await meditopiaContentCardVisible(mins1, yuCoin1)();
  await textVisible("Or use an app")();
  await meditationAppsButtonsVisible("Meditopia")();
  await meditationAppsButtonsVisible("Calm")();
  await meditationAppsButtonsVisible("Headspace")();
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${0}`);
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${1}`);
  await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${2}`);
  await openOtherAppButtonVisible();
};

export const isOnTodaysMeditationScreen2Challenges =
  (mins1: string, yuCoin1: string, mins2: string, yuCoin2: string) => async () => {
    await idVisible(ids.TODAYS_MEDITATION_SCREEN)();
    await idVisible(ids.TODAYS_MEDITATION_HEADER("Today’s Meditations"))();
    await idVisible(ids.TODAYS_MEDITATION_DESCRIPTION("Free sessions powered by"))();
    await idVisible(ids.MEDITATION_PARTNER_LOGO)();
    await textVisible("Today’s Meditations")();
    await textVisible("Free sessions powered by")();
    await meditopiaContentCardVisible(mins1, yuCoin1)();
    await meditopiaContentCardVisible(mins2, yuCoin2)();
    await textVisible("Or use an app")();
    await meditationAppsButtonsVisible("Meditopia")();
    await meditationAppsButtonsVisible("Calm")();
    await meditationAppsButtonsVisible("Headspace")();
    await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${0}`);
    await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${1}`);
    await expectIsVisibleViaID(`BUTTON_LIST_SCREEN_${2}`);
    await openOtherAppButtonVisible();
  };

export const tapMeditopiaContentCard = (mins1: string, yuCoin1: string) => async () => {
  await navigateViaText(`${mins1} mins • Earn ${yuCoin1}`);
};

export const exitChallenge = async () => {
  await navigateViaID(ids.GENERIC_SCREEN_CTA("Exit challenge"), 1000);
};

export const canSeeNewChallengePage =
  (
    challenges:
      | "short stroll"
      | "brisk walk"
      | "meditation"
      | "long walk"
      | "fiit"
      | "yudoku"
      | "workouts",
    earnRate: number,
    boostReward?: number
  ) =>
  async () => {
    let challengeDetails: typeof MeditationTargetsAndRewards;
    await wait(2500)();
    await idVisible(ids.CHALLENGE_DETAILS_SCREEN_NEW)();
    await idVisible(ids.YUCOIN_POWER(earnRate))();

    switch (challenges) {
      case "short stroll":
        challengeDetails = ShortStrollTargetsAndRewards;
        break;
      case "brisk walk":
        challengeDetails = BriskWalkTargetsAndRewards;
        break;
      case "long walk":
        challengeDetails = LongWalkTargetsAndRewards;
        break;
      case "meditation":
        challengeDetails = MeditationTargetsAndRewards;
        break;
      case "fiit":
        challengeDetails = FiitTargetsAndRewards;
        break;
      case "workouts":
        challengeDetails = WorkoutTargetsAndRewards;
        break;
      case "yudoku":
        challengeDetails = YudokuTargetsAndRewards;
        break;
      default:
        break;
    }

    for (const chal of challengeDetails) {
      await idVisible(ids.TARGET_AND_REWARD(chal.target, chal.baseRewardAmount * earnRate))();
      await idVisible(ids.TARGET(chal.target))();
      await idVisible(ids.REWARD_AMOUNT(chal.baseRewardAmount * earnRate))();
    }

    if (boostReward) {
      await textVisible("Extra YuCoin")();
      await idVisible(ids.CHALLENGE_PAGE_BOOST_SLOT(boostReward * earnRate))();
      await idVisible(ids.CHALLENGE_DETAILS_BADGE("Boost"))();
    }
  };

export const canSeeChallengeTiles =
  (user: IDatabaseItem, bonus?: "surge" | "boost", surgeAmount?: number) => async () => {
    const earnRate = user.data.earnRate;
    let isBoosted = false;

    let shortStrollTileReward = shortStrollMaxReward * earnRate;
    let briskWalkTileReward = briskWalkMaxReward * earnRate;
    let longWalkTileReward = longWalkMaxReward * earnRate;
    let meditationTileReward = meditationMaxReward * earnRate;
    let yudokuTileReward = yudokuMaxReward * earnRate;

    const addBonus = (int: number) => {
      if (bonus) {
        const multiplier = bonus === "surge" ? surgeAmount : 2;
        isBoosted = bonus === "boost" ? true : false;

        return (int * multiplier).toString();
      }

      return int.toString();
    };

    await idVisible(
      ids.CHALLENGE_TILE_BOOST_TAG("Short Stroll", addBonus(shortStrollTileReward), isBoosted)
    )();
    await idVisible(
      ids.CHALLENGE_TILE_BOOST_TAG("Brisk Walk", addBonus(briskWalkTileReward), isBoosted)
    )();
    await idVisible(
      ids.CHALLENGE_TILE_BOOST_TAG("Long Walk", addBonus(longWalkTileReward), isBoosted)
    )();
    await idVisible(
      ids.CHALLENGE_TILE_BOOST_TAG("Meditation", addBonus(meditationTileReward), isBoosted)
    )();
    await scrollUntilIdVisible(
      ids.CHALLENGE_SET_SCROLL,
      ids.CHALLENGE_TILE_BOOST_TAG("Yudoku", addBonus(yudokuTileReward), isBoosted),
      "down"
    )();
    await idVisible(
      ids.CHALLENGE_TILE_BOOST_TAG("Yudoku", addBonus(yudokuTileReward), isBoosted)
    )();
  };

export const completeMoodMonitor = (answers: string[]) => async () => {
  for (const ans of answers) {
    await tapText(ans, 1000)();
    await tapText("Next", 1000)();
  }
};

export const yunityRewardsVisible = (cards: string[]) => async () => {
  for (const c of cards) {
    await idVisible(ids.YUNITY_CARD(c))();
  }
};

export const levelSVGVisible =
  (start: number, end = start, colour = "#F5F5F5_6") =>
  async () => {
    for (let range = start; range <= end; range++) {
      await idVisible(ids.LEVEL_CHALLENGE_BUTTON(range))();
      await idExist(ids.LEVEL_SVG(colour, range))();
    }
  };

export const successScreenHintVisible = async () => {
  const hintTitle = "Unlock more challenges";
  const hintCopy =
    "Every 50 levels, you gain the ability to do one more challenge per day. Up to 4 challenges total!";
  await textVisible(hintTitle, 5000)();
  await textVisible(hintCopy, 5000)();
  await idVisible(ids.HINT_VARIANT("challenges"), 5000)();
};

export const successScreenNotHintVisible = async () => {
  const hintTitle = "Unlock more challenges";
  const hintCopy =
    "Every 50 levels, you gain the ability to do one more challenge per day. Up to 4 challenges total!";
  await textNotVisible(hintTitle)();
  await textNotVisible(hintCopy)();
  await idNotVisible(ids.HINT_VARIANT("challenges"))();
};
