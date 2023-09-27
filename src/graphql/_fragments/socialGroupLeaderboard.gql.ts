import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "./shared.gql";

export const GQL_FRAGMENT_SOCIAL_GROUP_LEADERBOARD = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment SocialGroupLeaderboard on SocialGroupLeaderboard {
    leaderboardId
    name
    description
    shortDescription
    consent
    isLocked
    leaderboardConfigId
    icon {
      ...RemoteImage
    }
    selectedIcon {
      ...RemoteImage
    }
  }
`;
