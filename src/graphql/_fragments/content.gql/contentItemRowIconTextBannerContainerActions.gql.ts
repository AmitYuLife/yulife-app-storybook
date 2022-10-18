import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER_CONTAINER_ACTIONS = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemRowIconTextBannerContainerActions on ContentItemRowIconTextBannerContainerActions {
    id
    event {
      ...SduiAction
    }
    onPress {
      ...SduiAction
    }
  }
`;
