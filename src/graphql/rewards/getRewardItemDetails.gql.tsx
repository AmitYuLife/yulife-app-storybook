import gql from "graphql-tag";

export const GQL_QUERY_GET_REWARD_ITEM_DETAILS = gql`
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
        message
        okLabel
        cancelLabel
      }
      availableDenominations {
        value
        stock
        yuCoin
      }
      content {
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
              modalPlaceholder
              defaultOption {
                label
                value
              }
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
              type
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
