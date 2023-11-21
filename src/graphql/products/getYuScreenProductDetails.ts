import { gql } from "@apollo/client";
import {
  GQL_FRAGMENT_CONTENT_ITEM_BENEFICIARIES_SECTION,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_GENERIC_HEADER,
  GQL_FRAGMENT_CONTENT_ITEM_IMAGE,
  GQL_FRAGMENT_CONTENT_ITEM_PAD,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HOLDING_HEADER,
  GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_CONTENT_ITEM_LINEAR_GRADIENT,
  GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT,
  GQL_FRAGMENT_CONTENT_ITEM_KEY_VALUE_BOX,
  GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER_CONTAINER_ACTIONS,
  GQL_FRAGMENT_CONTENT_ITEM_PROCESSING_TIMER,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING_THEME,
  GQL_FRAGMENT_CONTENT_ITEM_FADE,
  GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR,
  GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_YU_COIN_POWER,
  GQL_FRAGMENT_CONTENT_ITEM_WRAPPER,
  GQL_FRAGMENT_CONTENT_ITEM_HINT,
} from "@graphql/_fragments/content.gql";
import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_ACTION,
  GQL_FRAGMENT_SDUI_STYLE,
  GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE,
} from "@graphql/_fragments/shared.gql";

export const GQL_QUERY_GET_YU_SCREEN_PRODUCT_DETAILS = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_KEY_VALUE_BOX}
  ${GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING_THEME}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HOLDING_HEADER}
  ${GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_GENERIC_HEADER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_PROCESSING_TIMER}
  ${GQL_FRAGMENT_CONTENT_ITEM_LINEAR_GRADIENT}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_BENEFICIARIES_SECTION}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER_CONTAINER_ACTIONS}
  ${GQL_FRAGMENT_CONTENT_ITEM_FADE}
  ${GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_YU_COIN_POWER}
  ${GQL_FRAGMENT_CONTENT_ITEM_WRAPPER}
  ${GQL_FRAGMENT_CONTENT_ITEM_HINT}

  query GetYuScreenProductDetails($customerProductId: String!) {
    getYuScreenProductDetails(customerProductId: $customerProductId) {
      containerStyles {
        ...SduiStyle
      }
      footerStyles {
        ...SduiStyle
      }
      body {
        __typename
        ... on ContentItemProductDetailsHeader {
          ...ContentItemProductDetailsHeader
        }
        ... on ContentItemProductDetailsHoldingHeader {
          ...ContentItemProductDetailsHoldingHeader
        }
        ... on ContentItemText {
          ...ContentItemText
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemKeyValueBox {
          ...ContentItemKeyValueBox
        }
        ... on ContentItemBeneficiariesSection {
          ...ContentItemBeneficiariesSection
        }
        ... on ContentItemRowIconTextBanner {
          ...ContentItemRowIconTextBanner
        }
        ... on ContentItemImage {
          ...ContentItemImage
        }
        ... on ContentItemInfoCard {
          ...ContentItemInfoCard
        }
        ... on ContentItemPad {
          ...ContentItemPad
        }
        ... on ContentItemMarkdown {
          ...ContentItemMarkdown
        }
        ... on ContentItemYuCoinPower {
          ...ContentItemYuCoinPower
        }
        ... on ContentItemLinearGradient {
          ...ContentItemLinearGradient
        }
        ... on ContentItemProcessingTimer {
          ...ContentItemProcessingTimer
        }
        ... on ContentItemWrapper {
          ...ContentItemWrapper
        }
        ... on ContentItemHint {
          ...ContentItemHint
        }
      }
      footer {
        __typename
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemFade {
          ...ContentItemFade
        }
        ... on ContentItemPad {
          ...ContentItemPad
        }
      }
      header {
        __typename

        ... on ContentItemHeaderBar {
          ...ContentItemHeaderBar
        }
        ... on ContentItemLinearGradient {
          ...ContentItemLinearGradient
        }
      }
      absolute {
        id
        isBackground
        shouldAccountForHeader
        item {
          __typename
          ... on ContentItemPad {
            ...ContentItemPad
          }
          ... on ContentItemCollapsingGenericHeader {
            ...ContentItemCollapsingGenericHeader
          }
          ... on ContentItemLinearGradient {
            ...ContentItemLinearGradient
          }
          ... on ContentItemButton {
            ...ContentItemButton
          }
        }
      }
    }
  }
`;
