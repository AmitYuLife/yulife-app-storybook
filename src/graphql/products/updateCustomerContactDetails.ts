import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_CUSTOMER_CONTACT_DETAILS = gql`
  mutation UpdateContactDetails($contactDetails: UpdateContactDetailsInput) {
    updateContactDetails(contactDetails: $contactDetails) {
      updated
    }
  }
`;
