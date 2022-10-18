import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "./contentItemLottie.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FULL_SCREEN_LOTTIE_SWIPER = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}

  fragment ContentItemFullScreenLottieSwiper on ContentItemFullScreenLottieSwiper {
    id
    title
    autoPlaySpeedMs
    dismissMinVisibleIndex
    ctaMinVisibleIndex
    theme {
      primaryColor
      titleColor
      progressBarForegroundColor
      progressBarBackgroundColor
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
      ...ContentItemLottie
    }
  }
`;
