import { gql } from "@apollo/client";

export const GQL_QUERY_GET_SUDOKU_BOARDS = gql`
  query GetSudokuBoard {
    getSudokuBoard {
      boards {
        difficulty
        solution
        puzzle
      }
      date
      stats {
        personalBest
        leaderboardId
      }
      results {
        mistakes
        hints
        adjustedTime
        difficulty
      }
    }
  }
`;
