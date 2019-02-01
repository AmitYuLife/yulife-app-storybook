import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

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

export default class AddUserFeedbackMutation extends Mutation<AddUserFeedback, AddUserFeedbackVariables> {}
