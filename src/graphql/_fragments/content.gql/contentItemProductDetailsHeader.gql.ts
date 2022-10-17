import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE, GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING } from "./contentItemProductDetailsHeaderFunding.gql";
import { GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT } from "./yuScreenItemSlot.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER = gql`
  ${GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT}
  ${GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_DETAILS_HEADER_FUNDING}

  fragment ContentItemProductDetailsHeader on ContentItemProductDetailsHeader {
    id
    coverType
    productName
    productDetailsHeaderYuCoinPower: yuCoinPower
    styles {
      ...SduiStyle
    }
    providerLogo {
      ...VariableRemoteImage
    }
    itemSlot {
      ...YuScreenItemSlot
    }
    productIdentifier {
      label
      value
    }
    benefit {
      title
      markdown
    }
    funding {
      ...ContentItemProductDetailsHeaderFunding
    }
  }
`;
