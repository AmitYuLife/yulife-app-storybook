import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
};

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        cyclingMeasurement: "km",
    },
};

export const USER_PROFILE_FUTURE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
