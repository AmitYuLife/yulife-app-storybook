import { GQL_FRAGMENT_GOAL } from "@graphql/_fragments";
import { gql } from "@apollo/client";

export const GQL_MUTATION_JOIN_GOAL = gql`
  ${GQL_FRAGMENT_GOAL}
  mutation JoinGoal($goalId: String!) {
    joinGoal(goalId: $goalId) {
      ...UserProfileEvents
    }
  }
`;
