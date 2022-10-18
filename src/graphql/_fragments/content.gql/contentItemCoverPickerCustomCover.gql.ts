import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER } from "./contentItemScrollableItemsPicker.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER_CUSTOM_COVER = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER}

  fragment ContentItemCoverPickerCustomCover on ContentItemCoverPickerCustomCover {
    contentItemCoverPickerCustomCoverTitle: title
    button {
      ...ContentItemButton
    }
    itemsPicker {
      ...ContentItemScrollableItemsPicker
    }
  }
`;
