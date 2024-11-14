import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const WELLBEING_HUB_ITEM_1 = {
    modelName: "wellbeing_hub_item",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "iconImage": "imgix::cms/1693993174917_YuDoctor + Metlife (3).png",
        "source": "internal_dashboard",
        "thumbnailImage": "imgix::cms/1716962675224_YuDoctor + HealthHero.png",
        "restrictions": {
          "showForPerkIds": [
            "METLIFE_GP24"
          ],
          "hideForPerkIds": [
            "HEALTH_HERO"
          ]
        },
        "description": {
          "en-GB": "On-demand GP access through HealthHero for MetLife products.",
          "ja-JP": "メットライフ生命のHealthHeroを通じたオンデマンドGPアクセス。",
          "_id": generateRandomMongoId(),
        },
        "title": {
          "en-GB": "GP24 Virtual GP & Healthcare Services",
          "ja-JP": "メットライフ生命GP24",
          "_id": generateRandomMongoId(),
        },
        "order": 1,
        "enabled": true,
        "content": [
          {
            "_id": generateRandomMongoId(),
            "type": "IMAGE",
            "title": {
              "en-GB": "",
              "_id": generateRandomMongoId(),
            },
            "markdown": {
              "en-GB": "",
              "_id": generateRandomMongoId(),
            },
            "image": "imgix::cms/1693993170609_YuDoctor + Metlife (3).png"
          }
        ],
        "__v": 0,
        "query": {}
      }
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_2 = {
    modelName: "wellbeing_hub_item",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "title": {
          "en-GB": "Health assured ",
          "_id": generateRandomMongoId(),
          "ja-JP": "健康保証"
        },
        "description": {
          "en-GB": "Health assured ",
          "_id": generateRandomMongoId(),
          "ja-JP": "健康保証"
        },
        "thumbnailImage": "imgix::cms/1730204469672_Screenshot 2024-10-29 at 19.20.58.png",
        "iconImage": "imgix::cms/1730204476350_Screenshot 2024-10-29 at 19.20.58.png",
        "content": [],
        "restrictions": {
          "showForPerkIds": [
            "HEALTH_ASSURED_METLIFE_GLA",
            "HEALTH_ASSURED_METLIFE_GIP"
          ],
          "hideForPerkIds": []
        },
        "order": 3,
        "source": "internal_dashboard",
        "isPromoted": true,
        "__v": 0,
        "enabled": true
      }
} as IDatabaseItem;
