import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_71 } from "../postgres/customers";
import { GOALS_3 } from "./goals";
import { GOAL_TEAM_3 } from "./goal_team";

export const GOAL_PARTICIPATION_3 = {
  type: "mongo",
  modelName: "goal_participation",
  data: {
    status: "active",
    typesToTrack: ["passive_challenge_cycling"],
    synchronousProgress: true,
    userId: CUSTOMER_71.data.customerId,
    goal: GOALS_3.data._id,
    parentType: "goals",
    team: GOAL_TEAM_3.data._id,
    startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
    endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
    trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
    progressSyncedAt: moment(),
    participationId: null,
  },
} as IDatabaseItem;
