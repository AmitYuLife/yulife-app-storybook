import { Alert, ConnectionInfo } from "react-native";
import { call, put, take, takeLatest } from "redux-saga/effects";
// import PushNotification from "react-native-push-notification";
// import bugsnag from "../../utils/bugsnag";
// import { SyncAction, AsyncAction } from "../_core/types";
import { SHOW_MAINTENANCE, updateAppState, updateOfflineState } from "./app.actions";
import { appNetworkChannel, appStateChannel } from "./app.channels";

function* listenToAppState() {
    const stateChannel = yield call(appStateChannel);

    while (true) {
        const state = yield take(stateChannel);
        yield put(updateAppState(state));
    }
}

function* listenToNetworkState() {
    const networkChannel = yield call(appNetworkChannel);

    while (true) {
        const network: ConnectionInfo = yield take(networkChannel);
        yield put(updateOfflineState(network.type === "none"));
    }
}

// example of moving from reducer logic
// function* unregisterPush() {
//     yield call(
//         PushNotification.cancelAllLocalNotifications.bind(PushNotification),
//     );
//     yield call(
//         PushNotification.setApplicationIconBadgeNumber.bind(PushNotification),
//         0,
//     );
//     yield call(PushNotification.unregister.bind(PushNotification));
// }

// function* logBreadcrumbs(action: SyncAction | AsyncAction) {
//     try {
//         if (typeof action.payload === "object" || typeof action.payload === "string") {
//             yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30), action.payload);
//         } else {
//             yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30));
//         }
//     } catch (e) {
//         console.error(e); // tslint:disable-line
//     }
// }

function* showMaintenance() {
    yield call(() => {
        Alert.alert(
            "Under maintenance",
            "Please come back later",
            [
                {
                    onPress: () => {
                        // Quick and dirty way to close the app, and track in bugsnag
                        throw new Error("503 Pressed!");
                    },
                    text: "OK"
                }
            ],
            { cancelable: false }
        );
    });
}

export default [
    takeLatest("INIT", listenToAppState),
    takeLatest("INIT", listenToNetworkState),
    // takeEvery("*", logBreadcrumbs),
    // takeLatest(LOGOUT, unregisterPush),
    takeLatest(SHOW_MAINTENANCE, showMaintenance)
];
