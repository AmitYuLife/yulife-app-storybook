import { gql } from "@apollo/client";

export const GQL_MUTATION_SUBMIT_SUDOKU_SOLUTION = gql`
  mutation SubmitSudokuSolution($results: SudokuSubmission!) {
    submitSudokuSolution(results: $results) {
      level
      levelSlotId
      startDateTime
      status
      endDateTime
      incomingData {
        steps
        meditation
        distance
        duration
        calories
      }
      milestoneLog {
        data {
          steps
          meditation
          distance
          duration
          calories
        }
      }
      yuCoinAwarded
      rating
    }
  }
`;
