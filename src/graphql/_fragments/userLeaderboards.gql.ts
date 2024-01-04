import { gql } from "@apollo/client";

// @TODO: Purge this when leadeboard legacy gets purged
export const GQL_FRAGMENT_USER_LEADERBOARDS = gql`
  fragment Leaderboard on Leaderboard {
    leaderboardId
    name
    metric
    days
    consent
    hasAccepted
    inviteFrom
  }
`;
