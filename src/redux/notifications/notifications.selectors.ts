import { IReduxState } from "../_core/reducers";

export interface IYulifeNotification {
    active: boolean;
    available: boolean;
    id: string;
    name: string;
    snooze?: number;
    time?: string;
}

export const activityInducedSelector = (state: IReduxState) => state.notifications.activityInduced;
export const challengeCompletionSelector = (state: IReduxState) => state.notifications.challengeCompletion;
export const dailyChallengeReminderSelector = (state: IReduxState) => state.notifications.dailyChallengeReminder;
export const intercomSelector = (state: IReduxState) => state.notifications.intercom;
export const streakSaverSelector = (state: IReduxState) => state.notifications.streakSaver;
export const notificationsSelector = (state: IReduxState) => state.notifications;
