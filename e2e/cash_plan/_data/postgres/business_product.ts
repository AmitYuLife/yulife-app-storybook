import { Carrier, ProductCode, generateProductRecords } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_CASH_CORE, BUSINESS_ACCOUNT_CASH_EPIC } from "./business";

export const BUSINESS_PRODUCT_CASH_CORE = generateProductRecords({
  productCode: ProductCode.cashPlanCore,
  carrier: Carrier.Bupa,
  productId: "YUG0000200",
  policyName: "Health Cash Plan (Core)",
  businessAccountId: BUSINESS_ACCOUNT_CASH_CORE.business.data.businessAccountId,
  categories: [
    {
      categoryId: "1",
      categoryName: "All employees",
      categoryDescription: "All employees",
      earnRate: 10,
      versionId: 1,
      versionArchived: false,
      benefit_set_product_version_id: "Bupa_CashPlanCore_01",
      default_product_version_benefit_set_id: "Cash Plan Core | Family",
    },
  ],
});

export const BUSINESS_PRODUCT_CASH_EPIC = generateProductRecords({
  productCode: ProductCode.cashPlanEpic,
  carrier: Carrier.Bupa,
  productId: "YUG0000201",
  policyName: "Health Cash Plan (Epic)",
  businessAccountId: BUSINESS_ACCOUNT_CASH_EPIC.business.data.businessAccountId,
  categories: [
    {
      categoryId: "1",
      categoryName: "All employees",
      categoryDescription: "All employees",
      earnRate: 10,
      versionId: 1,
      versionArchived: false,
      benefit_set_product_version_id: "Bupa_CashPlanEpic_01",
      default_product_version_benefit_set_id: "Cash Plan Epic | Family",
    },
  ],
});
