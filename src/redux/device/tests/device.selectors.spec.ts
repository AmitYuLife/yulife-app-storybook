import { initialState, IReduxState } from "../../_core/reducers";
import { initialState as deviceInialState } from "../device.reducer";
import { getDeviceId, getDeviceToken, getPushNotifications } from "../device.selectors";
describe("Device Selector", () => {
    describe("Device Token getDeviceToken", () => {
        it("return device token", () => {
            const mockState: IReduxState = {
                ...initialState,
                device: {
                    ...deviceInialState,
                    deviceToken: "token"
                }
            };

            const actual = getDeviceToken(mockState);
            const expected = mockState.device.deviceToken;

            expect(actual).toEqual(expected);
        });
    });

    describe("Device ID getDeviceId", () => {
        it("return device ID", () => {
            const mockState: IReduxState = {
                ...initialState,
                device: {
                    ...deviceInialState,
                    deviceId: "id"
                }
            };

            const actual = getDeviceId(mockState);
            const expected = mockState.device.deviceId;

            expect(actual).toEqual(expected);
        });
    });

    describe("Push notifications getPushNotifications", () => {
        it("return device push notification", () => {
            const mockState: IReduxState = {
                ...initialState,
                device: {
                    ...deviceInialState,
                    pushNotifications: {
                        requested: true,
                        status: "enabled"
                    }
                }
            };

            const actual = getPushNotifications(mockState);
            const expected = mockState.device.pushNotifications;

            expect(actual).toEqual(expected);
        });
    });
});
