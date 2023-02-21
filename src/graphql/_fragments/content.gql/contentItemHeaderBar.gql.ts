import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemHeaderBar on ContentItemHeaderBar {
    logo
    heading
    leftIcon
    contentItemHeaderBarRightIcon: rightIcon
    onLeftIconPress {
      ...SduiAction
    }
    onRightIconPress {
      ...SduiAction
    }
    publishKeyHeight
    color
    backgroundColor
  }
`;
