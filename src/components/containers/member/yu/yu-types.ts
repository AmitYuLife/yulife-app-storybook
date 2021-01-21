import { YuItemSlot, YuProductId } from "../../../../graphql/_core/schema/globalTypes";

export const employerItems: YuItemSlot[] = [
  YuItemSlot.map,
  YuItemSlot.compass,
  YuItemSlot.clockPendant,
  YuItemSlot.binoculars,
];
export const employerProducts: YuProductId[] = [
  YuProductId.yulife,
  YuProductId.yulife_alpha,
  YuProductId.yulife_lite,
  YuProductId.yulife_premium_offer,
  YuProductId.yulife_standard_offer,
  YuProductId.group_life_insurance,
  YuProductId.group_critical_illness,
  YuProductId.group_income_protection,
];
export const personalItems: YuItemSlot[] = [YuItemSlot.chest, YuItemSlot.gloves, YuItemSlot.boots, YuItemSlot.pants];

export const isEmployerItem = (item: YuItemSlot) => employerItems.includes(item);
export const getIsEmployerProduct = (item: YuProductId) => employerProducts.includes(item);
export const getIsPersonalItem = (item: YuItemSlot) => personalItems.includes(item);
