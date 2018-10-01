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

export const getSlotDuration = (slot: GetCurrentWorld_getCurrentWorld_slots): string => {
    switch (slot.subtype) {
        case "meditation":
            const firstMilestone = slot.milestones[0].target.meditation;
            const meditationTime = secondsToMinutes(firstMilestone);

            if (slot.milestones.length > 1) {
                const lastMilestone = slot.milestones[slot.milestones.length - 1].target.meditation;

                return `${meditationTime}-${secondsToMinutes(lastMilestone)} mins`;
            }

            return `${meditationTime} min${meditationTime > 1 ? "s" : ""}`;

        case "day walk":
            return "all day";

        default:
            const defaultTime = secondsToMinutes(slot.timeLimit);
            return `${defaultTime} min${defaultTime > 1 ? "s" : ""}`;
    }
};
