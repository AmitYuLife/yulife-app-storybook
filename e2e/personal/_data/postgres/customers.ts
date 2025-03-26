import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
  createCustomerRecords,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import {
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_7,
} from "./business";

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
    status: "onboarded",
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
  },
} as IDatabaseItem;

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
} as IDatabaseItem;

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
} as IDatabaseItem;

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
} as IDatabaseItem;

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
} as IDatabaseItem;

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
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_PERIOD = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Greg",
    lastName: "Egg",
    status: "onboarded",
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
    status: "onboarded",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_LEAVER_NOTIF = createCustomerRecords({
  archived: false,
  firstName: "Jian",
  lastName: "Marco",
  status: "onboarded",
  email: generateRandomInbox(),
  customerId: generateRandomPostgresId(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Jian",
      legalLastName: "Marco",
      inviteCode: "TestNotif01",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      employmentLeaveDate: moment().subtract(1, "d").format("YYYY-MM-DD"),
      deactivationRequestedAt: moment().subtract(1, "d").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_LEAVER_NOTIF_CREATEDAT_UPDATE = {
  type: "postgres",
  modelName: "customer",
  updateKey: "customerId",
  data: {
    customerId: CUSTOMER_LEAVER_NOTIF.customer.data.customerId,
    createdAt: moment().subtract(1, "y").format("YYYY-MM-DD"),
  },
};

export const CUSTOMER_LEAVER_NO_STORE_NOTIF = createCustomerRecords({
  archived: false,
  firstName: "Owen",
  lastName: "Naur",
  status: "onboarded",
  email: generateRandomInbox(),
  customerId: generateRandomPostgresId(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_7.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Owen",
      legalLastName: "Naur",
      inviteCode: "TestNotifNoStore",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      employmentLeaveDate: moment().subtract(1, "d").format("YYYY-MM-DD"),
      deactivationRequestedAt: moment().subtract(1, "d").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_LEAVER_NO_STORE_NOTIF_CREATEDAT_UPDATE = {
  type: "postgres",
  modelName: "customer",
  updateKey: "customerId",
  data: {
    customerId: CUSTOMER_LEAVER_NO_STORE_NOTIF.customer.data.customerId,
    createdAt: moment().subtract(1, "y").format("YYYY-MM-DD"),
  },
};

export const CUSTOMER_LEAVER_CONCURRENT_NOTIF = createCustomerRecords({
  archived: false,
  firstName: "Cris",
  lastName: "Tina",
  status: "onboarded",
  email: generateRandomInbox(),
  customerId: generateRandomPostgresId(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Cris",
      legalLastName: "Tina",
      inviteCode: "CrisConc1",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      employmentLeaveDate: moment().subtract(1, "d").format("YYYY-MM-DD"),
      deactivationRequestedAt: moment().subtract(1, "d").format("YYYY-MM-DD"),
      products: [],
    },
    {
      businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      legalFirstName: "Cris",
      legalLastName: "Tina",
      inviteCode: "CrisConc2",
      employmentEmail: generateRandomInbox(),
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
});

export const CUSTOMER_LEAVER_CONCURRENT_CREATEDAT_UPDATE = {
  type: "postgres",
  modelName: "customer",
  updateKey: "customerId",
  data: {
    customerId: CUSTOMER_LEAVER_CONCURRENT_NOTIF.customer.data.customerId,
    createdAt: moment().subtract(1, "y").format("YYYY-MM-DD"),
  },
};
