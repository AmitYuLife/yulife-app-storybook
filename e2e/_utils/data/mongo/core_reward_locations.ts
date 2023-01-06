import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "core_reward_locations",
};

export const CORE_REWARD_LOCATION_AT = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "AT",
        name: "Austria",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_BE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "BE",
        name: "Belgium",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_CH = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "CH",
        name: "Switzerland",
        currencySymbol: "CHf",
        currencyCode: "CHF",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_DE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "DE",
        name: "Germany",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_DK = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "DK",
        name: "Denmark",
        currencySymbol: "kr.",
        currencyCode: "DKK",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_ES = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "ES",
        name: "Spain",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_FR = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "FR",
        name: "France",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_GB = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "GB",
        name: "United Kingdom",
        currencySymbol: "£",
        currencyCode: "GBP",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_GB_ENG = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "GB-ENG",
        name: "England",
        currencySymbol: "£",
        currencyCode: "GBP",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_GB_NIR = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "GB-NIR",
        name: "Northern Ireland",
        currencySymbol: "£",
        currencyCode: "GBP",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_GB_SCT = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "GB-SCT",
        name: "Scotland",
        currencySymbol: "£",
        currencyCode: "GBP",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_GB_CYM = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "GB-CYM",
        name: "Wales",
        currencySymbol: "£",
        currencyCode: "GBP",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_IE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "IE",
        name: "Ireland",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_IN = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "IN",
        name: "India",
        currencySymbol: "₹",
        currencyCode: "INR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_IT = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "IT",
        name: "Italy",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_LU = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "LU",
        name: "Luxembourg",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_NL = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "NL",
        name: "Netherlands",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_NO = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "NO",
        name: "Norway",
        currencySymbol: "kr",
        currencyCode: "NOK",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_PL = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "PL",
        name: "Poland",
        currencySymbol: "zł",
        currencyCode: "PLN",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_PT = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "PT",
        name: "Portugal",
        currencySymbol: "€",
        currencyCode: "EUR",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_SE = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "SE",
        name: "Sweden",
        currencySymbol: "kr",
        currencyCode: "SEK",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_US = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "US",
        name: "United States",
        currencySymbol: "$",
        currencyCode: "USD",
    },
} as IDatabaseItem;

export const CORE_REWARD_LOCATION_ZA = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        code: "ZA",
        name: "South Africa",
        currencySymbol: "R",
        currencyCode: "ZAR",
    },
} as IDatabaseItem;
