import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SOCIAL_GROUP_LEADERBOARD } from "./socialGroupLeaderboard.gql";

export const GQL_FRAGMENT_SOCIAL_GROUP = gql`
  ${GQL_FRAGMENT_SOCIAL_GROUP_LEADERBOARD}

  fragment SocialGroup on SocialGroupLeaderboardGroup {
    socialGroupId
    name
    leaderboards {
      ...SocialGroupLeaderboard
    }
  }
`;
