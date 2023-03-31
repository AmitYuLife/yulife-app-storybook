import { GetLeaderboard_getLeaderboard_avatarRemoteFiles } from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";

export interface ILeaderboardRankItemProps {
  isCurrentUser: boolean;
  rank: number;
  score: number | string;
  name: string;
  uri: GetLeaderboard_getLeaderboard_avatarRemoteFiles["pngFull"];

  // props required for duels
  id: string;
  firstName: string;
  lastName: string;
  index: number;
  componentId?: typeof ROUTES[keyof typeof ROUTES];
}
