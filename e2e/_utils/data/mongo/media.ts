import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"

export const MEDIA_1 = {
  type: "mongo",
  modelName: "media",
  data: {
    "_id": generateRandomMongoId(),
    "title": "CPD stand in",
    "description": "CPD Video",
    "mediaKey": "media/meditation/meditopia/awareness-5min-compressed.mp4",
    "coverKey": "media/meditation/meditopia/cover/cover.png",
    "logoKey": "logos/meditopia-logo-icon-with-bg.png",
    "thumbnailKey": "media/meditation/meditopia/thumbnails/awareness.png",
    "duration": 300,
    "shortDescription": "5 minutes - Now",
    "theme": "light",
    "tags": [
      "cpd"
    ],
    "order": 1,
    "videoLogoKey": "logos/meditopia-logo-white.png"
  }
} as IDatabaseItem