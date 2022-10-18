import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_COVER_LIST_ITEM } from "./contentItemCoverListItem.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_HEADER_PRODUCT_INFO = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_LIST_ITEM}

  fragment ContentItemCollapsingHeaderProductInfo on ContentItemCollapsingHeaderProductInfo {
    id
    answerKey
    coverList {
      ...ContentItemCoverListItem
    }
    type
    expandOnComponentId
  }
`;
