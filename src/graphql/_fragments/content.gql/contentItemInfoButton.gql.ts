import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_INFO_BUTTON = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemInfoButton on ContentItemInfoButton {
    id
    label
    infoBtnLeftIcon: leftIcon {
      ...RemoteImage
    }
    infoBtnRightIcon: rightIcon {
      ...RemoteImage
    }
    onPress {
      ...SduiAction
    }
    active {
      label
      leftIcon {
        ...RemoteImage
      }
      rightIcon {
        ...RemoteImage
      }
    }
    answerKeys
  }
`;
