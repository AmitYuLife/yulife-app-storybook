import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}

  fragment ContentItemScrollPicker on ContentItemScrollPicker {
    id
    pickerConfirmButtonLabel
    pickerCancelButtonLabel
    button {
      ...ContentItemButton
    }
    answerKey
    displayFormat {
      answerKey
      plural
      singular
      singularValue
      isDynamic
    }
    variants {
      id
      answerKey
      toggleLabel
      toggleIndex
      wheels {
        answerKey
        initialStepIndex
        min
        max
        step
        suffixPlural
        suffixSingular
        suffixSingularValue
        suffixMax
      }
    }
  }
`;
