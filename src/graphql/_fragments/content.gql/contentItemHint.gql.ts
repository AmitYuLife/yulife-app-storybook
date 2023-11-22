import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_HINT = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemHint on ContentItemHint {
    id
    hintTitle
    contentItemHintDescription: description
    hintImage {
      ...RemoteImage
    }
    onPress {
      ...SduiAction
    }
    styles {
      ...SduiStyle
    }
  }
`;
