import { CreateActiveChallenge_createActiveChallenge_levelSlot_milestones } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";
import { getChallengesAmountAvailable } from "./levels.helpers";

export interface IActiveLevel {
    chest: {
        type: string;
        value: number;
    };
    coins: number;
    endDateTime: string;
    initialPedometerResult: number;
    isCompleted: boolean;
    level: number;
    levelSlotId: string;
    milestones: CreateActiveChallenge_createActiveChallenge_levelSlot_milestones[];
    milestonesLog: any;
    rating: number;
    score: number;
    startDateTime: string;
    status: "failed" | "success";
    subtype: string;
    timeUp: boolean;
    unit: string;
}

export interface ITodayChallengesStatus {
    available: number;
    done: number;
    hasDone: boolean;
    isAvailable: boolean;
}

export const challengesStatusSelector = (state: IReduxState): ITodayChallengesStatus => {
    const available = getChallengesAmountAvailable(state.levels.level);
    const done = state.levels.challengesDoneToday;

    return {
        available,
        done,
        hasDone: done > 0,
        isAvailable: done < available
    };
};
export const currentLevelSelector = (state: IReduxState): number => state.levels.level;
export const nextLevelAvailableAtSelector = (state: IReduxState): string => state.levels.nextLevelAvailableAt;
export const activeLevelSelector = (state: IReduxState): IActiveLevel => state.levels.active;
export const hasNotificationSelector = (state: IReduxState) =>
    !!state.levels.active.levelSlotId || state.levels.active.timeUp || !!state.levels.active.status;
