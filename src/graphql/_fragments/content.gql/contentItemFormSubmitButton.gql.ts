import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_SUBMIT_BUTTON = gql`
  fragment ContentItemFormSubmitButton on ContentItemFormSubmitButton {
    id
    label
  }
`;
