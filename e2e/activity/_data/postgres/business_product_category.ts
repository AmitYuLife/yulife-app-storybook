import { BUSINESS_PRODUCT_13_GHI_REWARDS, BUSINESS_PRODUCT_16_GHI_REWARDS, BUSINESS_PRODUCT_8_GHI } from "./business_product";

const type = "postgres";
const modelName = "business_product_category";

export const BPC_1_GHI_1 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_GHI_REWARDS = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_GHI_REWARDS_3 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_16_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed: false,
        category_name: "cat1",
        enrolment_method: "external",
        election_option: "opt-out",
        version_id: 1,
        version_archived: false,
    },
};
