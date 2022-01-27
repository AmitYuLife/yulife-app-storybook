import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";



export const wellbeing_hub_item_1 = {
    modelName: "wellbeing_hub_item",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "title":"Fiit",
        "description":"Claim your free year of access to Fiit",
        "thumbnailImage":"cms/1639655759852_Screenshot 2021-12-16 at 11.55.50.png",
        "iconImage":"cms/1639655870609_Screenshot 2021-12-16 at 11.57.42.png",
        "source":"internal_dashboard",
        "enabled":true,
            "restrictions":{
               "perkId":"FIIT_12_MONTH"
            },
            "content":[
                {
                  "_id":generateRandomMongoId(),
                  "type":"MARKDOWN",
                  "title":"Welcome to Fiit",
                   "markdown":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus sapien, nec tincidunt lacus suscipit eu. Etiam diam libero, lacinia nec nunc vehicula, varius sagittis nisl.",
               },
               {
                  "_id":generateRandomMongoId(),
                  "title":"",
                  "markdown":"",
                  "type":"BUTTON",
                  "image":"",
                  "restrictToPlatform":"",
                  "label":"Activate your Fiit account",
                  "uri":"yulifeapp://yulife/perk-provision/FIIT_12_MONTH"
               },
               {
                  "_id":generateRandomMongoId(),
                  "type":"MARKDOWN",
                  "title":"Have a question?",
                  "markdown":"Chat to us through the app, or read more from our Help Centre."
               },

               {
                  "_id":generateRandomMongoId(),
                  "type":"BUTTON",
                  "label":"Help centre",
                  "uri":"https://faq.yulife.com/en/",
                  "image":"content/icons/help.png"
               }
             ],
    }
} as IDatabaseItem