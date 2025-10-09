import { navigation, textNotVisible } from "@navigation";
import {
  leaderboardConsentCta,
  leaderboardConsentDesc,
  leaderboardConsentHeading,
  pauseScreenDate,
  todaysDate,
} from "../_resources/constants";
import {
  CHALLENGE_SET_SCROLL,
  LEADERBOARD_NAME,
  LEVEL_SUMMARY_YUDOKU_LEADERBOARD,
  RANK,
  SCORE,
  SUDOKU_HINT_TIMER,
  SUDOKU_HOWTOPLAY_BUTTON,
  SUDOKU_JOINLEADERBOARD_BUTTON,
  SUDOKU_LEADERBOARD,
  SUDOKU_PENALTY_TIME,
  SUDOKU_STAGING_SCREEN_SCROLL,
  SUDOKU_STAT,
  TODAYS_EARNINGS,
} from "@ids";
import { CUSTOMER_86, SUDOKU_ANSWER_71, USER_STAT_86 } from "../../_data";
import { getDuration } from "@socket";
import { getFullName } from "_utils/users";
import { UserLeaderboardListItem } from "../_resources/types";
import { expect } from "detox";
import { screens } from "@appScreens";

export const { scrollUntilTextVisible, scrollUntilIdVisible } = navigation.scrolling;

export const { idVisible, textVisible, idExist, wait, completedTodayStreakCopyVisible } =
  navigation.common;

export const { successScreenHintVisible } = screens.challenges;

export const canSeeSudokuTile = async () => {
  await scrollUntilTextVisible(CHALLENGE_SET_SCROLL, "Yudoku", "down")();
  await textVisible("Yudoku")();
};

export const amOnSudokuPage = async () => {
  await textVisible("Yudoku")();
  await idVisible(SUDOKU_HOWTOPLAY_BUTTON)();
  await idVisible(SUDOKU_JOINLEADERBOARD_BUTTON)();
  await textVisible(todaysDate)();
};

export const amOnSudokuHowToPlay = async () => {
  await textVisible("How to play Yudoku")();
};

export const amOnLeaderboardIntroModal = async (): Promise<void> => {
  const modalText = element(by.text("Join the daily Yudoku leaderboard?"));

  await waitFor(modalText).toExist().withTimeout(3000);
  await expect(modalText).toBeVisible(50);
};

export const canSeeStartPrompt = async () => {
  await textVisible("Complete a Yudoku and be the first on the leaderboard today!", 2000)();
};

export const canSeeEmptyLeaderboard = async (): Promise<void> => {
  const emptyStateText = element(
    by.text("Complete a Yudoku and be the first on the leaderboard today!")
  );

  await waitFor(emptyStateText).toExist().withTimeout(3000);
  await expect(emptyStateText).toBeVisible(50);
};

export const amOnSudokuChallenge = async () => {
  await textVisible("Mistakes: 0/3", 3000)();
};

export const canSeeMistakes = (numOfMistakes: number) => async () => {
  await textVisible(`Mistakes: ${numOfMistakes}/3`)();
};

export const canSeeSudokuPauseModal = (numOfMistakes: number, difficulty: string) => async () => {
  await textVisible("Pause")();
  await textVisible(`${numOfMistakes} / 3`)();
  await textVisible("Time")();
  await textVisible(difficulty)();
};

export const cannotSeePauseModal = async () => {
  await textNotVisible("Pause")();
};

export const canSeeHomeAfterLeaderboardJoin = async () => {
  await textVisible("Today's Leaderboard")();
};

export const amOnYudokuCompleted = (hintsNum: number, mistakesNum: number) => async () => {
  await textVisible("Great work!", 4000)();
  await textVisible("Come back tomorrow for a new round.")();
  await idVisible(SUDOKU_STAT("Hints", hintsNum))();
  await idVisible(SUDOKU_STAT("Mistakes", mistakesNum))();
  await idVisible(SUDOKU_STAT("Reward", 60))();
};

export const onMidGamePausedScreen = async () => {
  await textVisible("Cancel", 1000)();
  await textVisible("Yudoku Paused")();
  await textVisible(todaysDate)();
};

