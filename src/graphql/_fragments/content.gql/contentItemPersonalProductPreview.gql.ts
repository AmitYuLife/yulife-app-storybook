import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION, GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_COVER_LIST_ITEM } from "./contentItemCoverListItem.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_PREVIEW = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_LIST_ITEM}

  fragment ContentItemPersonalProductPreview on ContentItemPersonalProductPreview {
    id
    answerKey
    answerKeyDefaultValue
    documentHyperlink: hyperlink {
      title
      leftIcon {
        ...RemoteImage
      }
      onPress {
        ...SduiAction
      }
    }
    styles {
      ...SduiStyle
    }
    coverList {
      ...ContentItemCoverListItem
    }
    coverExpirationDate
    showYumoji
    percentageBox {
      selectedValue
      selectedCoverType
      primaryColour
      secondaryColour
    }
  }
`;
