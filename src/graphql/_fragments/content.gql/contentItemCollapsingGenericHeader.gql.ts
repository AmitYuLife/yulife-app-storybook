import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_GENERIC_HEADER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemCollapsingGenericHeader on ContentItemCollapsingGenericHeader {
    id
    title
    styles {
      ...SduiStyle
    }
    contentItemCollapsingGenericHeaderRightIcon: rightIcon {
      ...RemoteImage
    }
    collapsedRightIcon {
      ...RemoteImage
    }
    onPressRightIcon {
      ...SduiAction
    }
  }
`;
