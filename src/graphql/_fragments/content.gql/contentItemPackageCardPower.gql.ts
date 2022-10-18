import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_POWER = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment ContentItemPackageCardPower on ContentItemPackageCardPower {
    id
    leftIcon {
      ...RemoteImage
    }
    rightIcon {
      ...RemoteImage
    }
    powerTitle: title
    description
    isLocked
  }
`;
