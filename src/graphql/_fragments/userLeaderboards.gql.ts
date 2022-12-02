import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_LEADERBOARDS = gql`
  fragment Leaderboard on Leaderboard {
    leaderboardId
    name
    consent
    hasAccepted
    inviteFrom
  }
`;
