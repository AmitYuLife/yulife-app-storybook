import { SyncAction } from "../_core/types";
import { IYulifeNotification } from "./notifications.selectors";

export interface INotificationsStore {
    activityInduced: boolean;
    challengeCompletion: boolean;
    dailyChallengeReminder: IYulifeNotification;
    intercom: boolean;
    streakSaver: IYulifeNotification;
}

export const initialState: INotificationsStore = {
    activityInduced: false,
    challengeCompletion: true,
    dailyChallengeReminder: {
        active: false,
        id: null
    },
    intercom: true,
    streakSaver: {
        active: false,
        id: null
    }
};

const notificationsReducer = (state: INotificationsStore = initialState, action: SyncAction): INotificationsStore => {
    switch (action.type) {
        default:
            return state;
    }
};

export default notificationsReducer;
