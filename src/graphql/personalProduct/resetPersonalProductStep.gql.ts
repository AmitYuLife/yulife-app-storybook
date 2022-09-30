import { gql } from "@apollo/client";

export const GQL_MUTATION_RESET_PERSONAL_PRODUCT_STEP = gql`
  mutation ResetPersonalProductStep($productId: String!) {
    resetPersonalProductStep(productId: $productId)
  }
`;
