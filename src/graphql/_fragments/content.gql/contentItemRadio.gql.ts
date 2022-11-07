import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON } from "./contentItemRadioIcon.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemRadio on ContentItemRadio {
    id
    iconOptions
    answerKey
    styles {
      ...SduiStyle
    }
    choices {
      label
      value
      renderAsIcon {
        ...ContentItemRadioIcon
      }
    }
  }
`;
