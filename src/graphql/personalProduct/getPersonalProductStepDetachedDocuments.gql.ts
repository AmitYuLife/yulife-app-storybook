import gql from "graphql-tag";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED_DOCUMENTS = gql`
  query GetPersonalProductStepDetachedDocuments($productId: String!) {
    getPersonalProductStepDetachedDocuments(productId: $productId) {
      stepId
      customerProductId
      body {
        __typename
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
