import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COVER_LIST_ITEM = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemCoverListItem on ContentItemCoverListItem {
    percentCovered
    monthlyCost
    monthlyCostSuffix
    monthlyPayout
    productPreviewMarkdown
    collapsingHeaderProductInfoHeading
    coverType
    minValue
    slotBackgroundUrl {
      ...RemoteImage
    }
  }
`;
