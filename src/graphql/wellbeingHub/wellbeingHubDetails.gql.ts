import {
  GQL_FRAGMENT_CONTENT_ITEM_BOX,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_FORM,
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
} from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_WELLBEING_HUB_DETAILS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_BOX}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}

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
          ...ContentItemMarkdown
        }
        ... on ContentItemBox {
          ...ContentItemBox
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemImage {
          ...ContentItemImage
        }
        ... on ContentItemForm {
          ...ContentItemForm
        }
      }
    }
  }
`;
