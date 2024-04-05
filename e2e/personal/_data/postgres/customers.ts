import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_20 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "oscar@dundermifflin.com",
    firstName: "Oscar",
    lastName: "Martinez",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_34 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "robin@jl.com",
    firstName: "Tim",
    lastName: "Drake",
    dateOfBirth: moment().subtract(40, "years").toDate(),
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
    dateOfBirth: moment().subtract(30, "years").toDate(),
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
    dateOfBirth: moment().subtract(30, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem
