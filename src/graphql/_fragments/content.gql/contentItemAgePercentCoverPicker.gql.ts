import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_AGE_OPTION } from "./contentItemAgePercentCoverPickerAgeOption.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER_CUSTOM_COVER } from "./contentItemCoverPickerCustomCover.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN } from "./contentItemMarkdown.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_AGE_OPTION}
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER_CUSTOM_COVER}

  fragment ContentItemAgePercentCoverPicker on ContentItemAgePercentCoverPicker {
    id
    styles {
      ...SduiStyle
    }
    percentsToDefault
    contentItemAgePercentCoverPickerOptions: options {
      ...ContentItemAgePercentCoverPickerAgeOption
    }
    topHeading
    restrictedPercentInfoCardText {
      ...ContentItemMarkdown
    }
    costPayoutBenefitHeading
    costPayoutBenefitPayoutSchedule
    costPayoutBenefitCostSchedule
    ageText {
      ...ContentItemMarkdown
    }
    answerKeyPercent
    answerKeyPercentDefaultValue
    answerKeyAge
    answerKeyAgeDefaultValue
    answerKeyCoverType
    answerKeyCoverTypeDefaultValue
    answerKeyMaxSalaryPercent
    answerKeyMaxSalaryPercentDefaultValue

    customCover {
      ...ContentItemCoverPickerCustomCover
    }
    userAge
    agePickerButtonRightIconImageUrl
  }
`;