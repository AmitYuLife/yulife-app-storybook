import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_115, CUSTOMER_139 } from "./customers";

export const PENSION_CONNECTION_USER_115 = {
    type: "postgres",
    modelName: "customer_pension_connection",
    data: {
        connectionId: generateRandomPostgresId(),
        customerId: CUSTOMER_115.data.customerId,
        accessToken: null,
        refreshToken: null,
        type: "smartPensions",
        active: false,
        scope: "employee",
        externalCustomerId: "111111111",
        externalCompanyId: "1111111",
        expiresAt: moment().add(1, "y").format("DD MMM YYYY"),
        isInitial: true,
        failedAttempts: 0,
        lastSyncedAt: moment().format("DD MMM YYYY"),
    }
} as IDatabaseItem

export const PENSION_CONNECTION_USER_139 = {
    type: "postgres",
    modelName: "customer_pension_connection",
    data: {
        connectionId: generateRandomPostgresId(),
        customerId: CUSTOMER_139.data.customerId,
        accessToken: null,
        refreshToken: null,
        type: "smartPensions",
        active: false,
        scope: "employee",
        externalCustomerId: "111111111",
        externalCompanyId: "1111111",
        expiresAt: moment().add(2, "y").format("DD MMM YYYY"),
        isInitial: true,
        failedAttempts: 0,
        lastSyncedAt: moment().format("DD MMM YYYY"),
    }
} as IDatabaseItem
