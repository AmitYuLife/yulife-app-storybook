import { GetCurrentUser } from "../../../graphql/_core/schema";
import { getUserSuccess } from "../../user/user.actions";
import { UpdateNofiticationPayload, updateNotificationSettings } from "../notifications.actions";
import notificationsReducer from "../notifications.reducer";
import { initialState, INotificationsStore } from "../notifications.reducer";

describe("Notification Reducer notificationsReducer", () => {
    it("return correct state for update notifications settings", () => {
        const mock: UpdateNofiticationPayload = {
            key: "dailyChallengeReminder",
            active: true,
            available: true,
            id: " ",
            name: " ",
            snooze: 1,
            time: "string"
        };

        const actual = notificationsReducer(initialState, updateNotificationSettings(mock));
        const { key, ...payload } = mock;
        const expected: INotificationsStore = {
            ...initialState,
            [key]: {
                ...initialState[key],
                ...payload
            }
        };

        expect(actual).toEqual(expected);
    });

    it("return provided state for get user succes when state.dailyChallengeReminder.id equal with 99999902", () => {
        const mockCurrentUser: GetCurrentUser = {
            getIntercomHash: null,
            getCurrentUser: null
        };

        const mockNotificationState = {
            ...initialState
        };

        const actual = notificationsReducer(mockNotificationState, getUserSuccess(mockCurrentUser));
        const expected = mockNotificationState;

        expect(actual).toEqual(expected);
    });

    it("return initial state when dailyChallengeReminder.id different 99999902", () => {
        const mockNotificationState = {
            ...initialState,
            dailyChallengeReminder: {
                active: false,
                available: true,
                id: "no_99999902",
                name: "Daily challenge reminder",
                time: "08:00"
            }
        };

        const mockCurrentUser: GetCurrentUser = {
            getIntercomHash: null,
            getCurrentUser: null
        };

        const actual = notificationsReducer(mockNotificationState, getUserSuccess(mockCurrentUser));
        const expected = initialState;

        expect(actual).toEqual(expected);
    });

    it("return default state if no action type", () => {
        const actual = notificationsReducer(initialState, { type: "no_type" });

        const expected = initialState;

        expect(actual).toEqual(expected);
    });
});
