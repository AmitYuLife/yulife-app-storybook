import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import * as business from "../postgres/business";

const type = "mongo" as const;
const modelName = "user_entities" as const;

export const USER_ENTITY_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
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
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
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
    userId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
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
    userId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
    cohortIds: [],
    products: [],
    businesses: [
      {
        businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
        businessPricingTierId: "Epic",
      },
    ],
  },
};
