import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { BUSINESS_ACCOUNT_4 } from "../postgres/business";


const type = "mongo"
const modelName = "ad_banners"

export const AD_BANNER_1 = {
    type,
    modelName,
    data:{
        "width": 280,
        "height": 132,
        "startDate": moment().subtract(1, "day").toISOString(),
        "endDate": moment().add(7, "day").toISOString(),
        "place": "dailyScreen",
        "enabled": true,
        "navigateTo": "https://www.asos.com/",
        "imageKey": "reward/logo/ASOS-GB-BFD20.png",
        "restrictions": {
        "businessAccountId": BUSINESS_ACCOUNT_4.data.business_account_id,
        },
        "order": 2,
        "name": "ad-1something",
        "updatedAt": moment().subtract(1, "hour").toISOString(),
    }
}