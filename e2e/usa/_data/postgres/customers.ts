import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
  createCustomerRecords,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment = require("moment");
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_ACCOUNT_USA_2_NPC } from "./business";

export const CUSTOMER_USA_1 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Usa",
    lastName: "Customer",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_USA_2 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Moo",
    lastName: "Customer",
    status: "invited",
  },
} as IDatabaseItem;

export const CUSTOMER_USA_3 = createCustomerRecords({
  archived: false,
  firstName: "Axel",
  lastName: "Foley",
  status: "onboarded",
  email: generateRandomInbox(),
  customerId: generateRandomPostgresId(),
  userInfo: {
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 1,
      },
    ],
    isAvatarCreated: false,
    earnRate: 1,
  },
  userGameState: {
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 2,
  },
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Axel",
      legalLastName: "Foley",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_USA_4 = createCustomerRecords({
  archived: false,
  firstName: "Barry",
  lastName: "White",
  status: "onboarded",
  email: generateRandomInbox(),
  customerId: generateRandomPostgresId(),
  userInfo: {
    products: [
      {
        productId: generateRandomMongoId(),
        productType: "Yulife",
        option: "epic",
        type: "employer",
        earnRate: 1,
      },
    ],
    isAvatarCreated: false,
    earnRate: 1,
  },
  userGameState: {
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 2,
  },
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Barry",
      legalLastName: "White",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});
