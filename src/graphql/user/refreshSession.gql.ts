import gql from "graphql-tag";
import client from "../_core/client";
import { RefreshSession, RefreshSessionVariables } from "../_core/schema";

export const refreshSessionGql = gql`
    mutation RefreshSession(
        $tokenExpiration: Int!
        $intercomHashMethod: IntercomHashMethod
    ) {
        refreshSession(
            tokenExpiration: $tokenExpiration
            intercomHashMethod: $intercomHashMethod
        ) {
            token
            expiresAt
            message
            intercomHash
        }
    }
`;

export default (variables: RefreshSessionVariables) =>
    client().mutate<RefreshSession, RefreshSessionVariables>({
        mutation: refreshSessionGql,
        variables
    });
