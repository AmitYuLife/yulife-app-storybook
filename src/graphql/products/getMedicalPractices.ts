import { gql } from "@apollo/client";

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
