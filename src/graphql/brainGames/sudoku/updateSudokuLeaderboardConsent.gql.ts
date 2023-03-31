import { gql } from "@apollo/client";

export const GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT = gql`
  mutation UpdateSudokuLeaderboardConsent($consent: Boolean!) {
    updateSudokuLeaderboardConsent(consent: $consent)
  }
`;
