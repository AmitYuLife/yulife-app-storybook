import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_AGE_PERCENT_COVER_PICKER_PERCENT_OPTION = gql`
  fragment ContentItemAgePercentCoverPickerPercentOption on ContentItemAgePercentCoverPickerPercentOption {
    contentItemAgePercentCoverPickerPercentOptionValue: value
    cost
    monthlyPayout
    coverType
  }
`;