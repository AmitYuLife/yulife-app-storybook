import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemText on ContentItemText {
    id
    textType: type
    text
    colour
    textAlign
    underline
    numberOfLines
    styles {
      ...SduiStyle
    }
    dynamicStyleKey
  }
`;
