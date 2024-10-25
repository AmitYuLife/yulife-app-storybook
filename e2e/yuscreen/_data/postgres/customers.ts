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
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_139 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Small",
    lastName: "Daddy",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Maxi",
    lastName: "Mise",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_140 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sean",
    lastName: "Spencer",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_141 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Anya",
    lastName: "Forgar",
    status: "onboarded",
  },
} as IDatabaseItem;