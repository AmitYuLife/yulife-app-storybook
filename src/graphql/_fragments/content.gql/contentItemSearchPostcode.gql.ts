import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SEARCH_POSTCODE = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemSearchPostcode on ContentItemSearchPostcode {
    id
    label
    headingText
    searchTitle
    onLoadPlaceholder
    onLoadUnsuccessfulText
    styles {
      ...SduiStyle
    }
    searchInputStyles {
      ...SduiStyle
    }
    icon {
      ...RemoteImage
    }
    addressAnswerKeys {
      answerKey
      addressKey
    }
  }
`;
