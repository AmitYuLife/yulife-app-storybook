import { generateRandomTransformedUuid, IDatabaseItem } from "@yu-life/yulife-bdd-framework";


const type = "postgres";
const modelName = "sponsored_logo";

export const SL_Guardian_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_id" : generateRandomTransformedUuid(),
        "path" : "sponsored-logos\/guardian-1.svg",
        "label" : "Guardian",
        "archived" : false,
        "archived_at" : null
    },
} as IDatabaseItem;

export const SL_Yulife_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_id" : generateRandomTransformedUuid(),
        "path" : "sponsored-logos\/yulife-1.svg",
        "label" : "YuLife",
        "archived" : false,
    },
} as IDatabaseItem;

export const SL_AmericanPublic_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_id" : generateRandomTransformedUuid(),
        "path" : "sponsored-logos\/apl-1.png",
        "label" : "American Public Life",
        "archived" : false,
    },
} as IDatabaseItem;

export const SL_TransAmerica_USA = {
    type,
    modelName,
    data: {
        "sponsored_logo_id" : generateRandomTransformedUuid(),
        "path" : "sponsored-logos\/transamerica-2.svg",
        "label" : "Transamerica",
        "archived" : false,
    },
} as IDatabaseItem;