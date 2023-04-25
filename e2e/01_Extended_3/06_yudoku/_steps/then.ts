import { idNotVisible, navigation, textNotVisible } from "@navigation";
import { todaysDate } from "./constants";
import { CHALLENGE_SET_SCROLL, LEADERBOARD_NAME, RANK, SCORE, SUDOKU_HOWTOPLAY_BUTTON, SUDOKU_JOINLEADERBOARD_BUTTON, SUDOKU_LEADERBOARD, SUDOKU_STAGING_SCREEN_SCROLL, SUDOKU_STAT, TAKE_A_CHALLENGE_LEFT_BUTTON, TODAYS_EARNINGS} from "@ids"
import { CUSTOMER_1, CUSTOMER_86, SUDOKU_ANSWER_1 } from "@data";
import { getDuration } from "@socket";
import { SUDOKU_STAT_0, SUDOKU_STAT_1 } from "_utils/data/mongo/game_sudoku_stats";


export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible
} = navigation.scrolling

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible
} = navigation.common;

export const canSeeSudokuTile = async () => {
  await scrollUntilTextVisible(CHALLENGE_SET_SCROLL, "yudoku", "down")()
  await textVisible("yudoku")()
}

export const amOnSudokuPage = async () => {
  await textVisible("Yudoku")()
  await idVisible(SUDOKU_HOWTOPLAY_BUTTON)()
  await idVisible(SUDOKU_JOINLEADERBOARD_BUTTON)()
  await textVisible(todaysDate)()
}

export const amOnSudokuHowToPlay = async () => {
  await textVisible("How to play Yudoku")()
}

export const amOnLeaderboardIntroModal = async () => {
  await textVisible("Join the daily Yudoku leaderboard?")()
}

export const canSeeStartPrompt = async () => {
  await textVisible("Complete a Yudoku and be the first on the leaderboard today!")
}

export const canSeeEmptyLeaderboard = async () => {
  await textVisible("Complete a Yudoku and be the first on the leaderboard today!")
}

export const amOnSudokuChallenge = async () => {
  await textVisible("Mistakes: 0/3")()
}

export const canSeeMistakes = (numOfMistakes: number) => async () => {
  await textVisible(`Mistakes: ${numOfMistakes}/3`)()
}

export const canSeeSudokuPauseModal = (numOfMistakes: number, difficulty: string) => async () => {
  await textVisible('Pause')()
  await textVisible(`${numOfMistakes} / 3`)()
  await textVisible("Time")()
  await textVisible(difficulty)()
}

export const cannotSeePauseModal = async () => {
  await textNotVisible('Pause')()
}

export const canSeeHomeAfterLeaderboardJoin = async () => {
  await textVisible("Today's Leaderboard")()
}

export const amOnYudokuCompleted = (hintsNum: number, mistakesNum: number) => async () => {
  await textVisible("Great work!", 4000)()
  await textVisible("Come back tomorrow for a new round.")()
  await idVisible(SUDOKU_STAT("Hints", hintsNum))()
  await idVisible(SUDOKU_STAT("Mistakes", mistakesNum))()
  await idVisible(SUDOKU_STAT("Reward", 60))()
}

export const onMidGamePausedScreen = async () => {
  await textVisible("Cancel", 1000)()
  await textVisible("Yudoku Paused")()
  await textVisible(todaysDate)()
}

export const onSudokuSummaryScreen = (hintsNum: number, mistakesNum: number, customer: typeof CUSTOMER_86) => async () => {
  await textVisible(todaysDate)()
  await idVisible(SUDOKU_STAT("Hints", hintsNum))()
  await idVisible(SUDOKU_STAT("Mistakes", mistakesNum))()
  await textNotVisible("n/a")()
  await scrollUntilTextVisible(SUDOKU_STAGING_SCREEN_SCROLL, "You can only do one Yudoku per day.\nCome back tomorrow!", "down")()
  await textVisible("You can only do one Yudoku per day.\nCome back tomorrow!")()
}

export const canSeeLeaderboard = (user: typeof CUSTOMER_86, answer: typeof SUDOKU_ANSWER_1, rank: number, isOnHomeScreen = false) => async () => {
  const time = getDuration(answer.data.adjustedTime)

  if (isOnHomeScreen) {
    await idVisible(SUDOKU_LEADERBOARD(rank, user.data.fullName, time))()
  } else {
    await idVisible(LEADERBOARD_NAME(user.data.fullName), 2000)()
    await idVisible(SCORE(time))()
    await idVisible(RANK(user.data.fullName, rank))()
  }
}

export const canSeeManuallyEnteredLeaderboard = (user: typeof CUSTOMER_86, rank: number) => async () => {
  await textVisible(`${rank}. ${user.data.fullName}`)()
}

export const cannotSeeStartGame = async () => {
  await textNotVisible("Start game")()
}

export const canSeeEarntSudoku = (time: string) => async () => {
  await scrollUntilIdVisible(TODAYS_EARNINGS, TAKE_A_CHALLENGE_LEFT_BUTTON, "down")()
  await textVisible(`Sudoku (${time} mins)`)()
}

export const cannotSeeLeaderboard = async () => {
  await textNotVisible("Today's Leaderboard")()
}

export const canSeePersonalBest = (stat: typeof SUDOKU_STAT_0) => async () => {
  const time = getDuration(stat.data.personalBest)
  await idVisible(SUDOKU_STAT("Personal best", time))()
}

export const plus30sIsVisible = async () => {
  await textVisible("+30s")()
}

export const hintInfoTooltipIsVisible = async () => {
  await textVisible("Hints")()
  await textVisible("Each time you use the hint button you will lose 30 seconds of your time.")()
}

export const canSeeCompleted = async () => {
  await scrollUntilTextVisible(CHALLENGE_SET_SCROLL, "Completed", "down")()
  await textVisible("Completed")
}

export const amOnCancelPage = async () => {
  await textVisible("Call it quits?")()
}

export const canSeeAttemptDisclaimer = async () => {
  await textVisible("As this is your second attempt today your time will not be ranked on the leaderboard and will not count towards your personal best.")()
}