import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS = gql`
  mutation UpdateCustomerGPDetails($gpDetails: UpdateCustomerGPDetailsInput, $options: UpdateCustomerGPDetailsOptions) {
    updateCustomerGPDetails(gpDetails: $gpDetails, options: $options) {
      updated
    }
  }
`;
