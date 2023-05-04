import { gql } from "@apollo/client";

export const GQL_QUERY_GET_SUDOKU_STATS = gql`
  query GetSudokuStats {
    getSudokuStats {
      leaderboardId
    }
  }
`;
