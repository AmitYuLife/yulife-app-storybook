import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_LEADERBOARDS } from "@graphql/_fragments/userLeaderboards.gql";
import client from "../_core/client";
import { GetUserLeaderboards } from "../_core/schema";

export const GQL_QUERY_GET_USER_LEADERBOARDS = gql`
  ${GQL_FRAGMENT_USER_LEADERBOARDS}
  query GetUserLeaderboards {
    getUserLeaderboards {
      ...Leaderboard
    }
  }
`;

export default function getUserLeaderboards() {
  return client().query<GetUserLeaderboards>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_LEADERBOARDS,
  });
}
