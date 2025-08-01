import { navigation } from "@utils";
import { screens } from "@appScreens";
import { MEDIA_2, USER_BODY_COACH, USER_FIIT } from "../../_data";
import { fiitCategories, fiitInfo } from "../_resources/constants";
import { BodyCoachWorkouts, FiitMediaList } from "../_resources/types";
import { scrollFromID, scrollUntilTextVisible } from "_utils/navigation/scrolling";
import * as ids from "@ids";

export const { idVisible, textVisible, idExist, wait, completedTodayStreakCopyVisible } =
  navigation.common;

export const {
  onChallengeComplete,
  onMeditationChallengeComplete,
  isOnQuitChallengeScreen,
  canSeeNewChallengePage,
  successScreenHintVisible,
} = screens.challenges;

export const { scrollUntilTextVisibleAtIndex } = navigation.scrolling;

export const { onCreateAvatarScreen } = screens.yuscreen;

export const canSeeWorkoutCollectionsScreen = async () => {
  const { title, description, logo } = fiitInfo;

  await idVisible(ids.FIIT_CATEGORY_LIST_SCREEN)();
  await idVisible(ids.FIIT_CATEGORY_LIST_HEADER(title))();
  await idVisible(ids.FIIT_CATEGORY_LIST_DESCRIPTION(description))();
  await idVisible(logo)();

  for (const { description: categoryDescription, media, title: categoryTitle } of fiitCategories) {
    const numClasses = media.length;
    await idVisible(ids.FITT_MEDIA_ITEM_TITLE(categoryTitle))();
    await idVisible(
      ids.FIIT_MEDIA_ITEM_DESCRIPTION(`**${numClasses} Classes •** ${categoryDescription}`)
    )();
  }

  await textVisible("Or use the app")();
  await textVisible("Use Fiit app")();
  await textVisible("Set up tutorial")();
};

export const canSeeFiitMediaList = (media: FiitMediaList, user: typeof USER_FIIT) => async () => {
  const duplicateRewardArray = [];
  const {
    data: { earnRate },
  } = user;

  for (const {
    data: { title, duration },
  } of media) {
    const durationRewardInfo = `${duration / 60} mins • Earn ${earnRate * 6}`;

    if (duplicateRewardArray.length === 0) {
      duplicateRewardArray.push(durationRewardInfo);
    }

    await idVisible(ids.FITT_MEDIA_ITEM_TITLE(title), 3000)();

    if (!duplicateRewardArray.includes(durationRewardInfo)) {
      await scrollUntilTextVisible(ids.FIIT_MEDIA_SCROLL_VIEW, durationRewardInfo, "down")();
    } else {
      await scrollUntilTextVisibleAtIndex(
        ids.FIIT_MEDIA_SCROLL_VIEW,
        durationRewardInfo,
        "down",
        duplicateRewardArray.length - 1
      )();
      duplicateRewardArray.push(durationRewardInfo);
    }
  }
};

export const canSeeVideoDescription =
  (media: typeof MEDIA_2, user: typeof USER_FIIT, waitTime = 0) =>
  async () => {
    const {
      data: { title, description },
    } = media;
    const {
      data: { earnRate },
    } = user;
    const { smallLogo } = fiitInfo;

    await wait(waitTime)();

    await idVisible(ids.VIDEO_PLAYER_DESCRIPTION_SCREEN)();
    await textVisible(title)();
    await idVisible(smallLogo)();
    await idVisible(ids.MEDIA_STAR_REWARD(3))();
    await idVisible(ids.MEDIA_YUCOIN_REWARD(earnRate * 6))();
    await textVisible(description)();
  };

export const isVideoPaused = (paused: boolean) => async () => {
  await idExist(ids.VIDEO_PLAY_PAUSE_BUTTON(paused), 3000)();
  await wait(3000)();
};

export const canSeeFiitChallengeRewardScreen =
  (user: typeof USER_FIIT, media: typeof MEDIA_2, level: number) => async () => {
    const {
      data: { earnRate },
    } = user;
    const {
      data: { duration },
    } = media;
    const durationInMinutes = duration / 60;

    await idVisible(ids.CHALLENGE_SUCCESS_SCREEN)();
    await textVisible(`Level ${level}`)();
    await textVisible("Well done!")();
    await idVisible(ids.CHALLENGE_REWARD(earnRate * 6))();
    await textVisible(`${durationInMinutes} minutes`)();
  };

export const canSeeYuCoinEarntToday = (yuCoin: number) => async () => {
  await idVisible(ids.DAILY_STEPS_SCREEN)();
  await textVisible(`${yuCoin} YuCoin today`)();
  await idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(yuCoin))();
};

export const canSeeFiitCompleted = (video: typeof MEDIA_2) => async () => {
  const {
    data: { duration },
  } = video;
  const durationInMinutes = duration / 60;
  await textVisible(`Workout (${durationInMinutes} mins)`)();
};

export const canSeeBodyCoachWorkouts = async () => {
  for (let i = 1; i <= 10; i++) {
    await scrollFromID(ids.FIIT_MEDIA_SCROLL_VIEW, "up", "slow", 0.1)();

    const workoutTitle = `Ultimate Beginner #${i}`;

    await textVisible(workoutTitle, 2000)();
  }
};

export const canSeeBodyCoachVideoInfo =
  (workout: BodyCoachWorkouts, user: typeof USER_BODY_COACH) => async () => {
    const { title, description } = workout;
    const {
      data: { earnRate },
    } = user;

    await textVisible(title)();
    await textVisible(description)();
    await idVisible(ids.MEDIA_STAR_REWARD(3))();
    await idVisible(ids.VIDEO_PLAYER_DESCRIPTION_SCREEN)();
    await idVisible(ids.MEDIA_YUCOIN_REWARD(earnRate * 6))();
  };
