import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_STYLE,
  GQL_FRAGMENT_SDUI_ACTION,
} from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";
import {
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR,
  GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_INFO_BUTTON,
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
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_PREVIEW,
  GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT,
  GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_REVIEW_ITEM,
  GQL_FRAGMENT_CONTENT_ITEM_CONFIRM,
  GQL_FRAGMENT_CONTENT_ITEM_LOTTIE,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_HEADER_PRODUCT_INFO,
  GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER,
  GQL_FRAGMENT_COVER_LIST_ITEM,
  GQL_FRAGMENT_CONTENT_ITEM_LIST,
  GQL_FRAGMENT_CONTENT_ITEM_GP_DETAILS,
  GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_SWIPER,
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_POWER,
  GQL_FRAGMENT_CONTENT_ITEM_SELECT_PAYMENT_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_SEARCH_POSTCODE,
  GQL_FRAGMENT_CONTENT_ITEM_FADE,
  GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_LOTTIE_SWIPER,
} from "../_fragments/content.gql";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_COVER_LIST_ITEM}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_MULTI_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_OVERLAY}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_PREVIEW}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_REVIEW_ITEM}
  ${GQL_FRAGMENT_CONTENT_ITEM_CONFIRM}
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_HEADER_PRODUCT_INFO}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER}
  ${GQL_FRAGMENT_CONTENT_ITEM_LIST}
  ${GQL_FRAGMENT_CONTENT_ITEM_GP_DETAILS}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_SWIPER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_POWER}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECT_PAYMENT_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_SEARCH_POSTCODE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FADE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_LOTTIE_SWIPER}

  query GetPersonalProductStep($productId: String!) {
    getPersonalProductStep(productId: $productId) {
      stepId
      customerProductId
      stepData
      containerStyles {
        ...SduiStyle
      }
      footerStyles {
        ...SduiStyle
      }
      body {
        __typename
        ... on ContentItemTextInput {
          ...ContentItemTextInput
        }
        ... on ContentItemPersonalProductSelectPaymentButton {
          ...ContentItemPersonalProductSelectPaymentButton
        }
        ... on ContentItemConfirm {
          ...ContentItemConfirm
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
        ... on ContentItemLottie {
          ...ContentItemLottie
        }
        ... on ContentItemText {
          ...ContentItemText
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemList {
          ...ContentItemList
        }
        ... on ContentItemInfoCard {
          ...ContentItemInfoCard
        }
        ... on ContentItemInfoButton {
          ...ContentItemInfoButton
        }
        ... on ContentItemSelectedPackageCard {
          ...ContentItemSelectedPackageCard
        }
        ... on ContentItemPackageCards {
          ...ContentItemPackageCards
        }
        ... on ContentItemPackageCardPower {
          ...ContentItemPackageCardPower
        }
        ... on ContentItemPersonalProductPreview {
          ...ContentItemPersonalProductPreview
        }
        ... on ContentItemImage {
          ...ContentItemImage
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
        ... on ContentItemPersonalProductReviewItem {
          ...ContentItemPersonalProductReviewItem
        }
        ... on ContentItemRowIconTextBanner {
          ...ContentItemRowIconTextBanner
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
          flatListItemOverlayStyles {
            ...SduiStyle
          }
          providerImageUrl {
            id
            uri
          }
          productDescription: description {
            id
            parsedMarkdown
          }
          partType
          selectedYuWorld
        }
        ... on ContentItemGpDetails {
          ...ContentItemGpDetails
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
        ... on ContentItemFade {
          ...ContentItemFade
        }
        ... on ContentItemPad {
          ...ContentItemPad
        }
        ... on ContentItemMarkdown {
          ...ContentItemMarkdown
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
        ... on ContentItemSearchPostcode {
          ...ContentItemSearchPostcode
        }
        ... on ContentItemMarkdown {
          ...ContentItemMarkdown
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
          ... on ContentItemCollapsingHeaderProductInfo {
            ...ContentItemCollapsingHeaderProductInfo
          }
          ... on ContentItemFullScreenSwiper {
            ...ContentItemFullScreenSwiper
          }
          ... on ContentItemFullScreenLottieSwiper {
            ...ContentItemFullScreenLottieSwiper
          }
        }
      }
    }
  }
`;
