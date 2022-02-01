import gql from "graphql-tag";
import {
  GQL_FRAGMENT_CONTENT_ITEM_BENEFICIARIES_SECTION,
  GQL_FRAGMENT_CONTENT_ITEM_BUTTON,
  GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_GENERIC_HEADER,
  GQL_FRAGMENT_CONTENT_ITEM_PAD,
  GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER,
  GQL_FRAGMENT_CONTENT_ITEM_TEXT,
  GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT,
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
  ${GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER}
  ${GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_GENERIC_HEADER}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_BENEFICIARIES_SECTION}

  query GetYuScreenProductDetails($customerProductId: String!) {
    getYuScreenProductDetails(customerProductId: $customerProductId) {
      body {
        __typename
        ... on ContentItemProductDetailsHeader {
          ...ContentItemProductDetailsHeader
        }
        ... on ContentItemText {
          ...ContentItemText
        }
        ... on ContentItemButton {
          ...ContentItemButton
        }
        ... on ContentItemBeneficiariesSection {
          ...ContentItemBeneficiariesSection
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
        }
      }
    }
  }
`;
