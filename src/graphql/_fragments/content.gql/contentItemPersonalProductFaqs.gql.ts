import { gql } from "@apollo/client";

export const GQL_FRAGMENT_CONTENT_ITEM_FAQS = gql`
  fragment ContentItemPersonalProductFaqs on ContentItemPersonalProductFaqs {
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
    faqs {
      id
      accessButtonText
      content {
        id
        markdown
        parsedMarkdown
        title
        styles {
          property
          value
        }
      }
      links {
        id
        contentItemDocumentId
        label
      }
    }
  }
`;
