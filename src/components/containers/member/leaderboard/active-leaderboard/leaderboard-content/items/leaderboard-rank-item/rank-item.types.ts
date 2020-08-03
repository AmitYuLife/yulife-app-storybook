import { GetLeaderboard_getLeaderboard_avatarRemoteFiles } from "@graphql/_core/schema";

export interface ILeaderboardRankItemProps {
  isCurrentUser: boolean;
  rank: number;
  score: number;
  name: string;
  uri: GetLeaderboard_getLeaderboard_avatarRemoteFiles["pngFull"];
}
