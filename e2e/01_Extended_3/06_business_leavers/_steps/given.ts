import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_ENDED, CUSTOMER_LEAVER } from "@data";
import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
export const { logInAndGoToTab } = navigation.login;

export const triggerFreeProduct =  async ()=> {
  await dataManager.triggerWorkerTask('Business.ArchiveCBPForCeasedProducts', { businessProductId: BUSINESS_PRODUCT_ENDED.product.data.product_id })
}