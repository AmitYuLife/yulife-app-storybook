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
    "notesUri": "cms/1669817362398_Course1-Module1_CourseNotes.pdf",
    "yuCoinReward": 200
  }
} as IDatabaseItem

export const YUNIVERSITY_COURSE_MODULE_2 = {
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
        "slug": "what-do-we-mean-by-group-risk",
        "title": "What do we mean by group risk?",
        "tileImageKey": "yuniversity/chapters/module2-chapter1.png",
        "sortOrder": 1,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "employer-faqs-and-learning-the-lingo",
        "title": "Employer FAQs and learning the lingo",
        "tileImageKey": "yuniversity/chapters/module2-chapter2.png",
        "sortOrder": 2,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "whos-who-in-the-group-risk-market",
        "title": "Who's who in the group risk market",
        "tileImageKey": "yuniversity/chapters/module2-chapter3.png",
        "sortOrder": 3,
        "content": MEDIA_1.data._id
      }
    ],
    "course": "introduction-to-group-risk",
    "slug": "group-risk-101",
    "quiz": "yuniversity_quiz_course1_module2",
    "title": "Group risk 101 - the products and the market",
    "mainCategory": "CPD",
    "tileImageKey": "yuniversity/modules/module2.png",
    "logoImageKey": "yuniversity/chartered-institute.png",
    "courseNumber": 1,
    "moduleNumber": 2,
    "certificateHeader": "CPD Module Certificate",
    "sortOrder": 2,
    "contentItems": [],
    "content": "In this module we look at the meaning of 'group risk', the key insurance products, their purposes and changes over time. Plus how they work, and the different stakeholders involved - from the employee through to the financial regulatory bodies and everyone in between. \n\nThis Yuniversity module is accredited by The Chartered Insurance Institute (CII). By completing this module you can claim up to 0.5 CPD hours towards the CII member CPD scheme.\n\n##### Learning objectives\n\n\nBy the end of this module, Yuniversity students will be able to:\n\n* Summarise features of the main group risk products and trends in market size for each\n* Define key terms relating to group risk schemes\n* Describe the unique roles of the industry players involved in the group risk market",
    "notesUri": "cms/1669817286527_Course1-Module2_CourseNotes.pdf",
    "yuCoinReward": 200,
    "__v": 0
  }
} as IDatabaseItem

export const YUNIVERSITY_COURSE_MODULE_3 = {
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
        "slug": "employee-benefits-over-the-years",
        "title": "Employee benefits over the years",
        "tileImageKey": "yuniversity/chapters/module3-chapter1.png",
        "sortOrder": 1,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "above-and-beyond-the-state-provisions",
        "title": "Above and beyond the state provisions",
        "tileImageKey": "yuniversity/chapters/module3-chapter2.png",
        "sortOrder": 2,
        "content": MEDIA_1.data._id
      },
      {
        "type": "video",
        "durationMinutes": 10,
        "_id": generateRandomMongoId(),
        "slug": "spotlight-on-pmi",
        "title": "Spotlight on PMI",
        "tileImageKey": "yuniversity/chapters/module3-chapter3.png",
        "sortOrder": 3,
        "content": MEDIA_1.data._id
      }
    ],
    "course": "introduction-to-group-risk",
    "slug": "group-risk-an-an-employee-benefit",
    "quiz": "yuniversity_quiz_course1_module3",
    "title": "Group risk as an employee benefit",
    "mainCategory": "CPD",
    "tileImageKey": "yuniversity/modules/module3.png",
    "logoImageKey": "yuniversity/chartered-institute.png",
    "courseNumber": 1,
    "moduleNumber": 3,
    "certificateHeader": "CPD Module Certificate",
    "sortOrder": 3,
    "contentItems": [],
    "content": "This module is a whistle-stop tour of the history of employee benefits, the types of benefits that exist and where group risk fits in the picture, with a spotlight on PMI.\n\nThis Yuniversity module is accredited by The Chartered Insurance Institute (CII). By completing this module you can claim up to 0.5 CPD hours towards the CII member CPD scheme.\n\n##### Learning objectives\n\n\nBy the end of this module, Yuniversity students will be able to:\n\n* Describe historic and emerging trends in the employee benefits landscape \n* List examples of statutory benefits and optional employee benefits \n* Explain what group private medical insurance is and how it can benefit employers and their employees",
    "notesUri": "cms/1669817362398_Course1-Module3_CourseNotes.pdf",
    "yuCoinReward": 200,
    "__v": 0
  }
} as IDatabaseItem
