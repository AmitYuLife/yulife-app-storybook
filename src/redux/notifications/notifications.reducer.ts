import { SyncAction } from "../_core/types";
import { GET_USER_SUCCESS } from "../user/user.actions";
import { UPDATE_NOTIFICATION_SETTINGS, UpdateNofiticationPayload } from "./notifications.actions";
import { IYulifeNotification } from "./notifications.selectors";

export interface INotificationsStore {
  activityInduced: IYulifeNotification;
  challengeCompletion: IYulifeNotification;
  dailyChallengeReminder: IYulifeNotification;
  intercom: IYulifeNotification;
  streakSaver: IYulifeNotification;
}

export const initialState: INotificationsStore = {
  activityInduced: {
    active: false,
    available: false,
    id: "99999900",
    name: "Activity induced",
  },
  challengeCompletion: {
    active: true,
    available: true,
    id: "99999901",
    name: "Challenge completion",
  },
  dailyChallengeReminder: {
    active: false,
    available: true,
    id: "99999902",
    name: "Daily challenge reminder",
    time: "08:00",
  },
  intercom: {
    active: false,
    available: false,
    id: "99999903",
    name: "Push notifications",
  },
  streakSaver: {
    active: false,
    available: true,
    id: "99999904",
    name: "Streak saver",
    time: "17:00",
  },
};

const notificationsReducer = (state: INotificationsStore = initialState, action: SyncAction): INotificationsStore => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      // there was definied already a reducer with different structure. this is to update it.
      // TODO: delete after a while. HO HO HO!
      if (state.dailyChallengeReminder && state.dailyChallengeReminder.id !== "99999902") {
        return initialState;
      }

      return state;
    case UPDATE_NOTIFICATION_SETTINGS:
      return updateNotificationSettings(state, action.payload);

    default:
      return state;
  }
};

export default notificationsReducer;

const updateNotificationSettings = (
  state: INotificationsStore,
  { key, ...payload }: UpdateNofiticationPayload
): INotificationsStore => ({
  ...state,
  [key]: {
    ...state[key],
    ...payload,
  },
});
