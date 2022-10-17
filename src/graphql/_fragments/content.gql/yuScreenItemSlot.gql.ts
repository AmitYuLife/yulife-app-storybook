import { gql } from "@apollo/client";

export const GQL_FRAGMENT_YU_SCREEN_ITEM_SLOT = gql`
  fragment YuScreenItemSlot on YuScreenItemSlot {
    iconUrl
    backgroundUrl
  }
`;
