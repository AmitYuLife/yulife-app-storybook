import gql from "graphql-tag";
import client from "../_core/client";
import { PendingPromptsForm } from "../_core/schema";

export const GQL_PENDING_PROMPTS_FORM = gql`
  query PendingPromptsForm {
    pendingAppStoreReview {
      __typename
      id
      image
      title
      body
      rejectedTitle
      rejectedBody
      showAfterEvent
      showAfterSeconds
    }
    pendingFeedbackForm {
      __typename
      id
      title
      questions {
        __typename
        key
        questionText
        type
        isRoot
        range {
          __typename
          id
          min
          max
        }
        labels {
          __typename
          id
          left
          right
          placeholder
          submit
        }
        nextConditions {
          __typename
          id
          questionKey
          regexMatch
        }
      }
    }
  }
`;

export const pendingFeedbackFormQuery = () =>
  client().query<PendingPromptsForm>({
    query: GQL_PENDING_PROMPTS_FORM,
    fetchPolicy: "network-only",
  });
