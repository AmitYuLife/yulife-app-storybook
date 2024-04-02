import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const YUNIVERSITY_COURSE_CAT_1 = {
    modelName: "yuniversity_course_category",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "durationMinutes": 210,
        "slug": "cpd",
        "title": "CPD",
        "tileImageKey": "yuniversity/default-tile-image.png",
        "logoImageKey": "yuniversity/chartered-institute.png",
        "sortOrder": 1
    }
} as IDatabaseItem

export const YUNIVERSITY_COURSE_CAT_2 = {
    modelName: "yuniversity_course_category",
    type: "mongo",
    data: {
        "_id": generateRandomMongoId(),
        "durationMinutes": 0,
        "slug": "meditation-101",
        "title": "Meditation 101",
        "tileImageKey": "yuniversity/default-tile-image.png",
        "sortOrder": 2
    }
} as IDatabaseItem
