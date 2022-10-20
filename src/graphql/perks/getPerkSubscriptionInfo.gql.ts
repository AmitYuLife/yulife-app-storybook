import {
  GQL_FRAGMENT_CONTENT_ITEM_BOX,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_FORM,
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
} from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PERK_SUBSCRIPTION_INFO = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_BOX}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
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
          ...ContentItemMarkdown
        }
        ... on ContentItemBox {
          ...ContentItemBox
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemForm {
          ...ContentItemForm
        }
      }
    }
  }
`;
