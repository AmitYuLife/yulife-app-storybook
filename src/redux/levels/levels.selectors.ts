import { CreateActiveChallenge_createActiveChallenge_levelSlot_milestones } from "../../graphql/_core/schema";
import { IReduxState } from "../_core/reducers";

export interface IActiveLevel {
    coins: number;
    endDateTime: string;
    levelSlotId: string;
    milestones: CreateActiveChallenge_createActiveChallenge_levelSlot_milestones[];
    milestonesLog: any;
    rating: number;
    score: number;
    startDateTime: string;
    status: "failed" | "success";
    subtype: string;
    unit: string;
}

export const currentLevelSelector = (state: IReduxState): number => state.levels.level;
export const nextLevelAvailableAtSelector = (state: IReduxState): string => state.levels.nextLevelAvailableAt;
export const activeLevelSelector = (state: IReduxState): IActiveLevel => state.levels.active;
