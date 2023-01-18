import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { MEDIA_1 } from "./media";

export const YUNIVERSITY_COURSE_MODULE_1 = {
  modelName: "yuniversity_course_module",
  type: "mongo",
  data: {
    "_id": generateRandomMongoId(),
    "durationMinutes": 30,
    "chapters": [
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "the-employer-perspective",
        "title": "The employer perspective",
        "tileImageKey": "yuniversity/chapters/module1-chapter1.png",
        "sortOrder": 1,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "the-employee-perspective",
        "title": "The employee perspective",
        "tileImageKey": "yuniversity/chapters/module1-chapter2.png",
        "sortOrder": 2,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "the-adviser-perspective",
        "title": "The adviser perspective",
        "tileImageKey": "yuniversity/chapters/module1-chapter3.png",
        "sortOrder": 3,
        "content": MEDIA_1.data._id
      }
    ],
    "course": "introduction-to-group-risk",
    "slug": "why-group-risk-makes-sense",
    "quiz": "yuniversity_quiz_course1_module1",
    "title": "Why group risk makes sense for your clients and your business",
    "mainCategory": "CPD",
    "tileImageKey": "yuniversity/modules/module1.png",
    "logoImageKey": "yuniversity/chartered-institute.png",
    "courseNumber": 1,
    "moduleNumber": 1,
    "certificateHeader": "CPD Module Certificate",
    "sortOrder": 1,
    "contentItems": [],
    "content": "In this module, we will be helping you get to grips with the value of group risk and why it is becoming increasingly important. We’ll also dive into how it can benefit your clients and your business, plus taking a look at wider trends in wellbeing and the workplace.\n\nThis Yuniversity module is accredited by The Chartered Insurance Institute (CII). By completing this module you can claim up to 0.5 CPD hours towards the CII member CPD scheme.\n\n##### Learning objectives\n\n\nBy the end of this module, Yuniversity students will be able to:\n\n* Describe the benefits of group risk products to employers and their employees \n* List ways that advisers can benefit from advising on group risk products \n* Summarise key trends relating to mental and physical wellbeing in the workplace",
    "notesUri": "develop.website.yulife.engineering/",
    "yuCoinReward": 200
  }
} as IDatabaseItem