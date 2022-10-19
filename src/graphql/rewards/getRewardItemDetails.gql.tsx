import { GQL_FRAGMENT_CONTENT_ITEM_FORM, GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "@graphql/_fragments/content.gql";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_REWARD_ITEM_DETAILS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}

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
