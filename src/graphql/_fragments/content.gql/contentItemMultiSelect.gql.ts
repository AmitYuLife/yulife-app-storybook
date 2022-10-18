import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT = gql`
  fragment ContentItemMultiSelect on ContentItemMultiSelect {
    id
    answerKey
    choices {
      id
      label
      icon {
        id
        uri
      }
    }
  }
`;
