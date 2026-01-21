import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
  createCustomerRecords,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";

import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "engagement_surveys/_data";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Donald",
    lastName: "Trump",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_2 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gill",
    lastName: "Stock",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_SDUI_SCROLL_PICKER = createCustomerRecords({
  archived: false,
  status: "onboarded",
  email: generateRandomInbox(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_3 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Tywin",
    lastName: "Lannister",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_5 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Brendan",
    lastName: "Galloway",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_7 = createCustomerRecords({
  archived: false,
  status: "onboarded",
  email: generateRandomInbox(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
  customerCoreSettings: [
    {
      domain: "game.smoking",
      settings: {
        isEnabled: true,
      },
    },
  ],
});

export const CUSTOMER_8 = createCustomerRecords({
  archived: false,
  firstName: "Knight",
  lastName: "Birdeye",
  status: "onboarded",
  email: generateRandomInbox(),
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
      legalFirstName: "Knight",
      legalLastName: "Birdeye",
      employmentEmail: generateRandomInbox(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
  userGameState: {
    currentBalance: 25000,
    currentStreak: 0,
    currentLevel: 55,
  },
});

export const CUSTOMER_9 = createCustomerRecords({
  archived: false,
  firstName: "Ronnie James",
  lastName: "Dio",
  status: "onboarded",
  email: generateRandomInbox(),
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
      legalFirstName: "Ronald",
      legalLastName: "Padanova",
      employmentEmail: generateRandomInbox(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
  userInfo: {
    isAvatarCreated: true,
    earnRate: 10,
    avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  },
  userGameState: {
    currentBalance: 25000,
    currentStreak: 0,
    currentLevel: 855,
  },
  customerCoreSettings: [
    {
      domain: "game.pathways",
      settings: {
        isEnabled: true,
      },
    },
  ],
});
