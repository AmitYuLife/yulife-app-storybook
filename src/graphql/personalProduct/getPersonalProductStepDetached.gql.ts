import gql from "graphql-tag";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED = gql`
  query GetPersonalProductStepDetached($productId: String!, $stepId: String!) {
    getPersonalProductStepDetached(productId: $productId, stepId: $stepId) {
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
        ... on ContentItemPersonalProductDocuments {
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
      }
    }
  }
`;
