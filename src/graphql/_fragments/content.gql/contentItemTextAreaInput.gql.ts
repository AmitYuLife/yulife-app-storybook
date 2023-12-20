import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT_AREA_INPUT = gql`
  fragment ContentItemTextAreaInput on ContentItemTextAreaInput {
    id
    answerKey
    placeholder
    numberOfLines
    maxLength
    styles {
      ...SduiStyle
    }
  }
`;
