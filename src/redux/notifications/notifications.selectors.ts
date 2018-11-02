import { IReduxState } from "../_core/reducers";

export interface IYulifeNotification {
    active: boolean;
    id: number;
    snooze?: number;
    time?: string;
}

export const challengeCompletionSelector = (state: IReduxState): boolean => state.notifications.challengeCompletion;
