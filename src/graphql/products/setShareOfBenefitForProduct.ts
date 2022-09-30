import { MutationTuple } from "@apollo/client";
import { SetShareOfBenefitForProduct, SetShareOfBenefitForProductVariables } from "@graphql/_core/schema";
import { gql } from "@apollo/client";

export const GQL_MUTATION_SET_SHARE_OF_BENEFIT_FOR_PRODUCT = gql`
  mutation SetShareOfBenefitForProduct($productId: ID!, $shares: [BeneficiaryShareOfBenefit!]!) {
    setShareOfBenefitForProduct(productId: $productId, shares: $shares) {
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

export type SetShareOfBenefitForProductMutationTuple = MutationTuple<
  SetShareOfBenefitForProduct,
  SetShareOfBenefitForProductVariables
>;
