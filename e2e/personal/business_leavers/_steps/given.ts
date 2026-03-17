import { BUSINESS_EMPLOYEE_STORE_ACCESS_PERIOD, BUSINESS_PRODUCT_ENDED } from "../../_data";
import { dataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export { loginAsUser } from "../../_common/given";

export const triggerFreeProduct =  async ()=> {
  await dataManager.triggerWorkerTask('BACKFILL_ARCHIVE_CBP_FOR_CEASED_PRODUCTS', { businessProductId: BUSINESS_PRODUCT_ENDED.product.data.product_id, date: moment().subtract(2, "d").format("YYYY-MM-DD") })
}

export const triggerDeactivateEmployee = (businessEmployee: IDatabaseItem) => async () => {
  await dataManager.triggerWorkerTask("DEACTIVATE_EMPLOYEE", {
    employee: {
      businessEmployeeId: businessEmployee.data.business_employee_id,
      employmentLeaveDate: moment().format("YYYY-MM-DD"),
    },
  });
};
