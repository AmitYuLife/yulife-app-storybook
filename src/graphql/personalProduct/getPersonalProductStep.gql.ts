import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
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
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON,
  GQL_FRAGMENT_CONTENT_ITEM_MULTI_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS,
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO_ITEM_URL,
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_PREVIEW,
  GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT,
  GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER,
} from "../_fragments/content.gql";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_MULTI_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_OVERLAY}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO_ITEM_URL}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_PREVIEW}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER}

  query GetPersonalProductStep($productId: String!) {
    getPersonalProductStep(productId: $productId) {
      stepId
      customerProductId
      stepData
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
        ... on ContentItemInfoCard {
          ...ContentItemInfoCard
        }
        ... on ContentItemPackageCards {
          ...ContentItemPackageCards
        }
        ... on ContentItemPersonalProductPreview {
          ...ContentItemPersonalProductPreview
        }
        ... on ContentItemCoverPicker {
          ...ContentItemCoverPicker
        }
        ... on ContentItemScrollableItemsPicker {
          ...ContentItemScrollableItemsPicker
        }
        ... on ContentItemDatePicker {
          ...ContentItemDatePicker
        }
        ... on ContentItemMultiSelect {
          ...ContentItemMultiSelect
        }
        ... on ContentItemScrollPicker {
          ...ContentItemScrollPicker
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
        ... on ContentItemPersonalProductInfo {
          id
          coverType
          productTitle: title
          providerImageUrl {
            id
            uri
          }
          productDescription: description {
            id
            parsedMarkdown
          }
        }
        ... on ContentItemMultiButton {
          ...ContentItemMultiButton
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
        ... on ContentItemMultiButton {
          ...ContentItemMultiButton
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
      absolute {
        id
        shouldAccountForHeader
        item {
          __typename
          ... on ContentItemImage {
            ...ContentItemImage
          }
        }
      }
    }
  }
`;
