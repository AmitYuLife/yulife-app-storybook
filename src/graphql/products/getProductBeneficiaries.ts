import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PRODUCT_BENEFICIARIES = gql`
  query GetProductBeneficiaries($productId: ID) {
    getProductBeneficiaries(productId: $productId) {
      id
      beneficiaries {
        id
        firstName
        lastName
        fullName
        phoneNumber
        relationship
        shareOfBenefit
      }
    }
  }
`;
