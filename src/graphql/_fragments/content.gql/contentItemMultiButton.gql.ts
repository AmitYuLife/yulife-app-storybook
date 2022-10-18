import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_MULTI_BUTTON = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemMultiButton on ContentItemMultiButton {
    id
    buttons {
      ...ContentItemButton
    }
    value
    answerKey
    styles {
      ...SduiStyle
    }
  }
`;
