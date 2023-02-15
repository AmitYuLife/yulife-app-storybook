import { gql } from "@apollo/client";
import {
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT,
  GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARDS,
  GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_ACCORDION,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_PAD,
  GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN,
  GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER,
  GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_FAQS,
  GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_DOCUMENTS,
  GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT,
} from "@graphql/_fragments/content.gql";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_FAQS}
  ${GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_DOCUMENTS}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARDS}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_ACCORDION}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER}
  ${GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT}

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
        ... on ContentItemDropdownInput {
          ...ContentItemDropdownInput
        }
      }
    }
  }
`;
