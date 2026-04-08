import {
  createCustomerRecords,
  generateRandomInbox,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { THEMED_BUSINESS } from "./business";

export const CUSTOMER_METLIFE = createCustomerRecords({
  customerId: generateRandomPostgresId(),
  archived: false,
  firstName: "MetLife",
  lastName: "Tester",
  status: "onboarded",
  email: generateRandomInbox(),
  employments: [
    {
      businessAccountId: THEMED_BUSINESS.business.data.businessAccountId,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
  customerCoreSettings: [
    { domain: "temp", settings: { gameEnableAppTheme: true } },
    { domain: "theme", settings: { themeId: "metlife" } },
  ],
});

export const CUSTOMER_NN = createCustomerRecords({
  customerId: generateRandomPostgresId(),
  archived: false,
  firstName: "NN",
  lastName: "Tester",
  status: "onboarded",
  email: generateRandomInbox(),
  employments: [
    {
      businessAccountId: THEMED_BUSINESS.business.data.businessAccountId,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [],
    },
  ],
  customerCoreSettings: [
    { domain: "temp", settings: { gameEnableAppTheme: true } },
    { domain: "theme", settings: { themeId: "nn" } },
  ],
});
