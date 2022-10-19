import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_INFO = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemPersonalProductInfo on ContentItemPersonalProductInfo {
    id
    coverType
    productTitle: title
    flatListItemOverlayStyles {
      ...SduiStyle
    }
    providerImageUrl {
      id
      uri
    }
    largeProviderImageUrl {
      id
      uri
    }
    productDescription: description {
      id
      parsedMarkdown
    }
    partType
    selectedYuWorld
    swiperTopText
  }
`;
