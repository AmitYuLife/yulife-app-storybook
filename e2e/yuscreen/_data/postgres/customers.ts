import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "dan@yulife.com",
    firstName: "Dan",
    lastName: "Greane",
    dateOfBirth: moment().subtract(28, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_43 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dominic",
    lastName: "Toledo",
    dateOfBirth: moment().subtract(45, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_45 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Richard",
    lastName: "Wurmbrand",
    dateOfBirth: moment().subtract(67, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_48 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jack",
    lastName: "Magic",
    dateOfBirth: moment().subtract(36, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_49 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sky",
    lastName: "Gorenje",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_51 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ted",
    lastName: "Karcher",
    dateOfBirth: moment().subtract(45, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_53 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Zero",
    lastName: "Earnrate",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_GHI = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Teddy",
    lastName: "Group",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_GHI_STARTED = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paul",
    lastName: "Starter",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_93 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "David",
    lastName: "Yishai",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_95 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Future",
    lastName: "Enrol",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_96 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "InForce",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_97 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "Canenrol",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_98 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "Inholding",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_99 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Nochoicemade",
    lastName: "Enrolclosed",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_100 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Choicemade",
    lastName: "Enrolclosed",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_101 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolnotopen",
    lastName: "Optout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_102 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolopen",
    lastName: "Optout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_103 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolopen",
    lastName: "Choicedmade",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_104 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolclosed",
    lastName: "Optedout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_105 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolclosed",
    lastName: "Nochoice",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_106 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Product",
    lastName: "Inforce",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_107 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Product",
    lastName: "Availablesoon",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_109 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "Onboardorino",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_110 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "Onboardorino",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_115 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "InBetweeno",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_125 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dentz",
    lastName: "Choice",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_126_LEAVER_WELLBEING = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Leaves",
    lastName: "McLeaverson",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_DENTAL_RENEW_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Todd",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_138 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Big",
    lastName: "Daddy",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Maxi",
    lastName: "Mise",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem
