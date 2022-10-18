import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemDatePicker on ContentItemDatePicker {
    id
    initialDate
    maxDate
    minDate
    dateFormat
    label
    labelWrapperStyles {
      ...SduiStyle
    }
    subLabel
    pickerStyles {
      ...SduiStyle
    }
    buttonStyles {
      ...SduiStyle
    }
    buttonLeftIcon {
      ...RemoteImage
    }
    buttonRightIcon {
      ...RemoteImage
    }
    size: buttonSize
    answerKey
    styles {
      ...SduiStyle
    }
  }
`;
