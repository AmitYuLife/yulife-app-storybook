import { GetLeaderboard_getLeaderboard_avatarRemoteFiles } from "@graphql/_core/schema";

export interface ILeaderboardRankItemProps {
  isCurrentUser: boolean;
  rank: number;
  score: number;
  name: string;
  uri: GetLeaderboard_getLeaderboard_avatarRemoteFiles["pngFull"];

  // props required for duels
  id: string;
  firstName: string;
  lastName: string;
  duelDialogId: string;
  setDuelDialogId: React.Dispatch<React.SetStateAction<string>>;
  showDuels: boolean;
  index: number;
}
