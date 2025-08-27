import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const { logInAndGoToTab } = navigation.login;

/** a battle pass is created when a product is created with the product code "RewardPass" */
export const triggerProductCreated =
  (businessAccountId: string, entityId: string, rewardPassId: string, eventStartDate: string) =>
  async () => {
    await dataManager.triggerEvent("business_product_created", {
      eventStartDate,
      rewardPassId,
      businessAccountId,
      internalProductId: entityId,
      productCode: "RewardPass",
    });
  };
