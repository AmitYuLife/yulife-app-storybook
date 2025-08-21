import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "mongo";
const modelName = "goals";

export const GOALS_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "Step to it! - MoO Restriction test",
      _id: generateRandomMongoId(),
    },
    autoJoin: true,
    launchOptions: null,
    illustrationImageKey: "events/banners/walk_of_the_worlds_banner.png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    status: "active",
    type: "individual",
    startOn: "user_onboarded",
    synchronousProgress: true,
    descriptionTitle: {
      "en-GB": "Challenge yourself!",
      _id: generateRandomMongoId(),
    },
    description: {
      "en-GB": "The race is on! Walk 100,000 steps to get a great reward!",
      _id: generateRandomMongoId(),
    },
    tag: "Get going!",
    tags: [],
    tagImageKey: "events/info/flame.png",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeBackgroundColor: "#FF5F5F",
    badgeTextColor: "#FFFFFF",
    badgeText: {
      "en-GB": "NEW",
      _id: generateRandomMongoId(),
    },
    faqText: {
      "en-GB": "FAQ Info",
      _id: generateRandomMongoId(),
    },
    info: [
      {
        title: {
          "en-GB": "Task",
          _id: generateRandomMongoId(),
        },
        description: {
          "en-GB": "Walk as much as you can to recieve great rewards!",
          _id: generateRandomMongoId(),
        },
        imageKey: "events/info/document.png",
        _id: generateRandomMongoId(),
      },
      {
        title: {
          "en-GB": "Reward",
          _id: generateRandomMongoId(),
        },
        description: {
          "en-GB": "Earn up to 1000 extra YuCoin by completing daily challenges.",
          _id: generateRandomMongoId(),
        },
        imageKey: "events/info/chest.png",
        _id: generateRandomMongoId(),
      },
    ],
    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(1, "month").format("YYYY-MM-DDTHH:mm:ss"),
    gracePeriodHours: 0,
    duration: 43200,
    participantsCount: 0,
    autoClaimRewards: false,
    skipAutoCompletion: false,
    hideHint: false,
    restrictions: {
      availableForLabels: [],
      restrictedForLabels: ["Mutual of Omaha"],
    },
    disableTransactions: false,
  },
} as IDatabaseItem;
