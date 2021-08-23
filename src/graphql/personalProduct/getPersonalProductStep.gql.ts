import gql from "graphql-tag";
import {
  GQL_FRAGMENT_CONTENT_ITEM_STYLE,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR,
  GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_PAD,
  GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR,
  GQL_FRAGMENT_CONTENT_ITEM_RADIO,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT,
  GQL_FRAGMENT_CONTENT_ITEM_OVERLAY,
} from "../_fragments/content.gql";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_OVERLAY}

  query GetPersonalProductStep($productId: String!) {
    getPersonalProductStep(productId: $productId) {
      stepId
      customerProductId
      introStep
      containerStyles {
        ...ContentItemStyle
      }
      body {
        __typename
        ... on ContentItemTextInput {
          ...ContentItemTextInput
        }
        ... on ContentItemPad {
          ...ContentItemPad
        }
        ... on ContentItemMarkdown {
          ...ContentItemMarkdown
        }
        ... on ContentItemRadio {
          ...ContentItemRadio
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemYugiConfirm {
          id
          yugiHeading
          content {
            id
            parsedMarkdown
          }
          buttonText
          buttonOnPress {
            type
            payload
          }
        }
        ... on ContentItemInfoCard {
          ...ContentItemInfoCard
        }
      }
      footer {
        __typename
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemOverlay {
          ...ContentItemOverlay
        }
      }
      header {
        __typename
        ... on ContentItemHeaderBar {
          ...ContentItemHeaderBar
        }
        ... on ContentItemProgressBar {
          ...ContentItemProgressBar
        }
      }
    }
  }
`;
