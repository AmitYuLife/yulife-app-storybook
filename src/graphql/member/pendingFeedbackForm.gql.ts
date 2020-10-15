import gql from "graphql-tag";
import client from "../_core/client";
import { PendingFeedbackForm } from "../_core/schema";

export const GQL_PENDING_FEEDBACK_FORM = gql`
  query PendingFeedbackForm {
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
  client().query<PendingFeedbackForm>({
    query: GQL_PENDING_FEEDBACK_FORM,
    fetchPolicy: "network-only",
  });
