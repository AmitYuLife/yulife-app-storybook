import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_INPUT_VALIDATION = gql`
  fragment ContentItemFormInputValidation on ContentItemFormInputValidation {
    regex
    message
  }
`;
