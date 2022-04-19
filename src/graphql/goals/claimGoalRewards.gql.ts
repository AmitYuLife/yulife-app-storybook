import { GQL_FRAGMENT_GOAL_DETAILS } from "@graphql/_fragments";
import gql from "graphql-tag";

export const GQL_MUTATION_CLAIM_GOAL_REWARDS = gql`
  ${GQL_FRAGMENT_GOAL_DETAILS}
  mutation ClaimGoalRewards($rewardIds: [String!]!) {
    claimGoalRewards(rewardIds: $rewardIds) {
      ...GoalDetails
    }
  }
`;
