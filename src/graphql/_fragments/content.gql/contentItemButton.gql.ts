import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_BUTTON = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemButton on ContentItemButton {
    id
    contentItemButtonUri: uri
    label
    buttonType: type
    value
    disabledState
    borderColor
    backgroundColor
    textColor
    onPress {
      ...SduiAction
    }
    event {
      ...SduiAction
    }
    icon {
      id
      uri
    }
    contentItemButtonRightIcon: rightIcon {
      id
      uri
    }
    styles {
      ...SduiStyle
    }
    buttonSize
  }
`;
