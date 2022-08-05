import gql from "graphql-tag";

export const GQL_MUTATION_CLAIM_WEEKLY_GAME_REWARDS = gql`
  mutation ClaimMobileGameWeeklyRewards($rewardIds: [String!]!) {
    claimMobileGameWeeklyRewards(rewardIds: $rewardIds)
  }
`;
