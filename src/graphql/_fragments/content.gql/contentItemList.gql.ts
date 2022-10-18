import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_LIST = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemList on ContentItemList {
    id
    wrapperStyles {
      ...SduiStyle
    }
    items {
      id
      text {
        value
        colour
      }
      circle {
        colour
        backgroundColour
      }
      styles {
        ...SduiStyle
      }
    }
  }
`;
