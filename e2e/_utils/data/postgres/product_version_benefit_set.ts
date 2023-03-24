
import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres"
const modelName = "product_version_benefit_set"

export const PVBS_1_GDental = {
    type,
    modelName,
    data: {
            "product_version_benefit_set_id" : generateRandomPostgresId(),
            "name" : "Level 4 | Single",
            "product_version_id" : "Bupa_GDent_01",
            "benefits" : "{\"Routine examination\":{\"heading\":\"**up to £140**\",\"description\":\"maximum of two £70 visits per policy year\",\"category\":\"Worldwide preventative dental treatment\"},\"Scale and polish\":{\"heading\":\"**up to £180**\",\"description\":\"maximum of two £90 visits per policy year\",\"category\":\"Worldwide preventative dental treatment\"},\"Virtual routine examination\":{\"heading\":\"**up to £20**\",\"category\":\"Worldwide preventative dental treatment\"},\"Dental X-rays and scans\":{\"heading\":\"**up to £90**\",\"category\":\"Worldwide preventative dental treatment\"},\"Fillings, fissure sealant and topical fluoride\":{\"heading\":\"**up to £350**\",\"category\":\"Worldwide restorative dental treatment\"},\"Extractions\":{\"heading\":\"**up to £200**\",\"category\":\"Worldwide restorative dental treatment\"},\"Major restorative dental treatment\":{\"heading\":\"**80%** contribution towards the cost of your major restorative dental treatment **up to £2000**\",\"category\":\"Worldwide restorative dental treatment\"},\"UK Orthodontic treatment\":{\"heading\":\"**up to £600**\",\"category\":\"Other dental benefits\"},\"Worldwide emergency dental treatment\":{\"heading\":\"**up to £1,000**\",\"description\":\"maximum of four £250 emergencies per policy year\",\"category\":\"Other dental benefits\"},\"Worldwide dental injury treatment\":{\"heading\":\"**up to £5,000**\",\"category\":\"Other dental benefits\"},\"UK Oral cancer treatment\":{\"heading\":\"**Paid in full**\",\"description\":\"to diagnose and treat oral cancer when using a fee assured consultant in a partnership facility\",\"category\":\"Other dental benefits\"},\"Cash benefit for UK hospital stay\":{\"heading\":\"**up to £1,000**\",\"description\":\"maximum of ten £100 hospital stays per policy year\",\"category\":\"Other dental benefits\"}}",
            "earn_rate" : 5,
            "order_value" : 13,
            "dependants_allowed" : null,
            "categorisation_value" : "Level 4",
            "archived" : false,
            "archive_reason" : null,
            "archived_at" : null,
            "created_at" : "2023-03-02T15:15:42.914Z",
            "created_by_id" : null,
            "modified_at" : "2023-03-02T15:15:42.914Z",
            "modified_by_id" : null
    }
} as IDatabaseItem 
    