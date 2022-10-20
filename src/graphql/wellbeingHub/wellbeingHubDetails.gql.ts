import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON, GQL_FRAGMENT_CONTENT_ITEM_FORM, GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_DETAILS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}

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
        __typename
        ... on ContentItemText {
          ...ContentItemText
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
          ...ContentItemButton
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
