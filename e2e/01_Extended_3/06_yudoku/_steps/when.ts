
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps } from "@socket";
import { CELL_ROW_COLUMN, CHALLENGE_SET_SCROLL, SUDOKU_COMPLETED_SCREEN_SCROLL, SUDOKU_HINT, SUDOKU_NUMBER_INPUT, SUDOKU_PAUSE, SUDOKU_STAGING_SCREEN_SCROLL, SUDOKU_UNDO_BUTTON} from "@ids"
import { screens } from "@appScreens";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  dismissNotificationScreenIfVisible
} = navigation.common;

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
} = navigation.scrolling

export const {
  tapMenuItem
} = screens.menu

export const tapSudoku = async () => {
  await scrollUntilTextVisible(CHALLENGE_SET_SCROLL, "Daily Yudoku", "down")()
  await tapText("Daily Yudoku")()
}

export const tapHowToPlay = async () => {
  await tapText("How to play?")()
}

export const tapJoinTheLeaderboard = async () => {
  await tapText("Join the daily leaderboard")()
}

export const tapJoinLeaderboardButton = async () => {
  await swipeFromText("Join the daily Yudoku leaderboard?", "up", "fast")()
  await tapText("Join the Leaderboard")()
}

export const tapStartGame = async () => {
  await scrollUntilTextVisible(SUDOKU_STAGING_SCREEN_SCROLL, "Start game", "down")()
  await tapText("Start game")()
}

export const tapSudokuHint = async () => {
  await tapID(SUDOKU_HINT)()
}

export const tapSudokuPause = async () => {
  await tapID(SUDOKU_PAUSE)()
}

export const tapResumeGame = async () => {
  await tapText("Resume Game")()
}

export const tapResumeSudoku = async () => {
  await tapText("Resume Game")()
}

export const tapCollect = async () => {
  await scrollUntilTextVisible(SUDOKU_COMPLETED_SCREEN_SCROLL, "Collect", "down")()
  await tapText("Collect")()
}

export const tapLeaderboard = async () => {
  await tapText("Daily Leaderboard")()
}

export const tapUseAHint = async () => {
  await tapText("Use a hint")()
}

export const tapUndo = async () => {
  await tapID(SUDOKU_UNDO_BUTTON)()
}

export const tapExitChallenge = async () => {
  await tapText("Exit challenge")()
}

export const completeYudoku = async () => {
  await tapStartGame()
  await dismissNotificationScreenIfVisible()
  await tapID(CELL_ROW_COLUMN(8, 6, 0))()
  await tapID(SUDOKU_NUMBER_INPUT(4))()
  await tapID(CELL_ROW_COLUMN(8, 7, 0))()
  await tapID(SUDOKU_NUMBER_INPUT(7))()
  await tapID(CELL_ROW_COLUMN(8, 8, 0))()
  await tapID(SUDOKU_NUMBER_INPUT(8))()
  await wait(3000)()
  await tapCollect()
}