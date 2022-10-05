import { gql } from "@apollo/client";
import { GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS } from "@graphql/_fragments";

export const GQL_MUTATION_JOIN_WEEKLY_GOAL = gql`
  ${GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS}
  mutation JoinWeeklyGoal($goalId: String!) {
    joinWeeklyGoal(goalId: $goalId) {
      ...MobileWeeklyActivityProgress
    }
  }
`;
