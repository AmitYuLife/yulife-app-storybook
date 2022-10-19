import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT_OPTIONS = gql`
  fragment ContentItemFormSelectInputOptions on ContentItemFormSelectInputOptions {
    label
    value
  }
`;