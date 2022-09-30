import { gql } from "@apollo/client";
import { MutationTuple } from "@apollo/client";
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
