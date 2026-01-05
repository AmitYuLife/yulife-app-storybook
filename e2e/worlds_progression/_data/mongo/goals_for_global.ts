import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "mongo";
const modelName = "goals_for_global";

export const GOALS_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "groups",
    illustrationImageKey: "referral/background/full/Ocean.png",
    title: "Test event detox",
    illustrationBackgroundColor: "#F9F9DB",
    illustrationTextColor: "#5A5A5C",
    synchronousProgress: true,
    participantsCount: 0,
    tagImageKey: "logos/yulife.png",
    badgeImageKey: "logos/yulife.png",
    descriptionTitle: "Bright and early",
    description:
      "A new day in the Yuniverse begins. Did you meet any of our animal friends yet? If not, hurry up! Complete 2 challenges over the next 5 days and earn lots of additional YuCoin.",
    faqText:
      "From now you will be able to participate in future individual and community events. In community events you can work together with your colleagues and friends to achieve goals and win prizes.",
    badgeText: "NEW",
    badgeBackgroundColor: "#FF5F5F",
    badgeTextColor: "#FFFFFF",
    info: [
      {
        _id: generateRandomMongoId(),
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "Complete any challenge. Challenges can be started through the quest menu.",
      },
    ],

    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const GOALS_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: "Ends on the 10th",
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
    startOn: null,
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: "NEW",
    badgeTextColor: "#FFFFFF",
    description:
      "You've been selected to test our exciting new feature, The Events System! Complete challenges to hit milestones and earn extra YuCoin.",
    descriptionTitle: "Challenge yourself",
    duration: 2880,
    faqText: "FAQ test",
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "walk 500 steps over the next 2 days to win an extra YuCoin bounty.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn up to 1000 extra YuCoin by completing daily challenges. ",
      },
      {
        imageKey: "cms/1651069814232_Group 1483.png",
        title: "Feedback",
        description:
          "We're activley developing this feature and would love to hear your feedback! You can contact us via the Chat button located in side menu on the main screen. ",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;

export const GOALS_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: "Cycle 10km this week",
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
    startOn: null,
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: "NEW",
    badgeTextColor: "#FFFFFF",
    description:
      "You've been selected to test our exciting new feature, The Events System! Complete cycling challenges to hit milestones and earn extra YuCoin.",
    descriptionTitle: "Ride and challenge yourself!",
    duration: 2880,
    faqText: "FAQ test",
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "walk 500 steps over the next 2 days to win an extra YuCoin bounty.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn up to 1000 extra YuCoin by completing daily challenges. ",
      },
      {
        imageKey: "cms/1651069814232_Group 1483.png",
        title: "Feedback",
        description:
          "We're activley developing this feature and would love to hear your feedback! You can contact us via the Chat button located in side menu on the main screen. ",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;

export const GOALS_4 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: "3 star challenges streak",
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
    startOn: null,
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: "NEW",
    badgeTextColor: "#FFFFFF",
    description:
      "You've been selected to test our exciting new feature, The Events System! Complete four 3 star challenges to hit milestones and earn extra YuCoin.",
    descriptionTitle: "Challenge yourself with 3 star challenges!",
    duration: 2880,
    faqText: "FAQ test",
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "walk 500 steps over the next 2 days to win an extra YuCoin bounty.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn up to 1000 extra YuCoin by completing daily challenges. ",
      },
      {
        imageKey: "cms/1651069814232_Group 1483.png",
        title: "Feedback",
        description:
          "We're activley developing this feature and would love to hear your feedback! You can contact us via the Chat button located in side menu on the main screen. ",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;

export const GOALS_5 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    autoJoin: false,
    status: "active",
    type: "individual",
    synchronousProgress: true,
    tags: [],
    participantsCount: 0,
    title: "Walk 10k this week",
    illustrationImageKey: "cms/1652745617947_Walk of the worlds (1).png",
    illustrationBackgroundColor: "#FEFBE9",
    illustrationTextColor: "#5A5A5C",
    startDateTime: moment().subtract(5, "day").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(5, "day").format("YYYY-MM-DDTHH:mm:ss"),
    startOn: null,
    badgeBackgroundColor: "#FF5F5F",
    badgeImageKey: "cms/1649947633967_fire.png",
    badgeText: "NEW",
    badgeTextColor: "#FFFFFF",
    description:
      "You've been selected to test our exciting new feature, The Events System! Complete walking challenges to hit milestones and earn extra YuCoin.",
    descriptionTitle: "Walk and challenge yourself!",
    duration: 2880,
    faqText: "FAQ test",
    backFill: true,
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "walk 10000 steps over the next 2 days to win an extra YuCoin bounty.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn up to 1000 extra YuCoin by completing daily challenges. ",
      },
      {
        imageKey: "cms/1651069814232_Group 1483.png",
        title: "Feedback",
        description:
          "We're activley developing this feature and would love to hear your feedback! You can contact us via the Chat button located in side menu on the main screen. ",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;
