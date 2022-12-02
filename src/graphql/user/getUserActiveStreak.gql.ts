import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_ACTIVE_STREAK } from "@graphql/_fragments/userActiveStreak.gql";
import client from "../_core/client";
import { GetUserActiveStreak } from "../_core/schema";

export const GQL_QUERY_GET_USER_ACTIVE_STREAK = gql`
  ${GQL_FRAGMENT_USER_ACTIVE_STREAK}
  query GetUserActiveStreak {
    getUserActiveStreak {
      ...UserActiveStreak
    }
  }
`;

export default function getUserActiveStreak() {
  return client().query<GetUserActiveStreak>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_ACTIVE_STREAK,
  });
}
