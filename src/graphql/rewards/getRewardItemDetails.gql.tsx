import {
  GQL_FRAGMENT_CONTENT_ITEM_BOX,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_FORM,
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
} from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_REWARD_ITEM_DETAILS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_BOX}

  query GetRewardItemDetails($id: ID!) {
    getRewardItemDetails(id: $id) {
      id
      name
      code
      rewardProviderId
      availability
      rewardSticker
      confirmAlert {
        title
        okLabel
        cancelLabel
      }
      availableDenominations {
        value
        stock
        yuCoin
        label
        alertMessage
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
