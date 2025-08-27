import {
  createCustomerRecords,
  generateRandomInbox,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_PREVENTION_PASS, BUSINESS_WELLBEING_PASS } from "./business_records";

const DEFAULT_USER_INFO = {
  isAvatarCreated: true,
  earnRate: 5,
  avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  avatarCreatedAt: new Date("2025-06-27T09:57:00.615Z"),
  readyForInvite: true,
  searchTokenVersion: "1",
  lastAppVersion: "4.72.0",
  lastSessionAt: moment().subtract(1, "day").toDate(),
  utcOffset: moment().utcOffset(),
  bundleIdentifiers: {
    steps: [],
  },
  activityLastReceived: {
    cycling: moment().subtract(1, "day").toDate(),
    meditation: moment().subtract(1, "day").toDate(),
    steps: moment().subtract(1, "day").toDate(),
  },
};

export const CUSTOMER_PREVENTION_PASS_01 = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: DEFAULT_USER_INFO,
  employments: [
    {
      businessAccountId: BUSINESS_PREVENTION_PASS.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_PREVENTION_PASS_02 = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: DEFAULT_USER_INFO,
  employments: [
    {
      businessAccountId: BUSINESS_PREVENTION_PASS.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_WELLBEING_PASS_01 = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: DEFAULT_USER_INFO,
  employments: [
    {
      businessAccountId: BUSINESS_WELLBEING_PASS.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_WELLBEING_PASS_02 = createCustomerRecords({
  archived: false,
  status: "onboarded",
  preferredContentLocation: "GB",
  email: generateRandomInbox(),
  userInfo: DEFAULT_USER_INFO,
  employments: [
    {
      businessAccountId: BUSINESS_WELLBEING_PASS.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});
