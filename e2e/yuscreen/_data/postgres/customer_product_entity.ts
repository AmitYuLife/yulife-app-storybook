import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";
import * as employee from "./business_employees";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_DENTAL_3 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_45.data.customerId,
    customerProductId: "YUCPID0000000141",
    earn_rate: 6,
    productVariantId: "Bupa_Dent_01_03",
    startDate: moment().format(),
    endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
    world_id: "ocean",
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_43_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000143",
    customer_id: customer.CUSTOMER_43.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;

export const CPE_48_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000148",
    customer_id: customer.CUSTOMER_48.data.customerId,
    earn_rate: 1,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().format("YYYY-MM-DD"),
  },
} as IDatabaseItem;

export const CPE_49_RGL = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000149",
    customer_id: customer.CUSTOMER_49.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_ReGL_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_49.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_49_GIP = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000150",
    customer_id: customer.CUSTOMER_49.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_GIP_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_49.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_49_GCI = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000151",
    customer_id: customer.CUSTOMER_49.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_GCI_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_49.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_49_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000152",
    customer_id: customer.CUSTOMER_49.data.customerId,
    earn_rate: 1,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_49.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_51_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000153",
    customer_id: customer.CUSTOMER_51.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_51.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_53_GIP = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000155",
    customer_id: customer.CUSTOMER_53.data.customerId,
    earn_rate: 0,
    product_variant_id: "AIG_GIP_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_53.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_GHI_FUTURE = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011375",
    customer_id: customer.CUSTOMER_GHI.data.customerId,
    earn_rate: 10,
    start_date: moment().add(1, "week").format("YYYY-MM-DD"),
    end_date: "2199-12-31",
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "Bupa_GHealth_01_01",
    business_employee_id: employee.BUSINESS_EMPLOYEE_GHI.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_GHI_STARTED = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011376",
    customer_id: customer.CUSTOMER_GHI_STARTED.data.customerId,
    earn_rate: 10,
    start_date: "2023-05-05",
    end_date: "2199-12-31",
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "Bupa_GHealth_01_01",
    business_employee_id: employee.BUSINESS_EMPLOYEE_GHI_STARTED.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_93_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011377",
    customer_id: customer.CUSTOMER_93.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "year").format("YYYY-MM-DD"),
    is_banned_from_product: false,
    business_employee_id: employee.BUSINESS_EMPLOYEE_93.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_95_GDent = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_95.data.customerId,
    customer_product_id: "YUCPID0000011379",
    earn_rate: 5,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    end_date: "2199-12-31",
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "Bupa_GDentPlan_01_01",
    business_employee_id: employee.BUSINESS_EMPLOYEE_95.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_96_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011380",
    customer_id: customer.CUSTOMER_96.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_96.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_97_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011381",
    customer_id: customer.CUSTOMER_97.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_97.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_98_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011382",
    customer_id: customer.CUSTOMER_98.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_98.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_99_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011383",
    customer_id: customer.CUSTOMER_99.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: false,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_99.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_100_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011384",
    customer_id: customer.CUSTOMER_100.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_100.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_101_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011385",
    customer_id: customer.CUSTOMER_101.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_101.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_102_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011386",
    customer_id: customer.CUSTOMER_102.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_102.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_103_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011387",
    customer_id: customer.CUSTOMER_103.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_103.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_104_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011388",
    customer_id: customer.CUSTOMER_104.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: false,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_104.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_105_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011389",
    customer_id: customer.CUSTOMER_105.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_105.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_106_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011390",
    customer_id: customer.CUSTOMER_106.data.customerId,
    earn_rate: 6,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_106.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_107_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011391",
    customer_id: customer.CUSTOMER_107.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentPlan_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().add(1, "year").format("YYYY-MM-DD"),
    is_banned_from_product: false,
    business_employee_id: employee.BUSINESS_EMPLOYEE_107.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_125_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011411",
    customer_id: customer.CUSTOMER_125.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentChoice_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_125.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_126_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011412",
    customer_id: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
    earn_rate: 1,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
    end_date: moment().subtract(10, "weeks").format("YYYY-MM-DD"),
  },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011427",
    customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
  },
} as IDatabaseItem;

export const CPE_138_WELLBEING = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011428",
    customer_id: customer.CUSTOMER_138.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_138_b.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_RGL = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID000000011429",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_ReGL_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(5, "months").format(),
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_GIP = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID000000011430",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_GIP_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().add(5, "months").format(),
    endDate: moment().add(1, "year").add(1, "month").format(),
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_GCI = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011432",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_GCI_01_01",
    archived: false,
    taken_up: true,
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_GDent = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011433",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 5,
    product_variant_id: "Bupa_GDentChoice_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_GHI = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011434",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 10,
    start_date: moment().format("YYYY-MM-DD"),
    end_date: "2199-12-31",
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "Bupa_GHealth_01_01",
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_139_REWARD_PASS = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000011438",
    customer_id: customer.CUSTOMER_139.data.customerId,
    earn_rate: 0,
    product_variant_id: "YuLife_RewardPass_01_01",
    archived: false,
    taken_up: true,
    start_date: moment().format("YYYY-MM-DD"),
    business_employee_id: employee.BUSINESS_EMPLOYEE_139.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000000199",
    customer_id: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    earn_rate: 10,
    product_variant_id: "AIG_GIP_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(5, "months").format(),
    endDate: moment().add(1, "year").format(),
    business_employee_id: employee.BUSINESS_EMPLOYEE_MAXIMISE_YU.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_141_RGL = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID000000011435",
    customer_id: customer.CUSTOMER_141.data.customerId,
    earn_rate: 10,
    product_variant_id: "MetLife_GLA_UM_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(5, "months").format(),
    business_employee_id: employee.BUSINESS_EMPLOYEE_141.data.business_employee_id,
  },
} as IDatabaseItem;

export const CPE_141_GIP = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID000000011436",
    customer_id: customer.CUSTOMER_141.data.customerId,
    earn_rate: 10,
    product_variant_id: "MetLife_GIP_UM_01_01",
    archived: false,
    taken_up: true,
    startDate: moment().subtract(5, "months").format(),
    endDate: moment().add(5, "months").format(),
    business_employee_id: employee.BUSINESS_EMPLOYEE_141.data.business_employee_id,
  },
} as IDatabaseItem;
