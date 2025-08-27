import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as businessRecords from "../generated/business_records";
import * as customerRecords from "../generated/customer_records";

const type = "mongo" as const;
const modelName = "user_entities" as const;

export const USER_ENTITY_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_PREVENTION_PASS_01.customer.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: businessRecords.BUSINESS_PREVENTION_PASS.business.data.businessAccountId,
        businessPricingTierId: "Epic",
      },
    ],
  },
};

export const USER_ENTITY_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_PREVENTION_PASS_02.customer.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: businessRecords.BUSINESS_PREVENTION_PASS.business.data.businessAccountId,
        businessPricingTierId: "Epic",
      },
    ],
  },
};

export const USER_ENTITY_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_WELLBEING_PASS_01.customer.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: businessRecords.BUSINESS_WELLBEING_PASS.business.data.businessAccountId,
        businessPricingTierId: "Epic",
      },
    ],
  },
};

export const USER_ENTITY_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_WELLBEING_PASS_02.customer.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: businessRecords.BUSINESS_WELLBEING_PASS.business.data.businessAccountId,
        businessPricingTierId: "Epic",
      },
    ],
  },
};
