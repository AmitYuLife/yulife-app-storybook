import { GQL_YU_SCREEN_PRODUCT_SLOT_ITEM, GQL_YU_SCREEN_PRODUCT_SLOT } from "@graphql/yuscreen/_fragments.gql";
import client from "@graphql/_core/client";
import { YuScreenProductSlots } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS = gql`
  ${GQL_YU_SCREEN_PRODUCT_SLOT}
  ${GQL_YU_SCREEN_PRODUCT_SLOT_ITEM}
  query YuScreenProductSlots {
    getYuScreenProductSlots {
      left {
        ...YuScreenProductSlot
      }
      right {
        ...YuScreenProductSlot
      }
      bottom {
        ...YuScreenProductSlotItem
      }
    }
  }
`;

export const getYuScreenProductSlots = () => {
  return client().query<YuScreenProductSlots>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS,
  });
};
