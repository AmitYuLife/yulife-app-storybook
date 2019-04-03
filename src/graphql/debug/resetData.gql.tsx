import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn, MutationProps, MutationResult } from "react-apollo";
import { ResetData, ResetDataVariables } from "../_core/schema";

export const resetDataGql = gql`
    mutation ResetData($code: String!, $type: String) {
        resetData(code: $code, type: $type)
    }
`;

export type ResetDataResultType = MutationResult<ResetData>;
export type ResetDataMutationFunction = MutationFn<ResetData, ResetDataVariables>;

export default function ResetDataMutation(
    props: Partial<MutationProps<ResetData, ResetDataVariables>>
) {
    return <Mutation {...props as any} mutation={resetDataGql} />;
}
