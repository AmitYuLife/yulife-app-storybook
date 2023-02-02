import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"

export const YUNIVERSITY_COURSE_1 = {
  modelName: "yuniversity_course",
  type: "mongo",
  data: {
    "_id": generateRandomMongoId(),
    "categories": [
      "cpd"
    ],
    "durationMinutes": 90,
    "slug": "introduction-to-group-risk",
    "title": "Course 1",
    "tileImageKey": "yuniversity/default-tile-image.png",
    "description": "Introduction to group risk:\nThe why and the what",
    "sortOrder": 1
  }
} as IDatabaseItem

export const YUNIVERSITY_COURSE_2 = {
  modelName: "yuniversity_course",
  type: "mongo",
  data: {
    "_id": generateRandomMongoId(),
    "categories": [
      "cpd"
    ],
    "durationMinutes": 60,
    "slug": "the-big-three",
    "title": "Course 2",
    "tileImageKey": "yuniversity/default-tile-image.png",
    "description": "The Big Three - life, critical illness and income protection",
    "sortOrder": 2
  }
} as IDatabaseItem

export const YUNIVERSITY_COURSE_3 = {
  modelName: "yuniversity_course",
  type: "mongo",
  data: {
    "_id": generateRandomMongoId(),
    "categories": [
      "cpd"
    ],
    "durationMinutes": 60,
    "slug": "getting-started-with-group-risk",
    "title": "Course 3",
    "tileImageKey": "yuniversity/default-tile-image.png",
    "description": "Getting started with group risk",
    "sortOrder": 3
  }
} as IDatabaseItem