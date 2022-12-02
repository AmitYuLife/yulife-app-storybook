import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_ACTIVE_STREAK = gql`
  fragment UserActiveStreak on ActiveStreak {
    id
    type
    value
    maxStreak
    streakAwardId
    streak
    nextStreakAvailableAt
  }
`;
