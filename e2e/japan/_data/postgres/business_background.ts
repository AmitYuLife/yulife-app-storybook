import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"

export const BUSINESS_BACKGROUND_1 = {
    type: "postgres",
    modelName: "business_background",
    data: {
        "business_background_id": generateRandomTransformedUuid(),
        "companies_house_name": "YU LIFE",
        "companies_house_size": "10-49",
        "industry_type": "Apple Orchards",
        "companies_house_registered_number": "10308260",
        "companies_house_address": "12 Mallow Street, London, England, EC1Y 8RQ",
        "sic_codes": null,
        "directors": null,
        "persons_with_significant_control": null,
        "company_status": null,
        "created_at": "2020-09-07T21:27:31.293Z",
        "created_by_id": "0.74.0",
        "modified_at": "2020-09-07T21:27:51.322Z",
        "modified_by_id": "0.74.0"
    }
}
