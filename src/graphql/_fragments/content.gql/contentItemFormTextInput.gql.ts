import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM_INPUT_VALIDATION } from "./contentItemFormInputValidation.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_FORM_TEXT_INPUT = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM_INPUT_VALIDATION}

  fragment ContentItemFormTextInput on ContentItemFormTextInput {
    id
    name
    placeholder
    defaultValue
    type
    icon {
      ...RemoteImage
    }
    validation {
      ...ContentItemFormInputValidation
    }
  }
`;
