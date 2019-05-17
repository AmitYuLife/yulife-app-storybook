import { addDeviceToken, requirePushEnabled, setPushPermissions } from "../device.actions";
import deviceReducer, { IDeviceStore } from "../device.reducer";
import { initialState } from "../device.reducer";
import { IPushNotification } from "../device.selectors";
describe("Device Reducer", () => {
    it("add device token", () => {
        const localData: Partial<IDeviceStore> = {
            deviceId: "string",
            deviceToken: "string",
            os: "string",
            pushNotifications: { requested: true, status: "enabled" }
        };

        const actual = deviceReducer(initialState, addDeviceToken(localData));

        const expected = {
            ...initialState,
            ...localData,
            pushNotifications: {
                ...initialState.pushNotifications,
                ...localData.pushNotifications
            }
        };

        expect(actual).toEqual(expected);
    });

    it("require push enabled", () => {
        const actual = deviceReducer(initialState, requirePushEnabled());

        const expected = {
            ...initialState,
            pushNotifications: {
                ...initialState.pushNotifications,
                requested: true
            }
        };

        expect(actual).toEqual(expected);
    });

    it("set push permission", () => {
        const localData: Partial<IPushNotification> = { requested: true, status: "enabled" };

        const actual = deviceReducer(initialState, setPushPermissions(localData));

        const expected = {
            ...initialState,
            pushNotifications: {
                ...initialState.pushNotifications,
                ...localData
            }
        };

        expect(actual).toEqual(expected);
    });
});
