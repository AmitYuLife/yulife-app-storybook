import { gql } from "@apollo/client";

export const GQL_QUERY_GET_SUDOKU_BOARDS = gql`
  query GetSudokuBoard($date: String) {
    getSudokuBoard(date: $date) {
      boards {
        difficulty
        solution
        puzzle
        config {
          PENALTY_HINT
          MISTAKES_BEFORE_PENALTY
          MISTAKE_PENALTY_TIME
          HINT_COOLDOWN
        }
      }
      date
      stats {
        personalBest
        leaderboardId
      }
      results {
        mistakes
        hints
        leaderboardId
        adjustedTime
        difficulty
      }
      leaderboardEligible
    }
  }
`;
