import {
  GetCurrentQuestLevels_getCurrentQuestLevels_slots,
  GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones,
} from "@graphql/_core/schema";
import { getUnitTarget } from "@services/utils";

export function reduceMilestones(milestones: GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones[] = []) {
  return (milestones || []).reduce((sum, milestone) => sum + milestone.coins, 0);
}

export function formatMilestones(
  milestones: GetCurrentQuestLevels_getCurrentQuestLevels_slots_milestones[],
  subtype: string
) {
  return (milestones || []).reduce(
    (acc, milestone) => {
      const reward = acc.sum + milestone.coins;

      acc.sum = reward;
      acc.result.push({
        reward,
        target: milestone.target[getUnitTarget(subtype)],
      });

      return acc;
    },
    { sum: 0, result: [] }
  ).result;
}

export function secondsToMinutes(seconds: number) {
  return Math.floor(seconds / 60);
}

export function getSlotDuration({ subtype, milestones, timeLimit }: GetCurrentQuestLevels_getCurrentQuestLevels_slots) {
  const defaultTime = secondsToMinutes(timeLimit);

  switch (subtype) {
    case "meditation":
      if (milestones) {
        const firstMilestone = milestones[0].target.meditation;
        const meditationTime = secondsToMinutes(firstMilestone);

        if (milestones.length > 1) {
          const lastMilestone = milestones[milestones.length - 1].target.meditation;

          return `${meditationTime}-${secondsToMinutes(lastMilestone)} mins`;
        }

        return `${meditationTime} min${meditationTime > 1 ? "s" : ""}`;
      }

      return "";

    case "day walk":
      return "all day";

    default:
      return `${defaultTime} minute${defaultTime > 1 ? "s" : ""}`;
  }
}
