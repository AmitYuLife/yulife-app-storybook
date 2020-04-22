import { MutationTuple } from "@apollo/react-hooks";
import { AddUserFeedback, AddUserFeedbackVariables } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_ADD_USER_FEEDBACK = gql`
  mutation AddUserFeedback($rating: Int!, $comment: String) {
    addUserFeedback(rating: $rating, comment: $comment) {
      message
    }
  }
`;

export type AddUserFeedbackMutationTuple = MutationTuple<AddUserFeedback, AddUserFeedbackVariables>;
