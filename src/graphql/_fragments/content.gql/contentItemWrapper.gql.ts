import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_WRAPPER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemWrapper on ContentItemWrapper {
    id
    styles {
      ...SduiStyle
    }
    children
    pointerEvents
  }
`;
