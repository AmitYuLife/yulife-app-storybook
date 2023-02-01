import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { ADD_DEVICE_TOKEN, REQUIRE_PUSH_ENABLED, SET_PUSH_PERMISSIONS, MARK_APP_AS_INSTALLED } from "./device.actions";
import { IPushNotification } from "./device.selectors";
import { SyncAction } from "@redux/_core/types";

export interface IDeviceStore {
  deviceId: string;
  deviceToken: string;
  os: string;
  pushNotifications: IPushNotification;
  isAppFreshlyInstalled: boolean;
}

let deviceId = "";

(async () => {
  try {
    deviceId = await DeviceInfo.getUniqueId();
  } catch (e) {
    //
  }
})();

export const getInitialState = (): IDeviceStore => ({
  deviceId,
  deviceToken: "",
  os: Platform.OS,
  isAppFreshlyInstalled: true,
  pushNotifications: {
    requested: false,
    status: "notyet",
  },
});

const deviceReducer = (state: IDeviceStore = getInitialState(), action: SyncAction): IDeviceStore => {
  switch (action.type) {
    case ADD_DEVICE_TOKEN:
      return addDeviceToken(state, action.payload);

    case REQUIRE_PUSH_ENABLED:
      return requirePushEnabled(state);

    case MARK_APP_AS_INSTALLED:
      return markAppAsInstalled(state);

    case SET_PUSH_PERMISSIONS:
      return setPushPermissions(state, action.payload);

    default:
      return state;
  }
};

export default deviceReducer;

const markAppAsInstalled = (state: IDeviceStore) => ({ ...state, isAppFreshlyInstalled: false });

const addDeviceToken = (state: IDeviceStore, payload: Partial<IDeviceStore>) => ({
  ...state,
  ...payload,
  pushNotifications: {
    ...state.pushNotifications,
    ...payload.pushNotifications,
  },
});

const requirePushEnabled = (state: IDeviceStore) => ({
  ...state,
  pushNotifications: {
    ...state.pushNotifications,
    requested: true,
  },
});

const setPushPermissions = (state: IDeviceStore, pushPermissions: Partial<IPushNotification>) => ({
  ...state,
  pushNotifications: {
    ...state.pushNotifications,
    ...pushPermissions,
  },
});
