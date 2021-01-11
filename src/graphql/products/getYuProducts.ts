import gql from "graphql-tag";

export const GQL_QUERY_GET_YU_PRODUCTS = gql`
  query GetYuProducts($productType: ProductType) {
    getYuProducts(productType: $productType) {
      productId
      productType
      status
      name
      code
      itemSlot
      earnRate
      description
      options {
        type
        earnRate
        heading
        percentageCovered
        styles {
          world
          name
          icon
          background
        }
      }
    }
  }
`;
