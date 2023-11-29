import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YU_COIN_POWER_INFO = gql`
  query GetYuCoinPowerInfo($productIds: [String!]!) {
    getYuCoinPowerInfo(productIds: $productIds) {
      yuCoin {
        earnRate
        earnings
        info {
          title
          description
          button {
            label
          }
        }
      }
      productPreviews {
        title
        items {
          id
          title
          description
          yuCoinPower
          backgroundColor
          image {
            id
            uri
          }
        }
      }
      sections {
        title
        items {
          title
          milestone
          rewardText
          icon {
            id
            uri
          }
        }
      }
      products {
        title
        yuCoinPower
        description
        backgroundColor
        image {
          id
          uri
        }
        button {
          label
          sduiAction {
            type
            payload
          }
          productAction {
            productId
            nextRouteId
            nextModalId
            shouldBeNormalised
          }
        }
      }
    }
  }
`;
