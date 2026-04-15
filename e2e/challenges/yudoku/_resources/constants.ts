import moment from "moment"

export const todaysDate = () => moment().format("DD MMM YYYY")
export const pauseScreenDate = () => moment().format("DD MMM YYYY")

export const PracticeYudokuAnswers = [
    // row 1 - misses out row 1 cell 4 as it is filled in by using the hint in the practice yudoku scenario
    {row: 0, column: 5, value: 0, answer: 7},
    {row: 0, column: 6, value: 0, answer: 6},
    {row: 0, column: 8, value: 0, answer: 9},
    // row 2
    {row: 1, column: 0, value: 0, answer: 3},
    {row: 1, column: 1, value: 0, answer: 6},
    {row: 1, column: 2, value: 0, answer: 8},
    {row: 1, column: 3, value: 0, answer: 9},
    {row: 1, column: 4, value: 0, answer: 2},
    {row: 1, column: 5, value: 0, answer: 1},
    {row: 1, column: 6, value: 0, answer: 7},
    // row 3
    {row: 2, column: 4, value: 0, answer: 5},
    {row: 2, column: 5, value: 0, answer: 4},
    {row: 2, column: 8, value: 0, answer: 2},
    // row 4
    {row: 3, column: 3, value: 0, answer: 7},
    {row: 3, column: 4, value: 0, answer: 8},
    {row: 3, column: 7, value: 0, answer: 2},
    {row: 3, column: 8, value: 0, answer: 6},
    // row 5
    {row: 4, column: 0, value: 0, answer: 1},
    {row: 4, column: 1, value: 0, answer: 8},
    {row: 4, column: 2, value: 0, answer: 9},
    {row: 4, column: 4, value: 0, answer: 6},
    {row: 4, column: 6, value: 0, answer: 4},
    {row: 4, column: 7, value: 0, answer: 7},
    {row: 4, column: 8, value: 0, answer: 3},
    // row 6
    {row: 5, column: 0, value: 0, answer: 7},
    {row: 5, column: 1, value: 0, answer: 2},
    {row: 5, column: 4, value: 0, answer: 4},
    {row: 5, column: 5, value: 0, answer: 3},
    // row 7
    {row: 6, column: 0, value: 0, answer: 5},
    {row: 6, column: 3, value: 0, answer: 4},
    {row: 6, column: 4, value: 0, answer: 1},
    // row 8
    {row: 7, column: 2, value: 0, answer: 4},
    {row: 7, column: 3, value: 0, answer: 2},
    {row: 7, column: 4, value: 0, answer: 7},
    {row: 7, column: 5, value: 0, answer: 5},
    {row: 7, column: 6, value: 0, answer: 9},
    {row: 7, column: 7, value: 0, answer: 6},
    {row: 7, column: 8, value: 0, answer: 1},
    // row 9 
    {row: 8, column: 0, value: 0, answer: 6},
    {row: 8, column: 2, value: 0, answer: 1},
    {row: 8, column: 3, value: 0, answer: 3},
    {row: 8, column: 5, value: 0, answer: 8},
  ]

  export const leaderboardConsentHeading = "Join the Leaderboard?"
  export const leaderboardConsentDesc = "By joining the leaderboard, you are consenting to share details about your activity with other members of a leaderboard. You can opt out at any time via the settings menu."
  export const leaderboardConsentCta = 'Join the Leaderboard'