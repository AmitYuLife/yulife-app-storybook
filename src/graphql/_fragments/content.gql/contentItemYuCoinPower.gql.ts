import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_YU_COIN_POWER = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemYuCoinPower on ContentItemYuCoinPower {
    id
    yuCoinPower
    styles {
      ...SduiStyle
    }
    marginHorizontal
    interactive
  }
`;
