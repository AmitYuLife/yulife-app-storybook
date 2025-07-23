import * as ids from "@ids";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { SocialGroupLeaderboard } from "../_resources/types";
export { minimiseAndReopenApp, reloadOnly } from "@utils";
export { authoriseFitkit, sendSteps, closeAndReopenApp, quitAndReopenApp } from "@socket";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  dismissNotificationScreenIfVisible,
} = navigation.common;

export const { scrollUntilTextVisible, scrollUntilIdVisible, swipeFromText, scrollFromID } =
  navigation.scrolling;

export const { tapMenuItem } = screens.menu;

export const tapSudoku = async () => {
  await scrollUntilTextVisible(ids.CHALLENGE_SET_SCROLL, "Yudoku", "down")();
  await tapText("Yudoku")();
};

export const tapHowToPlay = async () => {
  await tapText("How to play?")();
};

export const tapJoinTheLeaderboard = async () => {
  await tapText("Join the daily leaderboard", 2000, true)();
};

export const tapJoinLeaderboardFromYudoku = async () => {
  await tapText("Join the daily leaderboard", 2000, true)();
  await tapText("Join the Leaderboard")();
};

export const tapJoinLeaderboardButton = async () => {
  await tapID(ids.JOIN_DAILY_SODOKU_LEADERBOARD, 2000)();
};

export const tapStartGame = async () => {
  await scrollUntilTextVisible(ids.SUDOKU_STAGING_SCREEN_SCROLL, "Start game", "down")();
  await tapText("Start game")();
};

export const tapSudokuHint = async () => {
  await tapID(ids.SUDOKU_HINT)();
};

export const tapSudokuPause = async () => {
  await tapID(ids.SUDOKU_PAUSE)();
};

export const tapResumeGame = async () => {
  await tapText("Resume Game")();
};

export const tapResumeSudoku = async () => {
  await tapText("Resume Game")();
};

export const tapCollect = async () => {
  await scrollUntilTextVisible(ids.SUDOKU_COMPLETED_SCREEN_SCROLL, "Collect", "down")();
  await tapText("Collect")();
};

export const tapLeaderboard = async () => {
  await tapText("Daily Leaderboard")();
};

export const tapUseAHint = async () => {
  await tapText("Use a hint")();
};

export const tapUndo = async () => {
  await tapID(ids.SUDOKU_UNDO_BUTTON)();
};

export const tapExitChallenge = async () => {
  await tapText("Exit challenge")();
};

export const completeYudoku =
  (shouldCollect = true, shouldStart = true, endWait = 0) =>
  async () => {
    if (shouldStart) {
      await tapStartGame();
    }
    await dismissNotificationScreenIfVisible();
    await wait(9000)();
    await tapID(ids.CELL_ROW_COLUMN(8, 6, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(4))();
    await tapID(ids.CELL_ROW_COLUMN(8, 7, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(7))();
    await tapID(ids.CELL_ROW_COLUMN(8, 8, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(8))();
    await wait(3000)();
    if (shouldCollect) {
      await tapCollect();
    }
    await wait(endWait)();
  };

export const completeYudokuPractice = (answersArr) => async () => {
  for (let i = 0; i < answersArr.length; i++) {
    const { row, column, value, answer } = answersArr[i];
    await tapID(ids.CELL_ROW_COLUMN(row, column, value))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(answer))();
  }
};

export const tapLeaderboardConsentSwitch =
  (leaderboard: SocialGroupLeaderboard, consent: boolean) => async () => {
    await tapID(ids.LEADERBOARD_SWITCH(leaderboard.type, consent))();
  };
