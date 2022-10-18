import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_REVIEW_ITEM = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemPersonalProductReviewItem on ContentItemPersonalProductReviewItem {
    id
    text: heading
    subheading
    stepKey
    leftIcon {
      ...RemoteImage
    }
    rightIcon {
      ...RemoteImage
    }
    onPress {
      ...SduiAction
    }
  }
`;
