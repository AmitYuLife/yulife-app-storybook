import gql from "graphql-tag";

export const GQL_QUERY_GET_PRODUCT_BENEFICIARIES = gql`
  query GetProductBeneficiaries($productId: ID) {
    getProductBeneficiaries(productId: $productId) {
      id
      beneficiaries {
        id
        firstName
        lastName
        phoneNumber
        relationship
        shareOfBenefit
      }
    }
  }
`;
