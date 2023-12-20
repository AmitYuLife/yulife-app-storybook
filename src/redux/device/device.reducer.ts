import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { findBestAvailableLanguage, Language } from "@locale";
import { IPushNotification } from "./device.selectors";
import { SyncAction } from "@redux/_core/types";
import {
  ADD_DEVICE_TOKEN,
  REQUIRE_PUSH_ENABLED,
  SET_PUSH_PERMISSIONS,
  MARK_APP_AS_INSTALLED,
  SET_DEVICE_LOCALE,
  UPDATE_CURRENT_DATE,
} from "./device.actions";
import moment from "moment";
import { DATE_FORMAT } from "@utils";

export interface IDeviceStore {
  deviceId: string;
  deviceToken: string;
  os: string;
  currentDate: string;
  /** @description - the selected user locale on their phone's settings */
  currentDeviceLocale: Language;
  /** @description - the selected user locale in the YuLife app */
  locale: Language;
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

export const getInitialState = (): IDeviceStore => {
  const locale = findBestAvailableLanguage();

  return {
    deviceId,
    deviceToken: "",
    os: Platform.OS,
    isAppFreshlyInstalled: true,
    currentDeviceLocale: locale,
    currentDate: moment().format(DATE_FORMAT),
    locale,
    pushNotifications: {
      requested: false,
      status: "notyet",
    },
  };
};

const deviceReducer = (state: IDeviceStore = getInitialState(), action: SyncAction): IDeviceStore => {
  switch (action.type) {
    case SET_DEVICE_LOCALE:
      return setDeviceLocale(state, action.payload);

    case ADD_DEVICE_TOKEN:
      return addDeviceToken(state, action.payload);

    case REQUIRE_PUSH_ENABLED:
      return requirePushEnabled(state);

    case MARK_APP_AS_INSTALLED:
      return markAppAsInstalled(state);

    case SET_PUSH_PERMISSIONS:
      return setPushPermissions(state, action.payload);

    case UPDATE_CURRENT_DATE:
      return updateCurrentDate(state, action.payload);

    default:
      return state;
  }
};

export default deviceReducer;

const setDeviceLocale = (state: IDeviceStore, payload: { currentDeviceLocale?: Language; locale: Language }) => ({
  ...state,
  locale: payload.locale,
  currentDeviceLocale: payload.currentDeviceLocale || state.currentDeviceLocale,
});

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

const updateCurrentDate = (state: IDeviceStore, payload: string): IDeviceStore => ({
  ...state,
  currentDate: payload,
});
