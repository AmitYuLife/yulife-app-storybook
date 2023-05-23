import { gql } from "@apollo/client";

export const GQL_QUERY_GET_SUDOKU_PRACTICE = gql`
  query GetSudokuPractice {
    getSudokuPractice {
      solution
      puzzle
      difficulty
      config {
        PENALTY_HINT
        MISTAKES_BEFORE_PENALTY
        MISTAKE_PENALTY_TIME
        HINT_COOLDOWN
      }
    }
  }
`;
