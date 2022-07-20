import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "mongo";
const modelName = "goals";

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

    startDate: moment().subtract(1, "day").toDate(),
    endDate: moment().add(7, "day").toDate(),
  },
} as IDatabaseItem;
