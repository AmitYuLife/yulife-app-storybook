import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_ELEMENTS } from "./contentItemFormElements.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_ELEMENTS}

  fragment ContentItemForm on ContentItemForm {
    elements {
      __typename
      ...ContentItemFormElements
    }
  }
`;
