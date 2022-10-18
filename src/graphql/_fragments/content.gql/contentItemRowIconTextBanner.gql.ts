import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER_CONTAINER_ACTIONS } from "./contentItemRowIconTextBannerContainerActions.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER_CONTAINER_ACTIONS}

  fragment ContentItemRowIconTextBanner on ContentItemRowIconTextBanner {
    id
    bannerType: type
    markdown
    bannerIcon: icon {
      ...RemoteImage
    }
    styles {
      ...SduiStyle
    }
    titleMarkdown
    showCloseIcon
    bannerButton: button {
      ...ContentItemButton
    }
    showIcon
    containerActions {
      ...ContentItemRowIconTextBannerContainerActions
    }
  }
`;
