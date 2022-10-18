import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_ANSWER_KEYS = gql`
  fragment ContentItemAnswerKeys on ContentItemAnswerKeys {
    ageToEnd
    salaryPercent
    coverType
    worldId
  }
`;
