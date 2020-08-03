import gql from "graphql-tag";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";

export const GQL_QUERY_LEADERBOARD = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetLeaderboard($sortBy: String, $leaderboardId: String) {
    getLeaderboard(sortBy: $sortBy, leaderboardId: $leaderboardId) {
      __typename
      id
      name
      coins
      steps
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;
