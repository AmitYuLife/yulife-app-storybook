import { GQL_FRAGMENT_REMOTE_IMAGE } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";

export const GQL_QUERY_GET_PRODUCT_EARN_RATE = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  query GetProductEarnRate($customerProductId: String) {
    getProductEarnRate(customerProductId: $customerProductId) {
      columns {
        icons {
          ...RemoteImage
        }
        values
        valueType
        themeType
        header {
          title
          power
        }
        flex
      }
      heading
      footer {
        markdown
      }
    }
  }
`;
