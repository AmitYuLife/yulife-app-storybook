import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT_OPTIONS = gql`
  fragment ContentItemDropdownInputOptions on ContentItemDropdownInputOptions {
    label
    value
  }
`;
