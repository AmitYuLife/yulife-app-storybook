import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

import { CUSTOMER_25 } from "../postgres/customers"
import { FEEDBACK_FORM_1 } from "./feedback_forms"



const type = "mongo"
const modelName = "feedbacksubmission"

export const FEEDBACK_SUBMISSION_1 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId:CUSTOMER_25.data.customerId,
        form:FEEDBACK_FORM_1.data._id,
        isPending:true,
    }
} as IDatabaseItem
