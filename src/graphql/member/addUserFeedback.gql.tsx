import gql from "graphql-tag";

import { MutationTuple } from "@apollo/react-hooks";
import { AddUserFeedback, AddUserFeedbackVariables } from "@graphql/_core/schema/AddUserFeedback";

export const GQL_ADD_USER_FEEDBACK = gql`
  mutation AddUserFeedback($rating: Int!, $metric: Metric, $comment: String) {
    addUserFeedback(rating: $rating, metric: $metric, comment: $comment) {
      message
    }
  }
`;

export type AddUserFeedbackMutationTuple = MutationTuple<AddUserFeedback, AddUserFeedbackVariables>;
