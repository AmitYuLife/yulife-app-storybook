import gql from "graphql-tag";
import { MutationTuple } from "@apollo/react-hooks";
import { SubmitAppStoreReviewActionVariables, SubmitAppStoreReviewAction } from "@graphql/_core/schema";

export const GQL_SUBMIT_APP_STORE_REVIEW_ACTION = gql`
  mutation SubmitAppStoreReviewAction($id: ID!, $action: AppStoreReviewPromptAction!) {
    submitAppStoreReviewAction(id: $id, action: $action)
  }
`;

export type SubmitAppStoreReviewActionMutationTuple = MutationTuple<
  SubmitAppStoreReviewAction,
  SubmitAppStoreReviewActionVariables
>;
