import { BUSINESS_PRODUCT_ENDED } from "../../_data";
import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
export const { logInAndGoToTab } = navigation.login;

export const triggerFreeProduct =  async ()=> {
  await dataManager.triggerWorkerTask('MemberData.Lifecycle.ArchiveCBPForCeasedProducts', { businessProductId: BUSINESS_PRODUCT_ENDED.product.data.product_id, date: moment().subtract(2, "d").format("YYYY-MM-DD") })
}