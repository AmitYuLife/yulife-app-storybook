import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT_GROUP = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemTextGroup on ContentItemTextGroup {
    id
    items {
      label
      onPress {
        ...SduiAction
      }
      rightIcon {
        ...RemoteImage
      }
      styles {
        ...SduiStyle
      }
      labelStyles {
        ...SduiStyle
      }
    }
    styles {
      ...SduiStyle
    }
  }
`;
