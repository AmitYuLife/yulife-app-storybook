import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_CHOICE = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemChoice on ContentItemChoice {
    id
    answerKey
    labelTextType
    choiceOptions: options {
      value
      label
    }
    multiSelect
    otherOption {
      value
      label
      maxLength
    }
    design
    rowStyles {
      ...SduiStyle
    }
    styles {
      ...SduiStyle
    }
    textStyles {
      ...SduiStyle
    }
  }
`;
