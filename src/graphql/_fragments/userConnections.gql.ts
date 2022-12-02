import { gql } from "@apollo/client";

export const GQL_FRAGMENT_USER_CONNECTIONS = gql`
  fragment UserConnections on Connection {
    name
    isConnected
    lastUpdated
  }
`;
