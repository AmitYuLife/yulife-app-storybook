import { appStateChannel } from "@redux/app/app.channels";
import { getToken } from "@services/storage";
import { Platform } from "react-native";
import { channel, delay } from "redux-saga";
import { call, put, race, select, take } from "redux-saga/effects";
import { updateUserConsent } from "../../../user/user.actions";
import { setPushPermissions } from "../../device.actions";
import { createPushPermissionsChannel } from "../../device.channels";
import { getPushNotifications, PushPermissionsEnum } from "../../device.selectors";
import listenForPermissionsChangeSaga from "../listenForPermissionsChange.saga";
import { checkPermissions } from "../listenForPermissionsChange.saga";

function defaultTestListenForPermissionChangeSaga(testSaga: any, mockChannel: any = channel()) {
    let actual: any = testSaga.next();
    let expected: any = call(appStateChannel);
    expect(actual.value).toEqual(expected);

    // set channel for the previous call
    actual = testSaga.next(mockChannel);
    expected = call(checkPermissions);
    expect(actual.value).toEqual(expected);

    actual = testSaga.next();
    expected = take(mockChannel);
    expect(actual.value).toEqual(expected);
}

describe("Permissions Change saga listenForPermissionsChangeSaga", () => {
    it("check permission if state is active", () => {
        const testSaga = listenForPermissionsChangeSaga();
        defaultTestListenForPermissionChangeSaga(testSaga);

        const mockChannelState = "active";
        const actual = testSaga.next(mockChannelState);
        const expected = call(checkPermissions);
        expect(actual.value).toEqual(expected);
    });

    it("does not check for permission if state is not active", () => {
        const testSaga = listenForPermissionsChangeSaga();
        const mockChannel = channel();

        defaultTestListenForPermissionChangeSaga(testSaga, mockChannel);

        const mockChannelState = "not_active";
        const actual = testSaga.next(mockChannelState);
        const expected = take(mockChannel);
        expect(actual.value).toEqual(expected);
    });
});

function defaultCheckPermissionTest(testSaga: any) {
    let actual: any = testSaga.next({ alert: true, badge: true, sound: true });
    let expected: any = put(setPushPermissions({ status: "enabled" }));
    expect(actual.value).toEqual(expected);

    actual = testSaga.next();
    expected = race({ timeout: call(delay, 1000), token: call(getToken) });
    expect(actual.value).toEqual(expected);

    actual = testSaga.next({ token: call(getToken) });
    expected = put(updateUserConsent({ pushNotifications: true }));
    expect(actual.value).toEqual(expected);

    actual = testSaga.next();
    expect(actual.done).toEqual(true);
}

describe("Check permission", () => {
    it("check permissions for iOS", () => {
        const testSaga = checkPermissions();

        let actual: any = testSaga.next();
        let expected: any = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        Platform.OS = "ios";

        actual = testSaga.next(PushPermissionsEnum.enabled);
        expected = call(createPushPermissionsChannel);
        expect(actual.value).toEqual(expected);

        const mockChannel = channel();
        actual = testSaga.next(mockChannel);
        expected = take(mockChannel);
        expect(actual.value).toEqual(expected);

        defaultCheckPermissionTest(testSaga);
    });

    it("check permissions for android", () => {
        const testSaga = checkPermissions();

        const actual = testSaga.next();
        const expected = select(getPushNotifications);
        expect(actual.value).toEqual(expected);

        Platform.OS = "android";

        defaultCheckPermissionTest(testSaga);
    });
});
