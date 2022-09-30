import { GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_STYLE } from "@graphql/_fragments/shared.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_DETAILS = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  query GetWellbeingHubItem($id: ID!, $os: OS) {
    wellbeingHubItem(id: $id, os: $os) {
      id
      title
      description
      thumbnail {
        id
        uri(options: { width: 800, height: 400, crop: "fit" })
      }
      icon {
        id
        uri
      }
      content {
        ... on ContentItemText {
          __typename
          ...ContentItemText
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
