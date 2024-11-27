import { CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_20, CUSTOMER_39, CUSTOMER_40, CUSTOMER_44, CUSTOMER_47, CUSTOMER_48, CUSTOMER_49, CUSTOMER_50, CUSTOMER_51, CUSTOMER_73 } from "../../_data";
import { SocialGroupLeaderboard, UserLeaderboardListItem } from "./types";

const highlightedColour = "#464647"
const notHighlitedColour = "#5C5757"


export const DefaultStepsLeaderboard: SocialGroupLeaderboard = {
    type: "Steps",
    title: "Steps Leaderboard",
    desc: "30 days rolling, Steps",
}

export const DefaultYudokuLeaderboard: SocialGroupLeaderboard = {
    type: "Yudoku",
    title: "Yudoku Leaderboard",
    desc: "Daily, fastest time to completion",
}

// Stanley
export const User16LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_16.data.firstName} ${CUSTOMER_16.data.lastName}`,
    score: "50",
    rank: 5,
}

// Ryan
export const User17LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_17.data.firstName} ${CUSTOMER_17.data.lastName}`,
    score: "250",
    rank: 4
}

// Michael
export const User18LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_18.data.firstName} ${CUSTOMER_18.data.lastName}`,
    score: "800",
    rank: 3,
    highlightColour: notHighlitedColour
}

// Oscar
export const User20LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_20.data.firstName} ${CUSTOMER_20.data.lastName}`,
    score: "3,125",
    rank: 2
}

// Emma
export const User40LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_40.data.firstName} ${CUSTOMER_40.data.lastName}`,
    score: "375,000",
    rank: 1
}

// Gill
export const User47LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_47.data.firstName} ${CUSTOMER_47.data.lastName}`,
    score: "10,000",
    rank: 2,
    highlightColour: highlightedColour
}

// Lynton
export const User50LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_50.data.firstName} ${CUSTOMER_50.data.lastName}`,
    score: "12,800",
    rank: 1
}

// Eugene
export const User39LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_39.data.firstName} ${CUSTOMER_39.data.lastName}`,
    score: "75,000",
    rank: 1
}

// Trump
export const User44LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_44.data.firstName} ${CUSTOMER_44.data.lastName}`,
    score: "32,000",
    rank: 2
}

// Tywin
export const User73LeaderboardItem: UserLeaderboardListItem = {
    name: `${CUSTOMER_73.data.firstName} ${CUSTOMER_73.data.lastName}`,
    score: "50",
    rank: 2
}