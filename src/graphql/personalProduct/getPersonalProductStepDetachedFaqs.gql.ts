import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED_FAQS = gql`
  query GetPersonalProductStepDetachedFaqs($productId: String!) {
    getPersonalProductStepDetachedFaqs(productId: $productId) {
      stepId
      customerProductId
      body {
        __typename
        ... on ContentItemPersonalProductFaqs {
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
      }
    }
  }
`;
