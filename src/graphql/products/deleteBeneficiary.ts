import { MutationTuple } from "@apollo/react-hooks";
import { RemoveBeneficiaryFromProduct, RemoveBeneficiaryFromProductVariables } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_REMOVE_BENEFICIARY_FROM_PRODUCT = gql`
  mutation RemoveBeneficiaryFromProduct($productId: ID!, $beneficiaryId: ID!) {
    removeBeneficiaryFromProduct(productId: $productId, beneficiaryId: $beneficiaryId) {
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

export type RemoveBeneficiaryFromProductMutationTuple = MutationTuple<
  RemoveBeneficiaryFromProduct,
  RemoveBeneficiaryFromProductVariables
>;
