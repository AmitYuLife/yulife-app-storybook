import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
  createCustomerRecords,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_1 } from "./business";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dan",
    lastName: "Greane",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_FIIT = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Timothy",
    lastName: "Fiitman",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_BODY_COACH = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Joe",
    lastName: "Wicks",
    status: "onboarded",
    preferredContentLocation: "GB",
  },
} as IDatabaseItem;

export const CUSTOMER_122 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Testing",
    lastName: "Boosts",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_YUNIVERSAL_BOOST = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: {
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
  userGameState: {
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 51,
  },
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_CONSUMABLE_BOOST = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: {
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
  userGameState: {
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 10,
  },
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_MIXED_CONSUMABLES = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: {
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
  userGameState: {
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 10,
  },
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});
