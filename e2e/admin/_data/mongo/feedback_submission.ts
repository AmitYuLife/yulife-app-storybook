import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_8, CUSTOMER_9 } from "../postgres/customers";
import { FEEDBACK_FORM_1, FEEDBACK_FORM_2 } from "./feedback_forms";

const type = "mongo";
const modelName = "feedbacksubmission";

export const FEEDBACK_SUBMISSION_1 = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        userId: CUSTOMER_8.data.customerId,
        form: FEEDBACK_FORM_1.data._id,
        isPending: true,
    }
} as IDatabaseItem;

export const FEEDBACK_SUBMISSION_2 = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        form: FEEDBACK_FORM_2.data._id,
        isPending:true,
    }
} as IDatabaseItem;
