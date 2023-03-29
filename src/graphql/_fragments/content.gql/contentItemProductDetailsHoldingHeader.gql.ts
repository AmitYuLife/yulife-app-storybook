import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_LINEAR_GRADIENT_ORIENTATION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HOLDING_HEADER = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_LINEAR_GRADIENT_ORIENTATION}
  fragment ContentItemProductDetailsHoldingHeader on ContentItemProductDetailsHoldingHeader {
    id
    linearGradient {
      colors
      start {
        ...LinearGradientOrientation
      }
      end {
        ...LinearGradientOrientation
      }
    }
    image {
      ...RemoteImage
    }
    title
    description
    timer {
      secondsUntilTarget
    }
  }
`;
