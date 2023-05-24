import { gql } from "@apollo/client";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "@graphql/_fragments/avatarRemoteFiles.gql";

export const GQL_QUERY_GET_SODUKU_LEADERBOARD = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetSudokuLeaderboard($date: String!, $difficulty: SudokuDifficulty, $limit: Int!) {
    getSudokuLeaderboard(date: $date, difficulty: $difficulty, limit: $limit) {
      name
      adjustedTime
      userId
      name
      position
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;