export const onMidGamePausedScreenAfterQuit = async () => {
  await textVisible("Cancel", 1000)();
  await textVisible("Yudoku Paused")();
  // @update - Showing US date format on Bitrise
  // await textVisible(pauseScreenDate)()
};

export const onSudokuSummaryScreen =
  (hintsNum: number, mistakesNum: number, customer: typeof CUSTOMER_86) => async () => {
    await textVisible(todaysDate)();
    await idVisible(SUDOKU_STAT("Hints", hintsNum))();
    await idVisible(SUDOKU_STAT("Mistakes", mistakesNum))();
    await textNotVisible("n/a")();
    await scrollUntilTextVisible(
      SUDOKU_STAGING_SCREEN_SCROLL,
      "You can only do one Yudoku per day.\nCome back tomorrow!",
      "down"
    )();
    await textVisible("You can only do one Yudoku per day.\nCome back tomorrow!")();
  };

export const canSeeLeaderboard =
  (
    user: typeof CUSTOMER_86,
    answer: typeof SUDOKU_ANSWER_71,
    rank: number,
    isOnHomeScreen = false
  ) =>
  async () => {
    const time = getDuration(answer.data.adjustedTime);

    if (isOnHomeScreen) {
      await idVisible(SUDOKU_LEADERBOARD(rank, getFullName(user), time))();
    } else {
      await idVisible(LEADERBOARD_NAME(getFullName(user), time, rank, "leaderboard"), 2000)();
    }
  };

export const canSeeManuallyEnteredLeaderboard =
  (user: typeof CUSTOMER_86, rank: number) => async () => {
    await textVisible(`${rank}. ${getFullName(user)}`)();
  };

export const cannotSeeStartGame = async () => {
  await textNotVisible("Start game")();
};

export const canSeeEarntSudoku = (time: string) => async () => {
  await scrollUntilTextVisible(TODAYS_EARNINGS, `Yudoku (${time})`, "down")();
  await textVisible(`Yudoku (${time})`)();
};

export const cannotSeeLeaderboard = async () => {
  await textNotVisible("Today's Leaderboard")();
};

export const canSeePersonalBest = (stat: typeof USER_STAT_86) => async () => {
  const time = getDuration(stat.data.currentValue);
  await idVisible(SUDOKU_STAT("Personal best", time))();
};

export const plus30sIsVisible = async () => {
  await idExist(SUDOKU_PENALTY_TIME(30), 2500)();
};

export const hintInfoTooltipIsVisible = async () => {
  await textVisible("Hints")();
  await textVisible("Each time you use the hint button you will lose 30 seconds of your time.")();
};

export const canSeeCompleted = async () => {
  await scrollUntilTextVisible(CHALLENGE_SET_SCROLL, "Completed", "down")();
  await textVisible("Completed");
};

export const amOnCancelPage = async () => {
  await textVisible("Call it quits?")();
};

export const canSeeAttemptDisclaimer = async () => {
  await textVisible(
    "As this is not your first attempt today your time will not be ranked on the leaderboard and will not count towards your personal best."
  )();
};

export const canSeeYudokuLeaderboardButton = (dateString: string) => async () => {
  await idVisible(LEVEL_SUMMARY_YUDOKU_LEADERBOARD(dateString));
};

export const amOnCompletedPracticeScreen = (hintsNum: number, mistakesNum: number) => async () => {
  await textVisible("Great work!", 5000)();
  await textVisible("Now try the daily Yudoku challenge to earn YuCoin!")();
  await idVisible(SUDOKU_STAT("Hints", hintsNum))();
  await idVisible(SUDOKU_STAT("Mistakes", mistakesNum))();
};

export const leaderboardVisible = (customers: UserLeaderboardListItem[]) => async () => {
  for (const { name, rank, score } of customers) {
    await idVisible(LEADERBOARD_NAME(name, score, rank, "leaderboard"))();
  }
};

export const onLeaderboardWithoutConsent = async () => {
  await textVisible(leaderboardConsentHeading)();
  await textVisible(leaderboardConsentDesc)();
  await textVisible(leaderboardConsentCta)();
};
