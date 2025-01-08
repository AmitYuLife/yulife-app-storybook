import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_34 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "robin@jl.com",
    firstName: "Tim",
    lastName: "Drake",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_LEAVER = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "business_leaver@yulife.com",
    firstName: "Bus",
    lastName: "Leaf",
    status: "onboarded"
  },
} as IDatabaseItem;


export const CUSTOMER_FUTURE_PRODUCT = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bobby",
    lastName: "Smith",
    status: "onboarded",
  }
} as IDatabaseItem

export const CUSTOMER_111 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Activo",
    lastName: "Pensionio",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_112 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pending",
    lastName: "DeNoContribution",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_113 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pending",
    lastName: "DeContribution",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_114 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paused",
    lastName: "DeContribution",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_126_LEAVER_WELLBEING = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Leaves",
    lastName: "McLeaverson",
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_STORE_ACCESS_PERIOD = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Greg",
    lastName: "Egg",
    status: "onboarded"
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_DENIED = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Tom",
    lastName: "Wambsgans",
    status: "onboarded"
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_NEVER = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jill",
    lastName: "Wacoms",
    status: "onboarded"
  },
} as IDatabaseItem;

