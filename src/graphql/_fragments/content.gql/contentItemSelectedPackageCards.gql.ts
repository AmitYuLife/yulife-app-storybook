import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO } from "./contentItemPackageCardSlotInfo.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO } from "./contentItemSelectedPackageCardProviderLogo.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARDS = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}

  fragment ContentItemSelectedPackageCards on ContentItemSelectedPackageCards {
    id
    styles {
      ...SduiStyle
    }
    providerLogo {
      ...ContentItemSelectedPackageCardProviderLogo
    }
    packageCardsPriceDescription: priceDescription
    coverOptions {
      coverType
      price
      slotInfo {
        ...ContentItemPackageCardSlotInfo
      }
    }
  }
`;
