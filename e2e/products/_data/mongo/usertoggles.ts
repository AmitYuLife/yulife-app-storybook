import * as customer from "../postgres/customers";
import { allTogglesTrueFor_PLI, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_FUTURE_PRODUCT_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_123_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_123_MPP.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            ...allTogglesTrueFor_PLI.data.features,
            showBrainGameSudoku: true,
            showFiit: true,
            showYuScreenFurtherProductList: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            enableSaasProductDetailsPage: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_124_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_124_MPP.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            ...allTogglesTrueFor_PLI.data.features,
            showBrainGameSudoku: true,
            showFiit: true,
            showYuScreenFurtherProductList: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        },
    },
} as IDatabaseItem;
