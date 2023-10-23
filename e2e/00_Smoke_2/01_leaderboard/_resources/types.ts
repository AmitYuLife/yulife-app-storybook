export interface SocialGroupLeaderboard {
    type: string,
    title: string,
    desc: string,
}

export interface UserLeaderboardListItem {
    name: string,
    score: string,
    rank: number,
    secondaryRank?: number
    // The order of users with the same score can be random, so a second rank field can be used if needed
}