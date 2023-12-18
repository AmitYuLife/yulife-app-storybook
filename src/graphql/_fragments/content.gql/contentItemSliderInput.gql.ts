import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_SLIDER_INPUT = gql`
  fragment ContentItemSliderInput on ContentItemSliderInput {
    id
    answerKey
    minValue
    maxValue
    leftLabel
    rightLabel
    styles {
      ...SduiStyle
    }
  }
`;
