import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_LOTTIE = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemLottie on ContentItemLottie {
    id
    uri
    autoPlay
    loop
    styles {
      ...SduiStyle
    }
    onAnimationEnd {
      ...SduiAction
    }
    aspectRatio
  }
`;
