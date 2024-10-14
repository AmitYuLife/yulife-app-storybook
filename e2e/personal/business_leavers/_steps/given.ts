import { BUSINESS_EMPLOYEE_STORE_ACCESS_PERIOD, BUSINESS_PRODUCT_ENDED } from "../../_data";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export { logInAndGoToTab } from "../../_common/given";

export const triggerFreeProduct =  async ()=> {
  await dataManager.triggerWorkerTask('MemberData.Lifecycle.ArchiveCBPForCeasedProducts', { businessProductId: BUSINESS_PRODUCT_ENDED.product.data.product_id, date: moment().subtract(2, "d").format("YYYY-MM-DD") })
}

export const triggerDeactivateEmployee = async () => {
  await dataManager.triggerWorkerTask("MemberAccount.Offboarding.DeactivateEmployee", {
    employee: {
      businessEmployeeId: BUSINESS_EMPLOYEE_STORE_ACCESS_PERIOD.data.business_employee_id,
      employmentLeaveDate: moment().format("YYYY-MM-DD"),
    },
  });
};
