import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_SWIPER = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemFullScreenSwiper on ContentItemFullScreenSwiper {
    id
    title
    autoPlaySpeedMs
    dismissMinVisibleIndex
    ctaMinVisibleIndex
    theme {
      primaryColor
    }
    button {
      ...ContentItemButton
    }
    close {
      icon {
        ...RemoteImage
      }
      onPress {
        ...SduiAction
      }
    }
    items {
      id
      heading
      paragraph
      title
      backgroundImage {
        ...RemoteImage
      }
      styles {
        ...SduiStyle
      }
    }
  }
`;
