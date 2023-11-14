import { gql } from "@apollo/client";

export const GQL_QUERY_SOCIAL_GROUP_LEADERBOARD_ITEMS = gql`
  query GetMobileSocialGroupLeaderboardItems(
    $leaderboardId: String!
    $limit: Int
    $targetId: String
    $filter: SocialGroupLeaderboardItemsFilter
  ) {
    getMobileSocialGroupLeaderboardItems(
      leaderboardId: $leaderboardId
      limit: $limit
      targetId: $targetId
      filter: $filter
    ) {
      id
      userId
      score
      name
      position
      isTarget
      firstName
      lastName
      avatar {
        id
        uri
      }
    }
  }
`;
