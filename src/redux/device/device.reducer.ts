import moment from "moment";
import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { ADD_DEVICE_TOKEN, REQUIRE_PUSH_ENABLED, SET_PUSH_PERMISSIONS, SKIP_PUSH_PERMISSIONS } from "./device.actions";
import { IPushNotification } from "./device.selectors";

export interface IDeviceStore {
    deviceId: string;
    deviceToken: string;
    os: string;
    pushNotifications: IPushNotification;
}

export const initialState: IDeviceStore = {
    deviceId: DeviceInfo.getUniqueID(),
    deviceToken: "",
    os: Platform.OS,
    pushNotifications: {
        denied: false,
        requested: false,
        skipped: null,
        status: "notyet"
    }
};

const deviceReducer = (state: IDeviceStore = initialState, action: any): IDeviceStore => {
    switch (action.type) {
        case ADD_DEVICE_TOKEN:
            return addDeviceToken(state, action.payload);

        case REQUIRE_PUSH_ENABLED:
            return requirePushEnabled(state);

        case SET_PUSH_PERMISSIONS:
            return setPushPermissions(state, action.payload);

        case SKIP_PUSH_PERMISSIONS:
            return skipPushPermisions(state);

        default:
            return state;
    }
};

export default deviceReducer;

const addDeviceToken = (state: IDeviceStore, payload: Partial<IDeviceStore>) => ({
    ...state,
    ...payload,
    pushNotifications: {
        ...state.pushNotifications,
        ...payload.pushNotifications
    }
});

const requirePushEnabled = (state: IDeviceStore) => ({
    ...state,
    pushNotifications: {
        ...state.pushNotifications,
        requested: true
    }
});

const setPushPermissions = (state: IDeviceStore, pushPermissions: Partial<IPushNotification>) => ({
    ...state,
    pushNotifications: {
        ...state.pushNotifications,
        ...pushPermissions
    }
});

const skipPushPermisions = (state: IDeviceStore) => ({
    ...state,
    pushNotifications: {
        ...state.pushNotifications,
        denied: !!state.pushNotifications.skipped, // second time
        skipped: state.pushNotifications.skipped || moment().format()
    }
});
