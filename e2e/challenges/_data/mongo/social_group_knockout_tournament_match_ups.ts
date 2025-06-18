import { SOCIAL_GROUP_KNOCKOUT_TOURNAMENT } from "./social_group_knockout_tournaments";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_1, SOCIAL_GROUP_7 } from "./social_groups";
import { GOALS_TOURNAMENT } from "./goals";
import moment from "moment";

const type = "mongo";
const modelName = "social_group_knockout_tournament_match_ups";

export const SOCIAL_GROUP_KNOCKOUT_TOURNAMENT_MATCH_UP = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    tournamentId: {
      $oid: "67a4aa1774c548694b1de0f7",
    },
    socialGroupIds: [SOCIAL_GROUP_1.data.socialGroupId, SOCIAL_GROUP_7.data.socialGroupId],
    goalId: GOALS_TOURNAMENT.data._id,
    roundNumber: 1,
    startDateTimeUtc: moment.utc().startOf("day").format("YYYY-MM-DD"),
    endDateTimeUtc: SOCIAL_GROUP_KNOCKOUT_TOURNAMENT.data.nextRoundDateTimeUtc,
    results: [
      {
        socialGroupId: SOCIAL_GROUP_1.data.socialGroupId,
        score: 999,
        teamName: "SG1",
      },
      {
        socialGroupId: SOCIAL_GROUP_7.data.socialGroupId,
        score: 998,
        teamName: "SG7",
      },
    ],
  },
} as IDatabaseItem;
