import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PRODUCT_14_MPP_GDental } from "./business_product";

const type = "postgres";
const modelName = "business_product_category_version_benefit";

export const BPCB_14_GDental = {
    type,
    modelName,
    data: {
        business_product_category_benefit_id: generateRandomPostgresId(),
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        category_id: "1",
        allowed_product_version_benefit_set_ids: [
            "Level 1 | Couple",
            "Level 1 | Single Parent Family",
            "Level 1 | Family",
            "Level 2 | Single",
            "Level 2 | Couple",
            "Level 2 | Single Parent Family",
            "Level 2 | Family",
            "Level 3 | Single",
            "Level 3 | Couple",
            "Level 3 | Single Parent Family",
            "Level 3 | Family",
            "Level 4 | Single",
            "Level 4 | Couple",
            "Level 4 | Single Parent Family",
            "Level 4 | Family",
            "Level 5 | Single",
            "Level 5 | Couple",
            "Level 5 | Single Parent Family",
            "Level 5 | Family",
        ],
        default_product_version_benefit_set_id: "Level 1 | Single",
        business_contribution: null,
        benefit_set_product_version_id: "Bupa_GDentPlan_01",
        archived: false,
        version_id: 1,
    },
};
