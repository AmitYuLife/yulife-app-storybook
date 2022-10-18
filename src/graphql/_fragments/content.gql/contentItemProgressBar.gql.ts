import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR = gql`
  fragment ContentItemProgressBar on ContentItemProgressBar {
    id
    maxLength
    currentPosition
    progressType: type
  }
`;
