import { GetYulifer_getYulifer_products } from "@graphql/_core/schema";

export function getActiveProducts(products: GetYulifer_getYulifer_products): GetYulifer_getYulifer_products {
  return {
    employer: (products.employer || []).filter(({ active }) => active),
    charms: (products.charms || []).filter(({ active }) => active),
    personal: (products.personal || []).filter(({ active, policyNumber }) => active && !!policyNumber),
  } as GetYulifer_getYulifer_products;
}
