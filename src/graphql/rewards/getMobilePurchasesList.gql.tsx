import { gql } from "@apollo/client";

export const GQL_QUERY_GET_MOBILE_PURCHASES_LIST = gql`
  query GetMobilePurchasesList($limit: Int, $offset: Int) {
    data: getMobilePurchasesList(limit: $limit, offset: $offset) {
      __typename
      id
      sduiStepId
      list {
        __typename
        id
        date
        title
        yuCoin
        status
        statusColour
      }
    }
  }
`;
