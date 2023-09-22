import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_ACTION } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_WRAPPER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment ContentItemWrapper on ContentItemWrapper {
    id
    styles {
      ...SduiStyle
    }
    children
    pointerEvents
    absolute
    onPress {
      ...SduiAction
    }
    scrollViewProps
    dynamicStyleKey
    localDispatchActions {
      ...SduiAction
    }
    localDispatchActionsOnMount {
      ...SduiAction
    }
  }
`;
