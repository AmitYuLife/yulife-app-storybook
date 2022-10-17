import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING_THEME } from "./contentItemProductDetailsHeaderFundingTheme.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING_THEME}

  fragment ContentItemProductDetailsHeaderFunding on ContentItemProductDetailsHeaderFunding {
    text
    theme {
      ...ContentItemProductDetailsHeaderFundingTheme
    }
  }
`;
