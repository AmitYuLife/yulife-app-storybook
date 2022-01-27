import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres"
const modelName = "perk"

export const FIIT_12_MONTH = {
    type,
    modelName,
    data:{
        "perk_id" : "FIIT_12_MONTH",
        "provider_id" : "FIIT",
        "name" : "FiiT 1 year subscription",
        "description" : "1 year free FiiT subscription",
        "max_seats" : 0,
        "archived" : false,
        "modified_by_id" : null,
        "config_fields" : "[{\"name\":\"maxSeats\",\"required\":false}]"
    }
} as IDatabaseItem