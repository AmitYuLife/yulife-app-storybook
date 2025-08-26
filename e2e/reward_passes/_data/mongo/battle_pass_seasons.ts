import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as battlePass from "./battle_passes";

const type = "mongo" as const;
const modelName = "battle_pass_seasons" as const;

export const BATTLE_PASS_PREVENTION_SEASON_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    battlePassId: battlePass.BATTLE_PASS_PREVENTION_01.data._id.toString(),
    title: {
      "en-GB": "Prevention pass",
      "en-US": "Prevention Pass",
      "ja-JP": "予防 パス",
    },
    season: 1,
    startLocalDate: moment().subtract(1, "year").startOf("year").format("YYYY-MM-DD"),
    endLocalDate: moment().add(1, "year").endOf("year").format("YYYY-MM-DD"),
    milestoneTrackIds: [],
    milestoneEndTarget: 500,
    archived: false,
    illustration: {
      imageKey: "battle_pass_illustration_1",
      backgroundColour: "#000000",
      textColour: "#FFFFFF",
    },
    teaser: {
      imageKey: "game/battle-pass-unlockables/gip/1731066133234_Teaser_Illustration.png",
      title: {
        "en-GB": "Unlock a free pair of New Balance trainers",
        "ja-JP": "無料の New Balance トレーナーを手に入れよう",
      },
      description: {
        "en-GB": "Soon you’ll unlock exciting rewards as you progress through levels.",
        "ja-JP": "レベルが上がると、エキサイティングな特典がアンロックされます。",
      },
    },
  },
};

// export const BATTLE_PASS_WELLBEING_SEASON_01: IDatabaseItem = {
//   type,
//   modelName,
//   data: {
//     _id: generateRandomMongoId(),
//     battlePassId: battlePass.BATTLE_PASS_WELLBEING_01.data._id.toString(),
//     title: {
//       "en-GB": "Wellbeing pass",
//       "en-US": "Wellbeing Pass",
//       "ja-JP": "ウェルビーイング パス",
//     },
//     season: 1,
//     startLocalDate: moment().subtract(1, "year").startOf("year").format("YYYY-MM-DD"),
//     endLocalDate: moment().add(1, "year").endOf("year").format("YYYY-MM-DD"),
//     milestoneTrackIds: [],
//     milestoneEndTarget: 670,
//     archived: false,
//     illustration: {
//       imageKey: "battle_pass_illustration_1",
//       backgroundColour: "#000000",
//       textColour: "#FFFFFF",
//     },
//   },
// };
