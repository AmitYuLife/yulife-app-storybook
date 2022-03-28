import {
  GQL_FRAGMENT_CONTENT_ITEM_ACCORDION,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_DOCUMENTS,
  GQL_FRAGMENT_CONTENT_ITEM_FAQS,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO,
  GQL_FRAGMENT_CONTENT_ITEM_PAD,
  GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER,
  GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARDS,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT,
} from "@graphql/_fragments/content.gql";
import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_ACTION,
  GQL_FRAGMENT_SDUI_STYLE,
} from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_FAQS}
  ${GQL_FRAGMENT_CONTENT_ITEM_DOCUMENTS}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARDS}
  ${GQL_FRAGMENT_CONTENT_ITEM_ACCORDION}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO}
  query GetPersonalProductStepDetached($productId: String!, $stepId: String!) {
    getPersonalProductStepDetached(productId: $productId, stepId: $stepId) {
      stepId
      customerProductId
      stepData
      body {
        __typename
        ... on ContentItemPersonalProductFaqs {
          ...ContentItemPersonalProductFaqs
        }
        ... on ContentItemPersonalProductDocuments {
          ...ContentItemPersonalProductDocuments
        }
        ... on ContentItemText {
          ...ContentItemText
        }
        ... on ContentItemTextInput {
          ...ContentItemTextInput
        }
        ... on ContentItemCoverPicker {
          ...ContentItemCoverPicker
        }
        ... on ContentItemSelectedPackageCard {
          ...ContentItemSelectedPackageCard
        }
        ... on ContentItemSelectedPackageCards {
          ...ContentItemSelectedPackageCards
        }
        ... on ContentItemSelectedPackageAccordion {
          ...ContentItemSelectedPackageAccordion
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemPad {
          ...ContentItemPad
        }
        ... on ContentItemMarkdown {
          ...ContentItemMarkdown
        }
        ... on ContentItemRowIconTextBanner {
          ...ContentItemRowIconTextBanner
        }
      }
    }
  }
`;
