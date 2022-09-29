import { gql } from "@apollo/client";
import { GQL_QUERY_PRODUCT_PAYMENT_HISTORY_ITEM, GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL } from "./_fragments.gql";

export const GQL_QUERY_PRODUCT_PAYMENT_HISTORY = gql`
  ${GQL_QUERY_PRODUCT_PAYMENT_HISTORY_ITEM}
  ${GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL}
  query GetProductPaymentHistory($customerProductId: String!) {
    getProductPaymentHistory(customerProductId: $customerProductId) {
      infoPanel {
        ...YuScreenProductPaymentHistoryInfoPanel
      }
      items {
        ...YuScreenProductPaymentHistoryItem
      }
    }
  }
`;
