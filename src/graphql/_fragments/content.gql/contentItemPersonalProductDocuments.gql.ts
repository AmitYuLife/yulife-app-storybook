import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_DOCUMENTS = gql`
  fragment ContentItemPersonalProductDocuments on ContentItemPersonalProductDocuments {
    id
    headingImage {
      id
      image {
        id
        uri
      }
    }
    headingMarkdown {
      id
      markdown
      parsedMarkdown
    }
    documents {
      id
      linkLabel
      rightIcon {
        id
        uri
      }
      leftIcon {
        id
        uri
      }
      url
    }
  }
`;
