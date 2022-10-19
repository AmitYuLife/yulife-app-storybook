import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_INPUT_VALIDATION } from "./contentItemFormInputValidation.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT_OPTIONS } from "./contentItemFormSelectInputOptions.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_SELECT_INPUT_OPTIONS}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_INPUT_VALIDATION}

  fragment ContentItemFormSelectInput on ContentItemFormSelectInput {
    id
    name
    placeholder
    modalPlaceholder
    defaultOption {
      ...ContentItemFormSelectInputOptions
    }
    icon {
      ...RemoteImage
    }
    options {
      ...ContentItemFormSelectInputOptions
    }
    validation {
      ...ContentItemFormInputValidation
    }
  }
`;
