import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_111, CUSTOMER_112, CUSTOMER_113, CUSTOMER_114, CUSTOMER_115 } from "./customers";

export const PENSION_CONNECTION_USER_111 = {
  type: "postgres",
  modelName: "customer_pension_connection",
  data: {
    connectionId: generateRandomPostgresId(),
    customerId: CUSTOMER_111.data.customerId,
    accessToken: null,
    refreshToken: null,
    type: "smartPensions",
    active: true,
    scope: "employee",
    externalCustomerId: "111111111",
    externalCompanyId: "1111111",
    expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
    isInitial: true,
    failedAttempts: 0,
    lastSyncedAt: moment().format("DD MMM YYYY"),
  },
} as IDatabaseItem;

export const PENSION_CONNECTION_USER_112 = {
  type: "postgres",
  modelName: "customer_pension_connection",
  data: {
    connectionId: generateRandomPostgresId(),
    customerId: CUSTOMER_112.data.customerId,
    accessToken: null,
    refreshToken: null,
    type: "smartPensions",
    active: true,
    scope: "employee",
    externalCustomerId: "111111111",
    externalCompanyId: "1111111",
    expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
    isInitial: true,
    failedAttempts: 0,
    lastSyncedAt: moment().format("DD MMM YYYY"),
  },
} as IDatabaseItem;

export const PENSION_CONNECTION_USER_113 = {
  type: "postgres",
  modelName: "customer_pension_connection",
  data: {
    connectionId: generateRandomPostgresId(),
    customerId: CUSTOMER_113.data.customerId,
    accessToken: null,
    refreshToken: null,
    type: "smartPensions",
    active: true,
    scope: "employee",
    externalCustomerId: "111111111",
    externalCompanyId: "1111111",
    expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
    isInitial: true,
    failedAttempts: 0,
    lastSyncedAt: moment().format("DD MMM YYYY"),
  },
} as IDatabaseItem;

export const PENSION_CONNECTION_USER_114 = {
  type: "postgres",
  modelName: "customer_pension_connection",
  data: {
    connectionId: generateRandomPostgresId(),
    customerId: CUSTOMER_114.data.customerId,
    accessToken: null,
    refreshToken: null,
    type: "smartPensions",
    active: true,
    scope: "employee",
    externalCustomerId: "111111111",
    externalCompanyId: "1111111",
    expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
    isInitial: true,
    failedAttempts: 0,
    lastSyncedAt: moment().format("DD MMM YYYY"),
  },
} as IDatabaseItem;

export const PENSION_CONNECTION_USER_115 = {
  type: "postgres",
  modelName: "customer_pension_connection",
  data: {
    connectionId: generateRandomPostgresId(),
    customerId: CUSTOMER_115.customer.data.customerId,
    accessToken: null,
    refreshToken: null,
    type: "smartPensions",
    active: true,
    scope: "employee",
    externalCustomerId: "3115",
    externalCompanyId: "3",
    expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
    isInitial: true,
    failedAttempts: 0,
    lastSyncedAt: moment().format("DD MMM YYYY"),
  },
} as IDatabaseItem;
