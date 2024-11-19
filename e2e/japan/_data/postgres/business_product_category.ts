import * as bp from "./business_product";

const type = "postgres"
const modelName = "business_product_category"

export const BPC_1_WB = {
    type,
    modelName,
    data:{
        product_id: bp.BUSINESS_PRODUCT_1_WB.product.data.product_id,
        category_id: "1",
        earn_rate: 17,
        category_name: "App access only",
        category_description: "All employees will have access to the YuLife app",
        version_id: 1,
        version_archived: false
    },
};
