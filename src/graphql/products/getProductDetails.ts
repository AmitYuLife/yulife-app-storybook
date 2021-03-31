import gql from "graphql-tag";

export const GQL_QUERY_GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: String!) {
    getProductDetails(id: $id) {
      productId
      productName
      policyNumber
      earnRate
      productIconUri
      productDescription
      coverType
      policyLastUpdated
      benefit {
        description
        value
      }
      certificate {
        heading {
          description
          value
        }
        body
        condition {
          description
          value
        }
        companyName
        customerFullName
        customerJoinDate
      }
    }
  }
`;
