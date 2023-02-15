import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT_OPTIONS } from "./contentItemDropdownInputOptions";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT_OPTIONS}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemDropdownInput on ContentItemDropdownInput {
    id
    heading
    answerKey
    validation {
      validationName
      validationValue
    }
    styles {
      ...SduiStyle
    }
    dropdownOptions: options {
      ...ContentItemDropdownInputOptions
    }
    selectInstruction
  }
`;
