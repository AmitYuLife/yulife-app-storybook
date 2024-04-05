import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_36 } from "../postgres/customers";
import { webhook_1 } from "./mixpanel_webhooks";
import moment from "moment";

export const appReview_1 = {
    modelName: "appstorereviewprompt",
    type: "mongo",
    data: {
        _id: generateRandomMongoId(),
        status: "PENDING",
        userId: CUSTOMER_36.data.customerId,
        webhook: webhook_1.data._id,
        createdAt: moment().subtract(2, "days").toISOString(),
        updatedAt: moment().subtract(1, "days").toISOString(),
    },
} as IDatabaseItem;
