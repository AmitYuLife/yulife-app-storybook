import { MutationTuple } from "@apollo/react-hooks";
import { CreateOrUpdateBeneficiary, CreateOrUpdateBeneficiaryVariables } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_CREATE_OR_UPDATE_BENEFICIARY = gql`
  mutation CreateOrUpdateBeneficiary($beneficiary: CustomerBeneficiaryUpdate) {
    updateBeneficiaryForProduct(beneficiary: $beneficiary) {
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

export type CreateOrUpdateBeneficiaryMutationTuple = MutationTuple<
  CreateOrUpdateBeneficiary,
  CreateOrUpdateBeneficiaryVariables
>;
