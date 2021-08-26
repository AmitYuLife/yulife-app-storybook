import gql from "graphql-tag";

export const GQL_MUTATION_RESET_PERSONAL_PRODUCT_STEP = gql`
  mutation ResetPersonalProductStep($productId: String!) {
    resetPersonalProductStep(productId: $productId)
  }
`;
