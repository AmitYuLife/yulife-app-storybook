export interface SocialGroupLeaderboard {
  type: string;
  title: string;
  desc: string;
}

export interface UserLeaderboardListItem {
  name: string;
  score: string;
  rank: number;
  type?: string;
  highlightColour?: string;
}

export interface ImpactPassLeaderboard {
  name: string;
  score: string | number;
  rank: number;
  type?: string;
}
