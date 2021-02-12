import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CONSENT_1 = {
    type: "postgres",
    modelName: "consent",
    data: {
        consent_name:"use_personal_email",
        consent_type: "customer",
    }
} as IDatabaseItem

export const CONSENT_2 = {
    type:"postgres",
    modelName:"consent",
    data:{
        consent_name:"medical_report",
        consent_type:"customer"
    }
} as IDatabaseItem

export const CONSENT_3 = {
    type: "postgres",
    modelName: "consent",
    data: {
        consent_name: "view_medical_report",
        consent_type: "customer"
    }
} as IDatabaseItem