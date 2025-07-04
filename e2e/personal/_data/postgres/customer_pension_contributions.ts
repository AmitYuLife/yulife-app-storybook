import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import {
  PENSION_CONNECTION_USER_111,
  PENSION_CONNECTION_USER_113,
  PENSION_CONNECTION_USER_114,
  PENSION_CONNECTION_USER_115,
} from "./customer_pension_connections";

export const PENSION_CONTRIBUTION_USER_111 = {
  type: "postgres",
  modelName: "customer_pension_contribution",
  data: {
    contribution_id: generateRandomPostgresId(),
    pension_connection_id: PENSION_CONNECTION_USER_111.data.connectionId,
    valuation: 123.0,
    valuation_date: moment().format("YYYY-MM-DD"),
    contribution: 320.0,
    user_contribution: 6.0,
    company_contribution: 16.0,
    currency: "GBP",
    is_contributing: true,
    archived: false,
    created_by_id: null,
    contribution_period: "month",
  },
} as IDatabaseItem;

export const PENSION_CONTRIBUTION_USER_113 = {
  type: "postgres",
  modelName: "customer_pension_contribution",
  data: {
    contribution_id: generateRandomPostgresId(),
    pension_connection_id: PENSION_CONNECTION_USER_113.data.connectionId,
    valuation: 123.0,
    valuation_date: moment().format("YYYY-MM-DD"),
    contribution: 0.0,
    user_contribution: 6.0,
    company_contribution: 16.0,
    currency: "GBP",
    is_contributing: true,
    archived: false,
    created_by_id: null,
    contribution_period: null,
  },
} as IDatabaseItem;

export const PENSION_CONTRIBUTION_USER_114 = {
  type: "postgres",
  modelName: "customer_pension_contribution",
  data: {
    contribution_id: generateRandomPostgresId(),
    pension_connection_id: PENSION_CONNECTION_USER_114.data.connectionId,
    valuation: 123.0,
    valuation_date: moment().format("YYYY-MM-DD"),
    contribution: 320.0,
    user_contribution: 6.0,
    company_contribution: 16.0,
    currency: "GBP",
    is_contributing: false,
    archived: false,
    created_by_id: null,
    contribution_period: "month",
  },
} as IDatabaseItem;

export const PENSION_CONTRIBUTION_USER_115 = {
  type: "postgres",
  modelName: "customer_pension_contribution",
  data: {
    contribution_id: generateRandomPostgresId(),
    pension_connection_id: PENSION_CONNECTION_USER_115.data.connectionId,
    valuation: 123.0,
    valuation_date: moment().format("YYYY-MM-DD"),
    contribution: 320.0,
    user_contribution: 6.0,
    company_contribution: 16.0,
    currency: "GBP",
    is_contributing: true,
    archived: false,
    created_by_id: null,
    contribution_period: "month",
  },
} as IDatabaseItem;
