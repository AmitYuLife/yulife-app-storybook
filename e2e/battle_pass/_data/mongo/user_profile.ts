import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
};

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        _id: generateRandomMongoId(),
        cyclingMeasurement: "km",
    },
};

export const USER_PROFILE_CARMY = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_CARMY.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
