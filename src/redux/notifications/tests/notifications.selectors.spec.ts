import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as initialStateNotification } from "../notifications.reducer";
import {
    getActivityInducedNotification,
    getChallengeCompletionNotification,
    getDailyChallengeReminderNotification,
    getIntercomNotification,
    getNotifications,
    getStreakSaverNotification
} from "../notifications.selectors";
describe("Notification Selector", () => {
    describe("Activity Induce Notification getActivityInducedNotification", () => {
        it("get the correct activityInduced", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification,
                    activityInduced: {
                        active: true,
                        available: true,
                        id: "mock_99999900",
                        name: "Activity induced"
                    }
                }
            };

            const expected = mockState.notifications.activityInduced;
            const actual = getActivityInducedNotification(mockState);
            expect(actual).toEqual(expected);
        });

        it("get the correct challenge complete notification", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification,
                    challengeCompletion: {
                        active: true,
                        available: true,
                        id: "mock_99999901",
                        name: "Challenge completion"
                    }
                }
            };

            const expected = mockState.notifications.challengeCompletion;
            const actual = getChallengeCompletionNotification(mockState);
            expect(actual).toEqual(expected);
        });

        it("get the correct challenge remider notification", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification,
                    dailyChallengeReminder: {
                        active: false,
                        available: true,
                        id: "mock_99999902",
                        name: "Daily challenge reminder",
                        time: "08:00"
                    }
                }
            };

            const expected = mockState.notifications.dailyChallengeReminder;
            const actual = getDailyChallengeReminderNotification(mockState);
            expect(actual).toEqual(expected);
        });

        it("get the correct intercome notification", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification,
                    intercom: {
                        active: false,
                        available: false,
                        id: "mock_99999903",
                        name: "Push notifications"
                    }
                }
            };

            const expected = mockState.notifications.intercom;
            const actual = getIntercomNotification(mockState);
            expect(actual).toEqual(expected);
        });

        it("get the correct streak saver notification", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification,
                    streakSaver: {
                        active: false,
                        available: true,
                        id: "mock_99999904",
                        name: "Streak saver",
                        time: "17:00"
                    }
                }
            };

            const expected = mockState.notifications.streakSaver;
            const actual = getStreakSaverNotification(mockState);
            expect(actual).toEqual(expected);
        });

        it("get the correct notifications", () => {
            const mockState: IReduxState = {
                ...initialState,
                notifications: {
                    ...initialStateNotification
                }
            };

            const expected = mockState.notifications;
            const actual = getNotifications(mockState);
            expect(actual).toEqual(expected);
        });
    });
});
