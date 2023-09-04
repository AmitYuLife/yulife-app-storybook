import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const PARTNER_VOUCHER_1_BUPA = {
    type:"mongo",
    modelName:"partner_vouchers",
    data: {
        "code": "Yulife2",
        "denomination": 1,
        "partnerId": "BUPA_HEALTH_ASSESSMENT",
        "createdAt": moment().subtract(1, "d").toDate(), 
        "updatedAt": moment().subtract(1, "d").toDate(),
        "__v": 0
      }
} as IDatabaseItem

export const PARTNER_VOUCHER_2_GARMIN = {
  type:"mongo",
  modelName:"partner_vouchers",
  data: {
      "code": "Yulife2",
      "denomination": 1,
      "partnerId": "GARMIN_GB",
      "createdAt": moment().subtract(1, "d").toDate(), 
      "updatedAt": moment().subtract(1, "d").toDate(),
      "__v": 0
    }
} as IDatabaseItem