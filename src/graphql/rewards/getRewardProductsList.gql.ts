import { gql } from "@apollo/client";
import { GQL_FRAGMENT_PRODUCT_ACTION, GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";

export const GQL_QUERY_GET_REWARDS_PRODUCT_LIST = gql`
  ${GQL_FRAGMENT_PRODUCT_ACTION}
  ${GQL_FRAGMENT_SDUI_ACTION}

  query GetRewardsProductsList {
    getRewardsProductsList {
      id
      backgroundImage {
        id
        uri
      }
      yuCoinPowerIncrease
      title
      cta
      imageOverlay {
        text
        color
        styles {
          property
          value
        }
      }
      onPress {
        productAction {
          ...ProductAction
        }
        sduiAction {
          ...SduiAction
        }
      }
      event {
        type
        payload
      }
    }
  }
`;
