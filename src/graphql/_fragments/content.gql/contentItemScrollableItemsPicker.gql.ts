import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemScrollableItemsPicker on ContentItemScrollableItemsPicker {
    id
    answerKey
    styles {
      ...SduiStyle
    }
    range {
      min
      max
      step
    }
    coverMap {
      coverType
      max
    }
    styleVariants {
      id
      minVisibleIndex
      maxVisibleIndex
      item {
        color
      }
      overlay {
        backdropStyles {
          ...SduiStyle
        }
        highlightLabel
        highlightLabelColor
        overlayTitle
        overlayTitleWrapperStyles {
          ...SduiStyle
        }
      }
    }
  }
`;
