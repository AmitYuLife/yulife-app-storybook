import { gql } from "@apollo/client";
import { GQL_FRAGMENT_USER_CONNECTIONS } from "@graphql/_fragments/userConnections.gql";
import client from "../_core/client";
import { GetUserConnections } from "../_core/schema";

export const GQL_QUERY_GET_USER_CONNECTIONS = gql`
  ${GQL_FRAGMENT_USER_CONNECTIONS}
  query GetUserConnections {
    getUserConnections {
      ...UserConnections
    }
  }
`;

export default function getUserConnections() {
  return client().query<GetUserConnections>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_CONNECTIONS,
  });
}
