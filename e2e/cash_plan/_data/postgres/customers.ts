import {
  createCustomerRecords,
  DependantType,
  generateRandomInbox,
  generateRandomPostgresId,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_CASH_CORE, BUSINESS_ACCOUNT_CASH_EPIC } from "./business";
import { BUSINESS_PRODUCT_CASH_CORE, BUSINESS_PRODUCT_CASH_EPIC } from "./business_product";

export const CUSTOMER_CASH_CORE = createCustomerRecords({
  archived: false,
  status: "onboarded",
  email: generateRandomInbox(),
  firstName: "Coremain",
  lastName: "Bohrer",
  firstAppOpenDate: new Date(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_CASH_CORE.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [
        {
          archived: false,
          productId: BUSINESS_PRODUCT_CASH_CORE.product.data.product_id,
          productVariantId: "Bupa_CashPlanCore_01_01",
          startDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
          endDate: moment().add(1, "y").format("YYYY-MM-DD"),
          category: 1,
          earnRate: 0,
          takenUp: true,
          customerData: {
            dateOfBirth: moment().subtract(35, "y").format("YYYY-MM-DD"),
            sex: "M",
          },
          dependants: [
            {
              firstName: "Coredependant",
              lastName: "Bohrer",
              dateOfBirth: moment().subtract(33, "y").format("YYYY-MM-DD"),
              sex: "F",
              type: DependantType.spouse,
              archived: false,
              dependantCustomerStatus: "onboarded",
              dependantFirstAppOpenDate: new Date(),
            },
            {
              firstName: "Spousy",
              lastName: "Bohrer",
              dateOfBirth: moment().subtract(32, "y").format("YYYY-MM-DD"),
              sex: "F",
              type: DependantType.spouse,
              archived: false,
              dependantCustomerStatus: "invited",
            },
            {
              firstName: "Corechild",
              lastName: "Bohrer",
              dateOfBirth: moment().subtract(10, "y").format("YYYY-MM-DD"),
              sex: "M",
              type: DependantType.child,
              archived: false,
              dependantCustomerStatus: "onboarded",
              dependantFirstAppOpenDate: new Date(),
            },
          ],
        },
      ],
    },
  ],
});

export const CUSTOMER_CASH_EPIC = createCustomerRecords({
  archived: false,
  status: "onboarded",
  email: generateRandomInbox(),
  firstName: "Epicmain",
  lastName: "Danza",
  firstAppOpenDate: new Date(),
  preferredContentLocation: "GB",
  employments: [
    {
      businessAccountId: BUSINESS_ACCOUNT_CASH_EPIC.business.data.businessAccountId,
      businessEmployeeId: generateRandomPostgresId(),
      archived: false,
      employmentStartDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
      products: [
        {
          archived: false,
          productId: BUSINESS_PRODUCT_CASH_EPIC.product.data.product_id,
          productVariantId: "Bupa_CashPlanEpic_01_01",
          startDate: moment().subtract(1, "y").format("YYYY-MM-DD"),
          endDate: moment().add(1, "y").format("YYYY-MM-DD"),
          category: 1,
          earnRate: 10,
          takenUp: true,
          customerData: {
            dateOfBirth: moment().subtract(40, "y").format("YYYY-MM-DD"),
            sex: "F",
          },
          dependants: [
            {
              firstName: "Epicdependant",
              lastName: "Danza",
              dateOfBirth: moment().subtract(38, "y").format("YYYY-MM-DD"),
              sex: "M",
              type: DependantType.spouse,
              archived: false,
              dependantCustomerStatus: "onboarded",
              dependantFirstAppOpenDate: new Date(),
            },
            {
              firstName: "Epicchild",
              lastName: "Danza",
              dateOfBirth: moment().subtract(8, "y").format("YYYY-MM-DD"),
              sex: "F",
              type: DependantType.child,
              archived: false,
              dependantCustomerStatus: "onboarded",
              dependantFirstAppOpenDate: new Date(),
            },
          ],
        },
      ],
    },
  ],
});
