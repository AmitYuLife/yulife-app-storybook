import { gql } from "@apollo/client";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";

export const GQL_QUERY_LEADERBOARD = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}
  query GetLeaderboard($sortBy: String, $leaderboardId: String, $limit: Int, $targetId: ID) {
    getLeaderboard(sortBy: $sortBy, leaderboardId: $leaderboardId, limit: $limit, targetId: $targetId) {
      __typename
      id
      name
      firstName
      lastName
      coins
      steps
      userId
      isTarget
      position
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;
