import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SWITCH = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemSwitch on ContentItemSwitch {
    id
    styles {
      ...SduiStyle
    }
    wrapperStyles {
      ...SduiStyle
    }
    onPress {
      ...SduiAction
    }
    defaultValue
  }
`;
