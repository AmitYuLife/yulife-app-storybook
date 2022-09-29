import { gql } from "@apollo/client";
import { MutationTuple } from "@apollo/client";
import { SubmitFeedbackForm, SubmitFeedbackFormVariables } from "@graphql/_core/schema/SubmitFeedbackForm";

export const GQL_SUBMIT_FEEDBACK_FORM = gql`
  mutation SubmitFeedbackForm($id: ID!, $answers: [AnswerInput]) {
    submitFeedbackForm(id: $id, answers: $answers) {
      message
    }
  }
`;

export type SubmitFeedbackFormMutationTuple = MutationTuple<SubmitFeedbackForm, SubmitFeedbackFormVariables>;
