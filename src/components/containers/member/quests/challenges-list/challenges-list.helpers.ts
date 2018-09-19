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
        // case "meditation":
        //     // tslint:disable-next-line
        //     return `${secondsToMinutes(slot.milestones[0].target[0])}-${secondsToMinutes(
        //         slot.milestones[2].target[0],
        //     )} mins`;

        // case "day walk":
        //     return "all day";

        default:
            return `${secondsToMinutes(slot.timeLimit)} mins`;
    }
};
