import gql from "graphql-tag";
import { ExecutionResult } from "graphql";
import client from "../_core/client";
import { RefreshSession, RefreshSessionVariables } from "../_core/schema";

export const GQL_MUTATION_REFRESH_SESSION = gql`
  mutation RefreshSession($tokenExpiration: Int!, $intercomHashMethod: IntercomHashMethod) {
    refreshSession(tokenExpiration: $tokenExpiration, intercomHashMethod: $intercomHashMethod) {
      token
      expiresAt
      message
      intercomHash
    }
  }
`;

export type RefreshSessionExecutionResult = ExecutionResult<RefreshSession>;

export default (variables: RefreshSessionVariables) =>
  client().mutate<RefreshSession, RefreshSessionVariables>({
    mutation: GQL_MUTATION_REFRESH_SESSION,
    variables,
  });
