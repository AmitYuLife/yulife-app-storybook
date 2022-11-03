import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM } from "./contentItem.gql";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_SDUI_STYLE_DYNAMIC } from "../shared.gql";

export const GQL_FRAGMENT_ABSOLUTE_CONTENT_ITEM = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_SDUI_STYLE_DYNAMIC}

  fragment AbsoluteContentItem on AbsoluteContentItem {
    isBackground
    item {
      ...ContentItem
    }
    styles {
      ...SduiStyle
    }
    dynamicStyles {
      ...SduiStyleDynamic
    }
  }
`;
