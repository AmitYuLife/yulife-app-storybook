import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_1, SOCIAL_GROUP_7, SOCIAL_GROUP_C1 } from "./social_groups";
import moment from "moment";

const type = "mongo";
const modelName = "social_group_knockout_tournaments";

export const SOCIAL_GROUP_KNOCKOUT_TOURNAMENT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    name: {
      "en-GB": "Detox Test Tournament",
    },
    description: {
      "en-GB": "AQA tournament",
    },
    teams: [
      {
        socialGroupId: SOCIAL_GROUP_1.data.socialGroupId,
        teamName: "SG1",
      },
      {
        socialGroupId: SOCIAL_GROUP_7.data.socialGroupId,
        teamName: "SG7",
      },
    ],
    startDateTimeUtc: moment.utc().startOf("day").format("YYYY-MM-DD"),
    nextRoundDateTimeUtc: moment.utc().add(3, "days").startOf("day").format("YYYY-MM-DD"),
    isCompleted: false,
    currentRound: 1,
    roundDurationInDays: 7,
    numberOfTeamsPerMatchUp: 2,
  },
} as IDatabaseItem;
