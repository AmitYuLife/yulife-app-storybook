import { takeLatest, call, take, put } from "redux-saga/effects";
import { Alert, ConnectionInfo } from "react-native";
import { appStateChannel, appNetworkChannel } from "./app.channels";
// import PushNotification from "react-native-push-notification";
// import bugsnag from "../../utils/bugsnag";
// import { SyncAction, AsyncAction } from "../_core/types";
import { updateAppState, updateOfflineState, SHOW_MAINTENANCE } from "./app.actions";

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
                    text: "OK",
                    onPress: () => {
                        // Quick and dirty way to close the app, and track in bugsnag
                        throw new Error("503 Pressed!");
                    },
                },
            ],
            { cancelable: false },
        );
    });
}

export default [
    takeLatest("INIT", listenToAppState),
    takeLatest("INIT", listenToNetworkState),
    // takeEvery("*", logBreadcrumbs),
    // takeLatest(LOGOUT, unregisterPush),
    takeLatest(SHOW_MAINTENANCE, showMaintenance),
];
