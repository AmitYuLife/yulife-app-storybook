import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_IMAGE = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemImage on ContentItemImage {
    id
    image {
      ...RemoteImage
    }
    styles {
      ...SduiStyle
    }
    wrapperStyles {
      ...SduiStyle
    }
    onPress {
      ...SduiAction
    }
    contentItemImageSize: size
  }
`;
