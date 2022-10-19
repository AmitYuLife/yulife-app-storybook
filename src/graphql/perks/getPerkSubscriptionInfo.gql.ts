import {
  GQL_FRAGMENT_CONTENT_ITEM_FORM,
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
} from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PERK_SUBSCRIPTION_INFO = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}

  query GetPerkSubscriptionInfo($perkId: ID!) {
    getPerkSubscriptionInfo(perkId: $perkId) {
      content {
        __typename
        ... on ContentItemText {
          ...ContentItemText
        }
        ... on ContentItemImage {
          ...ContentItemImage
        }
        ... on ContentItemMarkdown {
          id
          title
          markdown
          parsedMarkdown
        }
        ... on ContentItemBox {
          id
          title
          markdown
          parsedMarkdown
          canCopy
        }
        ... on ContentItemButton {
          id
          label
          uri
          icon {
            id
            uri
          }
        }
        ... on ContentItemImage {
          id
          image {
            id
            uri
          }
        }
        ... on ContentItemForm {
          ...ContentItemForm
        }
      }
    }
  }
`;
