import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_CONFIRM = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemConfirm on ContentItemConfirm {
    id
    confirmLabel: text
    answerKey
    checkboxType
    styles {
      ...SduiStyle
    }
  }
`;
