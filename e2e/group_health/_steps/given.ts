import { dataManager } from "@yu-life/yulife-bdd-framework";

import { navigation } from "@navigation"
import { BUSINESS_PRODUCT_13_GHI_REWARDS, CUSTOMER_116_GHI_REWARDS } from "group_health/_data";

export const {
    logInAndGoToTab,
    loginAsUser,
} = navigation.login


export const archiveCustomerBusinessProductsByDate = (date: string) => async () => {
    await dataManager.triggerWorkerTask("ARCHIVE_CUSTOMER_BUSINESS_PRODUCTS_BY_DATE", {
		  date: date,
    })
}

export const synchroniseProductGoalParticipants = (prod: string) => async () => {
  await dataManager.triggerWorkerTask("SYNCHRONISE_PRODUCT_GOAL_PARTICIPANTS", {
    businessProductId: prod,
  })
}

export const createNextSeasonParticipations = async () => {
  await dataManager.triggerWorkerTask("CREATE_NEXT_SEASON_PARTICIPATIONS", {
  })
}

export const triggerCustomerGroupProductsStarted = async () => {
  await dataManager.triggerEvent("customer_group_products_started", {
    customers: [
      {
        customerId: CUSTOMER_116_GHI_REWARDS.data.customerId,
        products: [
          {
            productId: "Bupa_GHealth",
            customerProductId: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
          },
        ],
      },
    ],
  });
};