import gql from "graphql-tag";
import client from "../_core/client";
import { GetCurrentUser } from "../_core/schema";

const getCurrentUserConnectionsGql = gql`
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

export default function getCurrentUserConnectionsWithClient() {
    return client().query<GetCurrentUser>({
        fetchPolicy: "network-only",
        query: getCurrentUserConnectionsGql
    });
}
