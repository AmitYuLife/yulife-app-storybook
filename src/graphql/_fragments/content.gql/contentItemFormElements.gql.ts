import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT } from "./contentItemFormSelectInput.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_SUBMIT_BUTTON } from "./contentItemFormSubmitButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_TEXT_INPUT } from "./contentItemFormTextInput.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_ELEMENTS = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_SUBMIT_BUTTON}

  fragment ContentItemFormElements on ContentItemFormElements {
    __typename
    ... on ContentItemFormTextInput {
      ...ContentItemFormTextInput
    }
    ... on ContentItemFormSelectInput {
      ...ContentItemFormSelectInput
    }
    ... on ContentItemFormSubmitButton {
      ...ContentItemFormSubmitButton
    }
  }
`;
