import { IReduxState } from "../_core/reducers";

export interface IYulifeNotification {
    active: boolean;
    available: boolean;
    id: string;
    name: string;
    snooze?: number;
    time?: string;
}

export const getActivityInducedNotification = (state: IReduxState) => state.notifications.activityInduced;
export const getChallengeCompletionNotification = (state: IReduxState) => state.notifications.challengeCompletion;
export const getDailyChallengeReminderNotification = (state: IReduxState) => state.notifications.dailyChallengeReminder;
export const getIntercomNotification = (state: IReduxState) => state.notifications.intercom;
export const getStreakSaverNotification = (state: IReduxState) => state.notifications.streakSaver;
export const getNotifications = (state: IReduxState) => state.notifications;
