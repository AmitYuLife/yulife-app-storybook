import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "mongo";
const modelName = "goals_for_global";

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

export const GOALS_RANDOM_CHEST = {
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
    title: "Walk 1k this week",
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
    description: "Complete 1,000 steps to earn a random chest reward.",
    descriptionTitle: "Walk and earn a chest!",
    duration: 2880,
    faqText: "FAQ test",
    backFill: true,
    info: [
      {
        imageKey: "personalProducts/policy-terms-conditions.svg",
        title: "Task",
        description: "Walk 1,000 steps to complete the milestone.",
      },
      {
        imageKey: "cms/1651070115152_Chest.png",
        title: "Reward",
        description: "Earn a random chest reward by completing the milestone.",
      },
    ],
    tagImageKey: "cms/1649947806334_Vector.png",
  },
} as IDatabaseItem;

export const GOALS_TOURNAMENT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    title: "Purple Voyage",
    autoJoin: true,
    tag: "Team event",
    illustrationImageKey: "events/banners/banner_cup_under_water.png",
    illustrationBackgroundColor: "#290163",
    illustrationTextColor: "#FFFFFF",
    status: "active",
    type: "vs",
    synchronousProgress: true,
    descriptionTitle: "Step Showdown",
    description:
      "Gear up for an epic step-off in the Yuniverse! Teams will go toe-to-toe, with the highest average step count claiming the crown. Every step counts, so rally your squad, lace up those trainers, and let’s get moving. Will your team stride to victory, or will you be left in the dust?",
    tags: [],
    tagImageKey: "content/icons/yulife.png",
    badgeImageKey: "events/info/flame.png",
    backFill: true,
    info: [],
    startDateTime: moment().format("YYYY-MM-DD"),
    endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
    gracePeriodHours: 24,
    participantsCount: 0,
    disableTransactions: false,
    autoClaimRewards: false,
    skipAutoCompletion: false,
    hideHint: false,
  },
} as IDatabaseItem;
