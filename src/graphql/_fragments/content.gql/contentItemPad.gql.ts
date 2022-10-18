import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PAD = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemPad on ContentItemPad {
    id
    amount
    pointerEvents
    styles {
      ...SduiStyle
    }
  }
`;
