import { GetYuScreen_getYuScreen_productSlots as ProductSlots } from "@graphql/_core/schema";
import { ItemSlotProps } from "../item-slot/item-slot";

const filterOnboardingProducts = (productSlot: ProductSlots) => productSlot.showOnOnboarding;

const removeProductOnPress = (productSlot: ProductSlots): ItemSlotProps => ({
  ...productSlot,
  onPress: null,
});

// UI can fit 4 items total and will always display a placeholder.
const productsToDisplay = 3;

export const getOnboardingProducts = (productSlots: Array<ProductSlots> = [], placeholder: ItemSlotProps) => {
  const onboardingProducts = productSlots
    .filter(filterOnboardingProducts)
    .slice(0, productsToDisplay)
    .map(removeProductOnPress);
  return [...onboardingProducts, placeholder];
};
