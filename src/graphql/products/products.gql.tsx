import gql from "graphql-tag";
import { UpsertTopUpsProductEntity, UpsertTopUpsProductEntityVariables } from "@graphql/_core/schema";
import { PackageId } from "@components/screens/products/fib/fib.helper";
import { MutationTuple } from "@apollo/react-hooks";

export type LifeInsuranceUserAnswers = {
  questionId: string;
  value: string;
};
export interface GetLifeInsuranceTopUpsVars {
  grossSalary: number;
  coverType: PackageId;
  customCoverPercentage?: number;
  userAnswers?: LifeInsuranceUserAnswers[];
}

export const GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST = gql`
  query GetTopUpsEstimateCost($input: TopUpsEstimateCostInput!, $product: ProductCode!) {
    getTopUpsEstimateCost(input: $input, product: $product) {
      estimatedCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
    }
  }
`;

export const GQL_MUTATION_CREATE_TOP_UPS_QUOTE = gql`
  mutation CreateTopUpsQuote($input: CreateTopUpsQuoteInput!, $product: ProductCode!) {
    createTopUpsQuote(input: $input, product: $product) {
      quoteId
      productEntityId
      actualCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
      rejected
      medicalInvestigationRequired
    }
  }
`;

export const GQL_QUERY_GET_TOP_UPS_QUOTE = gql`
  query GetTopUpsQuote($input: GetTopUpsQuoteInput!, $product: ProductCode!) {
    getTopUpsQuote(input: $input, product: $product) {
      quoteId
      productEntityId
      actualCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
      rejected
      status
      medicalInvestigationRequired
      userAnswers {
        questionId
        value
      }
    }
  }
`;

export const GQL_GET_MEDICAL_PRACTICES = gql`
  query MedicalPractices($name: String!) {
    getMedicalPractices(nameOrPostcode: $name) {
      organisationCode
      name
      address1
      address2
      address3
      address4
      address5
      postCode
      practicioners {
        organisationCode
        name
        parentOrganisationCode
      }
    }
  }
`;

export const GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY = gql`
  mutation UpsertTopUpsProductEntity($product: ProductCode!) {
    upsertTopUpsProductEntity(product: $product) {
      id
    }
  }
`;

export const GQL_MUTATION_UPDATE_CUSTOMER_CONTACT_DETAILS = gql`
  mutation UpdateContactDetails($contactDetails: UpdateContactDetailsInput) {
    updateContactDetails(contactDetails: $contactDetails) {
      updated
    }
  }
`;

export const GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS = gql`
  mutation UpdateCustomerGPDetails($gpDetails: UpdateCustomerGPDetailsInput, $options: UpdateCustomerGPDetailsOptions) {
    updateCustomerGPDetails(gpDetails: $gpDetails, options: $options) {
      updated
    }
  }
`;

export type UpsertProductEntityMutationTuple = MutationTuple<
  UpsertTopUpsProductEntity,
  UpsertTopUpsProductEntityVariables
>;
