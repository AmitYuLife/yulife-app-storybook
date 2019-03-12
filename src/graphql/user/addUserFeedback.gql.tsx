import gql from "graphql-tag";
import * as React from "react";
import { Mutation, MutationFn, MutationProps, MutationResult } from "react-apollo";
import { AddUserFeedback, AddUserFeedbackVariables } from "../_core/schema";

export const addUserFeedbackGql = gql`
    mutation AddUserFeedback($rating: Int!, $comment: String) {
        addUserFeedback(rating: $rating, comment: $comment) {
            message
        }
    }
`;

export type AddUserFeedbackResultType = MutationResult<AddUserFeedback>;
export type AddUserFeedbackMutationFunction = MutationFn<AddUserFeedback, AddUserFeedbackVariables>;

export default function AddUserFeedbackMutation(
    props: Partial<MutationProps<AddUserFeedback, AddUserFeedbackVariables>>
) {
    return <Mutation {...props as any} mutation={addUserFeedbackGql} />;
}
