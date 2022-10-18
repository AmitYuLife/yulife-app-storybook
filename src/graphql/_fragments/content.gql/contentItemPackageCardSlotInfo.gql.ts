import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemPackageCardSlotInfo on ContentItemPackageCardSlotInfo {
    name
    status
    backgroundUrl {
      ...RemoteImage
    }
    logoUrl {
      ...RemoteImage
    }
  }
`;
