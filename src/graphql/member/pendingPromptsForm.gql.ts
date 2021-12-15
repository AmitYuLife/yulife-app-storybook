import gql from "graphql-tag";
import client from "../_core/client";
import { PendingPromptsForm } from "../_core/schema";
import { FeedbackFormQuestionType } from "@graphql/_core/schema/globalTypes";

export const SUPPORTED_TYPES = [
  FeedbackFormQuestionType.COMMENT,
  FeedbackFormQuestionType.NUMBER_SLIDER,
  FeedbackFormQuestionType.MULTIPLE_CHOICE,
];

export const GQL_PENDING_PROMPTS_FORM = gql`
  query PendingPromptsForm($supportedTypes: [FeedbackFormQuestionType]) {
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
    pendingFeedbackForm(supportedTypes: $supportedTypes) {
      __typename
      id
      title
      label
      awardYucoin
      questions {
        __typename
        key
        questionText
        description
        image {
          id
          uri
        }
        icon {
          id
          uri
        }
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
        options {
          id
          label
          value
        }
      }
    }
  }
`;

export const pendingFeedbackFormQuery = () =>
  client().query<PendingPromptsForm>({
    query: GQL_PENDING_PROMPTS_FORM,
    fetchPolicy: "network-only",
    variables: {
      supportedTypes: SUPPORTED_TYPES,
    },
  });
