export type ProductCode =
  | "GroupLife"
  | "GroupCritical"
  | "GroupIncome"
  | "LifeInsurance"
  | "IncomeProtection"
  | "CriticalIllness"
  | "TravelInsurance"
  | "Alpha";

export type ProductType = "employer" | "personal" | "charms";

export type ItemSlot = "pants" | "chest" | "gloves" | "boots" | "compass" | "map" | "binoculars" | "clockPendant";

export type ProductStatus = "active" | "locked" | "unlockable";

export type Rarity = "common" | "rare" | "epic";

export const employerItems = ["map", "compass", "clockPendant", "binoculars"];
export const employerProducts = ["Alpha", "GroupLife", "GroupCritical", "GroupIncome"];
export const personalItems = ["chest", "gloves", "boots", "pants"];

export const isEmployerItem = (item: string) => employerItems.includes(item);
export const getIsEmployerProduct = (item: string) => employerProducts.includes(item);
export const getIsPersonalItem = (item: ItemSlot) => personalItems.includes(item);
