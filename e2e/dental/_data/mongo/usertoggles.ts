import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";

export const CUSTOMER_43_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_43.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: false,
            hasBupaDentActive: false,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_1.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true,
            yuScreenV3: true,
            yuScreenV4: false,
            hasCoveaFibActive: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_2.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true,
            yuScreenV3: true,
            yuScreenV4: false,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_85_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_85.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true,
            hasBupaDentActive: true,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            showBrainGameSudoku: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_108_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_108.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true,
            yuScreenV3: true,
            yuScreenV4: false,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true,
            yuScreenV3: true,
            yuScreenV4: false,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            showYuScreenFurtherProductList: true,
        },
    },
} as IDatabaseItem;
