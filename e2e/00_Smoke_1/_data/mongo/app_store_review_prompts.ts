import { CUSTOMER_6} from '../postgres/customers';
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { webhook_1 } from '../mongo/mixpanel_webhooks';


export const appReview_1 = {
    modelName: "appstorereviewprompt",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "status": "PENDING",
        "userId": CUSTOMER_6.data.customerId,
        "webhook": webhook_1.data._id,
        "createdAt": moment().subtract(2, "days").toISOString(),
        "updatedAt": moment().subtract(1, "days").toISOString(),
    }
} as IDatabaseItem
