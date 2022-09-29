import { MutationTuple } from "@apollo/client";
import { gql } from "@apollo/client";
import { ResetData, ResetDataVariables } from "../_core/schema";

export const GQL_MUTATION_RESET_DATA = gql`
  mutation ResetData($code: String!, $type: String) {
    resetData(code: $code, type: $type)
  }
`;

export type ResetDataMutationTuple = MutationTuple<ResetData, ResetDataVariables>;
