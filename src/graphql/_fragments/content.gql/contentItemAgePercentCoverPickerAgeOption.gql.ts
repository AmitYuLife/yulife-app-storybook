import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_PERCENT_OPTION } from "./contentItemAgePercentCoverPickerPercentOption.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_AGE_OPTION = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_PERCENT_OPTION}

  fragment ContentItemAgePercentCoverPickerAgeOption on ContentItemAgePercentCoverPickerAgeOption {
    age
    contentItemAgePercentCoverPickerAgeOptions: options {
      ...ContentItemAgePercentCoverPickerPercentOption
    }
  }
`;
