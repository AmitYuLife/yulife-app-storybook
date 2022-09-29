import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_CONTINUE_MODAL = gql`
  query GetPersonalProductStepContinueModal($productId: String!) {
    copy: getPersonalProductStepContinueModal(productId: $productId) {
      id
      image {
        id
        uri
      }
      heading
      subheading
      continueCtaLabel
      startOverCtaLabel
    }
  }
`;
