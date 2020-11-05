import gql from "graphql-tag";

export const GQL_MUTATION_JOIN_COMMUNITY_GOAL = gql`
  mutation JoinCommunityGoal($communityGoalId: String!) {
    joinCommunityGoal(communityGoalId: $communityGoalId)
  }
`;
