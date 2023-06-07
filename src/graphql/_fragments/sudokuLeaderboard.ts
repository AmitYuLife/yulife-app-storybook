import { gql } from "@apollo/client";

export const GQL_FRAGMENT_SUDOKU_LEADERBOARD = gql`
  fragment SudokuLeaderboard on SudokuLeaderboardItem {
    name
    adjustedTime
    userId
    name
    position
    avatarRemoteFiles {
      ...YumojiRemoteFiles
    }
  }
`;
