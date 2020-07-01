import gql from "graphql-tag";
import { GQL_FRAGMENT_AVATAR } from "../yuscreen/_fragments.gql";

export const GQL_QUERY_LEADERBOARD = gql`
  ${GQL_FRAGMENT_AVATAR}

  query GetLeaderboard($sortBy: String, $leaderboardId: String) {
    getLeaderboard(sortBy: $sortBy, leaderboardId: $leaderboardId) {
      __typename
      id
      firstName
      lastName
      name
      coins
      steps
      avatar {
        ...YuAvatar
      }
    }
    getCurrentUser {
      __typename
      id
    }
  }
`;
