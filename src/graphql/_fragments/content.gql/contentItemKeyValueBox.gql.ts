import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_KEY_VALUE_BOX = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemKeyValueBox on ContentItemKeyValueBox {
    id
    boxKey: key
    boxValue: value
    styles {
      ...SduiStyle
    }
    wrapperStyles {
      ...SduiStyle
    }
  }
`;
