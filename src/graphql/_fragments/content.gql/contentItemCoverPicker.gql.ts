import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER } from "./contentItemScrollableItemsPicker.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "./contentItemText.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER}

  fragment ContentItemCoverPicker on ContentItemCoverPicker {
    id
    answerKey
    answerKeyDefaultValue
    hasSelectedCustomCover
    styles {
      ...SduiStyle
    }
    options {
      value
      coverType
      subheading
      heading
    }
    coverPickerTitle: title {
      ...ContentItemText
    }
    customCover {
      title
      button {
        ...ContentItemButton
      }
      itemsPicker {
        ...ContentItemScrollableItemsPicker
      }
    }
  }
`;
