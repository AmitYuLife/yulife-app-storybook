import { gql } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetUserProfileEvents } from "@graphql/_core/schema";
import { GQL_FRAGMENT_GOAL } from "@graphql/_fragments";

export const GQL_QUERY_GET_USER_PROFILE_EVENTS = gql`
  ${GQL_FRAGMENT_GOAL}
  query GetUserProfileEvents {
    getUserProfileEvents {
      ...UserProfileEvents
    }
  }
`;

export default function getUserProfileEvents() {
  return client().query<GetUserProfileEvents>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_PROFILE_EVENTS,
    variables: {},
  });
}
