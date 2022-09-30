import { gql } from "@apollo/client";

export const GQL_QUERY_GET_PRODUCT_YUMOJI_PART = gql`
  query GetProductYumojiPart($customerProductId: String!) {
    getProductYumojiPart(customerProductId: $customerProductId) {
      yumojiPartType
    }
  }
`;
