import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON } from "./contentItemRadioIcon.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON}

  fragment ContentItemRadio on ContentItemRadio {
    id
    iconOptions
    answerKey
    choices {
      label
      value
      renderAsIcon {
        ...ContentItemRadioIcon
      }
    }
  }
`;
