import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemRadioIcon on ContentItemRadioIcon {
    icon {
      ...RemoteImage
    }
    textColor
    selectedStyles {
      ...SduiStyle
    }
    wrapperStyles {
      ...SduiStyle
    }
    boxOptionHeight
    imageWidth
    imageHeight
  }
`;
