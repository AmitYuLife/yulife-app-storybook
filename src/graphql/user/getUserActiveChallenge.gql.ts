import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_ACTIVE_CHALLENGE } from "@graphql/_fragments/userActiveChallenge.gql";
import client from "../_core/client";
import { GetUserActiveChallenge } from "../_core/schema";

export const GQL_QUERY_GET_USER_ACTIVE_CHALLENGE = gql`
  ${GQL_FRAGMENT_USER_ACTIVE_CHALLENGE}
  query GetUserActiveChallenge {
    getUserActiveChallenge {
      ...UserActiveChallenge
    }
  }
`;

export default function getUserActiveChallenge() {
  return client().query<GetUserActiveChallenge>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_ACTIVE_CHALLENGE,
  });
}
