import { GQL_FRAGMENT_CONTENT_ITEM_IMAGE, GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_STYLE } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_PERK_SUBSCRIPTION_INFO = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  query GetPerkSubscriptionInfo($perkId: ID!) {
    getPerkSubscriptionInfo(perkId: $perkId) {
      content {
        ... on ContentItemText {
          __typename
          ...ContentItemText
        }
        ... on ContentItemImage {
          __typename
          ...ContentItemImage
        }
        ... on ContentItemMarkdown {
          __typename
          id
          title
          markdown
          parsedMarkdown
        }
        ... on ContentItemBox {
          __typename
          id
          title
          markdown
          parsedMarkdown
          canCopy
        }
        ... on ContentItemButton {
          __typename
          id
          label
          uri
          icon {
            id
            uri
          }
        }
        ... on ContentItemImage {
          __typename
          id
          image {
            id
            uri
          }
        }
        ... on ContentItemForm {
          __typename
          elements {
            ... on ContentItemFormSelectInput {
              __typename
              id
              name
              placeholder
              options {
                label
                value
              }
              icon {
                id
                uri
              }
              validation {
                regex
                message
              }
            }
            ... on ContentItemFormTextInput {
              __typename
              id
              name
              placeholder
              defaultValue
              icon {
                id
                uri
              }
              validation {
                regex
                message
              }
            }
            ... on ContentItemFormSubmitButton {
              __typename
              id
              label
            }
          }
        }
      }
    }
  }
`;
