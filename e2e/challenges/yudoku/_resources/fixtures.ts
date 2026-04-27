import { CUSTOMER_67, CUSTOMER_68, CUSTOMER_71, SUDOKU_ANSWER_67, SUDOKU_ANSWER_68, SUDOKU_ANSWER_71 } from "../../_data";
import { SocialGroupLeaderboard, UserLeaderboardListItem } from "./types";
import { getDuration } from "@socket";

export const yudokuTimeOnSuccessCard = /^(\d+h )?\d+m \d+s$/;

// Cersei
export const User71LeaderboardItemSudoku: UserLeaderboardListItem = {
    name: `${CUSTOMER_71.data.firstName} ${CUSTOMER_71.data.lastName}`,
    score: getDuration(SUDOKU_ANSWER_71.data.adjustedTime),
    rank: 1
}

// Rishi
export const User67LeaderboardItemSudoku: UserLeaderboardListItem = {
    name: `${CUSTOMER_67.data.firstName} ${CUSTOMER_67.data.lastName}`,
    score: getDuration(SUDOKU_ANSWER_67.data.adjustedTime),
    rank: 2
}

// Alex
export const User68LeaderboardItemSudoku: UserLeaderboardListItem = {
    name: `${CUSTOMER_68.data.firstName} ${CUSTOMER_68.data.lastName}`,
    score: getDuration(SUDOKU_ANSWER_68.data.adjustedTime),
    rank: 3
}

export const DefaultYudokuLeaderboard: SocialGroupLeaderboard = {
    type: "Yudoku",
    title: "Yudoku Leaderboard",
    desc: "Daily, fastest time to completion",
}