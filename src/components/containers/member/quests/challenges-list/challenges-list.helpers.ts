import {
    GetCurrentWorld_getCurrentWorld_slots,
    GetCurrentWorld_getCurrentWorld_slots_milestones
} from "../../../../../graphql/_core/schema";

export const reduceMilestones = (milestones: GetCurrentWorld_getCurrentWorld_slots_milestones[] = []): number =>
    (milestones || []).reduce((sum, milestone) => sum + milestone.coins, 0);

export const formatMilestones = (milestones: GetCurrentWorld_getCurrentWorld_slots_milestones[], subtype: string) =>
    (milestones || []).map((milestone) => ({
        reward: milestone.coins,
        target: milestone.target[subtype === "meditation" ? "meditation" : "steps"]
    }));

export const secondsToMinutes = (seconds: number): number => Math.floor(seconds / 60);

export const getSlotDuration = ({ subtype, milestones, timeLimit }: GetCurrentWorld_getCurrentWorld_slots): string => {
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
            const defaultTime = secondsToMinutes(timeLimit);
            return `${defaultTime} min${defaultTime > 1 ? "s" : ""}`;
    }
};
