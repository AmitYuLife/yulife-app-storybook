import { gql } from "@apollo/client";

export const GQL_MUTATION_TOGGLE_CHALLENGE_PAUSE = gql`
  mutation ToggleChallengePause($paused: Boolean!, $levelSlotId: String!) {
    toggleChallengePause(paused: $paused, levelSlotId: $levelSlotId)
  }
`;
