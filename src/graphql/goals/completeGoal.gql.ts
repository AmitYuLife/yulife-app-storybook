import { gql } from "@apollo/client";

export const GQL_MUTATION_COMPLETE_GOAL = gql`
  mutation CompleteGoal($participationId: String!) {
    completeGoal(participationId: $participationId)
  }
`;
