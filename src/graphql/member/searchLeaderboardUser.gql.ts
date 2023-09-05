import { gql } from "@apollo/client";

export const GQL_QUERY_SEARCH_LEADERBOARD_USER = gql`
  query SearchLeaderboardUser($name: String!, $socialGroupId: ID, $socialGroupLeaderboardId: ID) {
    searchLeaderboardUser(
      name: $name
      socialGroupId: $socialGroupId
      socialGroupLeaderboardId: $socialGroupLeaderboardId
    ) {
      id
      name
      avatar {
        id
        uri
      }
    }
  }
`;
