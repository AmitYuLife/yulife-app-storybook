import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_PRODUCT_2_GIP,
  BUSINESS_PRODUCT_2_RGL,
  BUSINESS_PRODUCT_10_GDent,
  BUSINESS_PRODUCT_11_GDent,
  BUSINESS_PRODUCT_12_GDent,
  BUSINESS_PRODUCT_1_WB,
  BUSINESS_PRODUCT_4_GCI,
  BUSINESS_PRODUCT_4_GDental,
  BUSINESS_PRODUCT_4_GDental_CHOICE,
  BUSINESS_PRODUCT_4_GIP,
  BUSINESS_PRODUCT_4_RGL,
  BUSINESS_PRODUCT_5_WB,
  BUSINESS_PRODUCT_9_GDent,
  BUSINESS_PRODUCT_12_REWARD_PASS,
} from "./business_product";
import * as cpe from "./customer_product_entity";
import * as customers from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_business_product";

export const CGP_43_WELLBEING = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
    customer_product_id: cpe.CPE_43_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_43.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_43.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_48_WELLBEING = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
    customer_product_id: cpe.CPE_48_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_48.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_48.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_49_RGL = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
    customer_product_id: cpe.CPE_49_RGL.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_49.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_49.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_49_GIP = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
    customer_product_id: cpe.CPE_49_GIP.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_49.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_49.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_49_GCI = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
    customer_product_id: cpe.CPE_49_GCI.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_49.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_49.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_49_WELLBEING = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
    customer_product_id: cpe.CPE_49_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_49.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_49.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_51_GDental = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
    customer_product_id: cpe.CPE_51_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_51.data.date_of_birth,
      salary: 100000,
      country: "UK",
      externalMembershipNumber: "34343434",
    },
  },
} as IDatabaseItem;

export const CGP_53_GIP = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
    customer_product_id: cpe.CPE_53_GIP.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_53.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_53.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CBP_GDENT_93 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_93_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "year").format("YYYY-MM-DD"),
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Bir","lastName":"Amber","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_95 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_95_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;

export const CGP_96_GDental = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
    customer_product_id: cpe.CPE_96_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_96.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CBP_GDENT_97 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_97_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;

export const CBP_GDENT_98 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_98_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_99 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_99_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentClosed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_100 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_100_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_101 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_101_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;

export const CBP_GDENT_102 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_102_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;

export const CBP_GDENT_103 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_103_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_104 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_104_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentClosed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_105 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_105_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "y").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
  },
} as IDatabaseItem;

export const CBP_GDENT_106 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
    customer_product_id: cpe.CPE_106_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().subtract(1, "m").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;

export const CBP_GDENT_107 = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
    customer_product_id: cpe.CPE_107_GDent.data.customer_product_id,
    category_id: 2,
    start_date: moment().add(1, "year").format("YYYY-MM-DD"),
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Bir","lastName":"Amber","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true}',
  },
} as IDatabaseItem;

export const CGP_125_GDental_Choice = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
    customer_product_id: cpe.CPE_125_GDent.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_125.data.date_of_birth,
      salary: 100000,
      country: "UK",
      externalMembershipNumber: "56565656",
    },
  },
} as IDatabaseItem;

export const CGP_126_WELLBEING_LEAVER = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
    customer_product_id: cpe.CPE_126_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(1, "years").toDate(),
    data: {
      salary: 60000,
      country: "UK",
      date_of_birth: customers.CUSTOMER_126_LEAVER_WELLBEING.data.date_of_birth,
    },
  },
} as IDatabaseItem;

export const CGP_DENTAl_RENEW_WELLBEING = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_5_WB.product.data.product_id,
    customer_product_id: cpe.CPE_DENTAL_RENEW_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_43.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_138_WELLBEING = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
    customer_product_id: cpe.CPE_138_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_138.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_138.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_GCI = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
    customer_product_id: cpe.CPE_139_GCI.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_139.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_RGL = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
    customer_product_id: cpe.CPE_139_RGL.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_139.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_DENTAL = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
    customer_product_id: cpe.CPE_138_WELLBEING.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_139.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_GIP = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
    customer_product_id: cpe.CPE_139_GIP.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(5, "months").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_GDENT = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
    customer_product_id: cpe.CPE_139_GDent.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_139.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_139_REWARD_PASS = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_12_REWARD_PASS.product.data.product_id,
    customer_product_id: cpe.CPE_139_REWARD_PASS.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_139.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
    customer_product_id: cpe.CPE_MAXIMISE_YU.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(5, "months").format("YYYY-MM-DD"),
    data: {
      date_of_birth: customers.CUSTOMER_MAXIMISE_YU.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_141_RGL = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_2_RGL.product.data.product_id,
    customer_product_id: cpe.CPE_141_RGL.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_141.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_141.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;

export const CGP_141_GIP = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_2_GIP.product.data.product_id,
    customer_product_id: cpe.CPE_141_GIP.data.customer_product_id,
    category_id: 1,
    start_date: customers.CUSTOMER_141.data.start_date,
    data: {
      date_of_birth: customers.CUSTOMER_139.data.date_of_birth,
      salary: 100000,
      country: "UK",
    },
  },
} as IDatabaseItem;
