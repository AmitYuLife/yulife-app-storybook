import gql from "graphql-tag";

export const GQL_QUERY_GET_CUSTOM_COVER_PRICES_BY_PERCENTAGES = gql`
  query GetCustomCoverPricesByPercentages($product: ProductCode!) {
    getCustomCoverPricesByPercentages(product: $product) {
      prices
    }
  }
`;
