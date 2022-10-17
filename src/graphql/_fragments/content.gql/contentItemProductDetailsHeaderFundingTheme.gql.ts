import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING_THEME = gql`
  fragment ContentItemProductDetailsHeaderFundingTheme on ContentItemProductDetailsHeaderFundingTheme {
    backgroundColor
    borderColor
    textColor
  }
`;
