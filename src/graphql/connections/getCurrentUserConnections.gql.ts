import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetCurrentUser } from "../_core/schema";

const GQL_QUERY_GET_USER_CONNECTIONS = gql`
  query GetConnections {
    getCurrentUser {
      __typename
      id
      connections {
        name
        isConnected
        lastUpdated
      }
    }
  }
`;

export const getCurrentUserConnectionsWithClient = () => {
  return client().query<GetCurrentUser>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_CONNECTIONS,
  });
};
