import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_LINEAR_GRADIENT_ORIENTATION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_LINEAR_GRADIENT = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_LINEAR_GRADIENT_ORIENTATION}

  fragment ContentItemLinearGradient on ContentItemLinearGradient {
    id
    colors
    styles {
      ...SduiStyle
    }
    start {
      ...LinearGradientOrientation
    }
    end {
      ...LinearGradientOrientation
    }
  }
`;
