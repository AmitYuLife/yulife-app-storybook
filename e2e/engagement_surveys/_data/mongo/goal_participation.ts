import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_5 } from "../postgres/customers";
import { GOALS_1 } from "./goals_for_global";
import { GOAL_TEAM_1 } from "./goal_team";

const type = "mongo";
const modelName = "goal_participation";

const goalEndDateTime = moment().add(1, "weeks");

export const GOAL_PARTICIPATION_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    status: "active",
    typesToTrack: ["journey_milestone_reached"],
    synchronousProgress: false,
    userId: CUSTOMER_5.data.customerId,
    goal: GOALS_1.data._id,
    parentType: "goals",
    team: GOAL_TEAM_1.data._id,
    joinGoalTime: moment().subtract(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
    startDateTime: moment().subtract(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: goalEndDateTime.format("YYYY-MM-DDTHH:mm:ss"),
    trackingEndDateTime: goalEndDateTime.clone().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
    disableTransactions: true,
    autoClaimRewards: true,
    progressSyncedAt: moment(),
    participationId: null,
  },
} as IDatabaseItem;
