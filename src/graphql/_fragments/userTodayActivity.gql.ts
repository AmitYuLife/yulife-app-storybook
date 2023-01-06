import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_TODAY_ACTIVITY = gql`
  fragment UserTodayActivity on ActivityHistoryChallenge {
    id
    earned
    milestones
    name
    score
  }
`;
