import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SHOW_HIDE_BALANCE = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemShowHideBalance on ContentItemShowHideBalance {
    id
    value
    currency
    description
    descriptionValue
    styles {
      ...SduiStyle
    }
    wrapperStyles {
      ...SduiStyle
    }
  }
`;
