import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_AGE_OPTION } from "./contentItemAgePercentCoverPickerAgeOption.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_ANSWER_KEYS } from "./contentItemAnswerKeys.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_HEADER_AGE_PERCENT_PRODUCT_INFO = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}
  ${GQL_FRAGMENT_CONTENT_ITEM_ANSWER_KEYS}
  ${GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_AGE_OPTION}

  fragment ContentItemCollapsingHeaderAgePercentProductInfo on ContentItemCollapsingHeaderAgePercentProductInfo {
    id
    styles {
      ...SduiStyle
    }
    expandOnComponentId
    expandThreshold
    collapsingHeaderAgePercentProductInfoData: data {
      answerKeys {
        ...ContentItemAnswerKeys
      }
      agePercentCoverList {
        ...ContentItemAgePercentCoverPickerAgeOption
      }
      monthlyCostDynamicCopy
      monthlyCostReplacementString
      salaryPercentDynamicCopy
      salaryPercentReplacementString
      defaultActiveAgeToEnd
      defaultActiveCoverType
      defaultActiveSalaryPercent
      defaultActiveWorldId
    }
  }
`;
