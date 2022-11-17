import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT = gql`
  fragment ContentItemTextInput on ContentItemTextInput {
    id
    heading
    answerKey
    type
    prefixValue
    validation {
      validationName
      validationValue
    }
    styles {
      ...SduiStyle
    }
  }
`;
