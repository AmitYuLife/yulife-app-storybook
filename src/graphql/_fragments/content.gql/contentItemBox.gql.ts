import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_BOX = gql`
  fragment ContentItemBox on ContentItemBox {
    id
    title
    markdown
    parsedMarkdown
    canCopy
  }
`;
