import { GetYuScreen_getYuScreen_productSlots as ProductSlots } from "@graphql/_core/schema";
import { YuScreenSalesChannelType } from "@graphql/_core/schema/globalTypes";

const filterGroupProducts = (productSlot: ProductSlots) => productSlot.type === YuScreenSalesChannelType.B2B;

const itemsToDisplay = 4;

export const getOnboardingProducts = (productSlots: Array<ProductSlots> = [], placeholder: ProductSlots) => {
  const onboardingProducts = productSlots.filter(filterGroupProducts);

  return Array.from({ length: itemsToDisplay }, (_, i) => {
    const productSlot = onboardingProducts[i] ?? { ...placeholder, id: `${placeholder.id}-${i}` };
    return {
      ...productSlot,
      onPress: null,
    };
  });
};
