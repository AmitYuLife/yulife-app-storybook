import gql from "graphql-tag";

export const GQL_MUTATION_SUBSCRIBE_TO_PRODUCT = gql`
  mutation SubscribeToProduct($productCode: ProductCode) {
    subscribeToProduct(productCode: $productCode) {
      confirmed
      purchased
    }
  }
`;
