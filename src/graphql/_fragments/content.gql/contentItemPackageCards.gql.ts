import { gql } from "@apollo/client";
import { GQL_FRAGMENT_REMOTE_IMAGE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO } from "./contentItemPackageCardSlotInfo.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO}

  fragment ContentItemPackageCards on ContentItemPackageCards {
    id
    answerKey
    answerKeyDefaultValue
    filterBasedOnAnswerKey
    packageCards {
      id
      value
      packageMaxValue
      coverType
      bonusEarnRate
      header {
        backgroundUrl {
          ...RemoteImage
        }
        slotInfo {
          ...ContentItemPackageCardSlotInfo
        }
      }
      powers {
        leftIcon {
          ...RemoteImage
        }
        rightIcon {
          ...RemoteImage
        }
        title
        description
        isLocked
      }
    }
  }
`;
