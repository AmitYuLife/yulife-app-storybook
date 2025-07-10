import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  CPE_GCI_SA_3,
  CPE_GIP_SA_1,
  CPE_GrFun_SA_1,
  CPE_GrFun_SA_2,
  CPE_LSDC_SA_1,
  CPE_MeGL_SA_1,
  CPE_MeGL_SA_2,
  CPE_OM_MeGL_SA_1,
  CPE_SpGL_SA_2,
  CPE_TmpGIP_SA_1,
} from "./customer_product_entity";
import moment = require("moment");
import {
  BUSINESS_PRODUCT_1_OM_MeGL,
  BUSINESS_PRODUCT_SA_1_GCI,
  BUSINESS_PRODUCT_SA_1_GIP,
  BUSINESS_PRODUCT_SA_1_GrFun,
  BUSINESS_PRODUCT_SA_1_LSDC,
  BUSINESS_PRODUCT_SA_1_MeGL,
  BUSINESS_PRODUCT_SA_1_SpGL,
  BUSINESS_PRODUCT_SA_1_TmpGIP,
} from "./business_product";

const type = "postgres";
const modelName = "customer_business_product";

export const CBP_SA_1_MEGL = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590149",
    business_product_id: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
    customer_product_id: CPE_MeGL_SA_1.data.customer_product_id,
    category_id: 1,
    start_date: CPE_MeGL_SA_1.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Multiple of Salary","benefitAmount":2000000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":4800000,"medicalUwRequired":true}',
  },
} as IDatabaseItem;

export const CBP_SA_1_GrFun = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590150",
    business_product_id: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
    customer_product_id: CPE_GrFun_SA_1.data.customer_product_id,
    category_id: "1",
    start_date: CPE_GrFun_SA_1.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Fixed","benefitAmount":50000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":50000,"medicalUwRequired":false}',
  },
} as IDatabaseItem;

export const CBP_SA_1_GIP = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590151",
    business_product_id: BUSINESS_PRODUCT_SA_1_GIP.product.data.product_id,
    customer_product_id: CPE_GIP_SA_1.data.customer_product_id,
    category_id: "1",
    start_date: CPE_GIP_SA_1.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Fixed","benefitAmount":75000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":75000,"medicalUwRequired":true}',
  },
} as IDatabaseItem;

export const CBP_SA_1_LSDC = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590152",
    business_product_id: BUSINESS_PRODUCT_SA_1_LSDC.product.data.product_id,
    customer_product_id: CPE_LSDC_SA_1.data.customer_product_id,
    category_id: "1",
    start_date: CPE_LSDC_SA_1.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Multiple of Salary","benefitAmount":1500000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":4800000,"medicalUwRequired":true}',
  },
} as IDatabaseItem;

export const CBP_SA_1_TmpGIP = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590153",
    business_product_id: BUSINESS_PRODUCT_SA_1_TmpGIP.product.data.product_id,
    customer_product_id: CPE_TmpGIP_SA_1.data.customer_product_id,
    category_id: "1",
    start_date: CPE_TmpGIP_SA_1.data.start_date,
    data: '{"jobTitle":"Accountant","benefitType":"Fixed","benefitAmount":27828,"salary":433680,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":433680,"targetCover":27827.8,"medicalUwRequired":true}',
  },
} as IDatabaseItem;

export const CBP_SA_2_MEGL = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590154",
    business_product_id: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
    customer_product_id: CPE_MeGL_SA_2.data.customer_product_id,
    category_id: 1,
    start_date: CPE_MeGL_SA_2.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Multiple of Salary","benefitAmount":2000000,"salary":1200000,"maritalStatus":"Married","spouseIndicator":1,"annualRiskSalary":1200000,"targetCover":4800000,"medicalUwRequired":false}',
  },
} as IDatabaseItem;

export const CBP_SA_2_SpGL = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590155",
    business_product_id: BUSINESS_PRODUCT_SA_1_SpGL.product.data.product_id,
    customer_product_id: CPE_SpGL_SA_2.data.customer_product_id,
    category_id: 1,
    start_date: CPE_SpGL_SA_2.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Multiple of Salary","benefitAmount":2000000,"salary":1200000,"maritalStatus":"Married","spouseIndicator":1,"annualRiskSalary":1200000,"targetCover":4800000,"medicalUwRequired":false}',
  },
} as IDatabaseItem;

export const CBP_SA_2_GrFun = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590156",
    business_product_id: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
    customer_product_id: CPE_GrFun_SA_2.data.customer_product_id,
    category_id: "1",
    start_date: CPE_GrFun_SA_2.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Fixed","benefitAmount":50000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":50000,"medicalUwRequired":false}',
  },
} as IDatabaseItem;

export const CBP_SA_3_GCI = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590157",
    business_product_id: BUSINESS_PRODUCT_SA_1_GCI.product.data.product_id,
    customer_product_id: CPE_GCI_SA_3.data.customer_product_id,
    category_id: "1",
    start_date: CPE_GCI_SA_3.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Fixed","benefitAmount":30000,"salary":1200000,"maritalStatus":"","spouseIndicator":0,"annualRiskSalary":1200000,"targetCover":50000,"medicalUwRequired":true}',
  },
} as IDatabaseItem;

export const CBP_SA_1_OM_MEGL = {
  type,
  modelName,
  data: {
    group_ind_policy_id: "SA_GPID0000590158",
    business_product_id: BUSINESS_PRODUCT_1_OM_MeGL.product.data.product_id,
    customer_product_id: CPE_OM_MeGL_SA_1.data.customer_product_id,
    category_id: 1,
    start_date: CPE_OM_MeGL_SA_1.data.start_date,
    data: '{"jobTitle":"Director","benefitType":"Multiple of Salary","benefitAmount":2000000,"salary":1200000,"maritalStatus":"","spouseIndicator":1,"annualRiskSalary":1200000,"targetCover":4800000,"medicalUwRequired":true}',
  },
} as IDatabaseItem;
