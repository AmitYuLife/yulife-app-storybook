import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const WELLBEING_HUB_ITEM_2 = {
   modelName: "wellbeing_hub_item",
   type: "mongo",
   data: {
      "_id": generateRandomMongoId(),
      "title": "Yuniversity",
      "description": "Your learning hub resources",
      "thumbnailImage": "cms/1669639176057_Yuniversity@3x.png",
      "iconImage": "content/icons/yulife.png",
      "order": 3,
      "enabled": true,
      "seed": true,
      "route": "yulife.member.yuniversityCourses",
      "source": "manual_entry",
      "content": [],
      "restrictions": {
         "appVersionRequired": ">=3.53"
      },
      "updatedAt": moment().toISOString(),
   }
} as IDatabaseItem
