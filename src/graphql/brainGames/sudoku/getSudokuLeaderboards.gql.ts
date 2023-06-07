import { gql } from "@apollo/client";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "@graphql/_fragments/avatarRemoteFiles.gql";
import { GQL_FRAGMENT_SUDOKU_LEADERBOARD } from "@graphql/_fragments/sudokuLeaderboard";

export const GQL_QUERY_GET_SODUKU_LEADERBOARD = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}
  ${GQL_FRAGMENT_SUDOKU_LEADERBOARD}

  query GetSudokuLeaderboard($date: String!, $difficulty: SudokuDifficulty, $limit: Int!) {
    getSudokuLeaderboard(date: $date, difficulty: $difficulty, limit: $limit) {
      ...SudokuLeaderboard
    }
  }
`;
