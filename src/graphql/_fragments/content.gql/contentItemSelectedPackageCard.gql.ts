import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO } from "./contentItemPackageCardSlotInfo.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO } from "./contentItemSelectedPackageCardProviderLogo.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD_PROVIDER_LOGO}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}

  fragment ContentItemSelectedPackageCard on ContentItemSelectedPackageCard {
    id
    previousPrice
    price
    priceDescription
    coverType
    backgroundUrl {
      ...RemoteImage
    }
    providerLogo {
      ...ContentItemSelectedPackageCardProviderLogo
    }
    slotInfo {
      ...ContentItemPackageCardSlotInfo
    }
  }
`;
