import PushNotification from "react-native-push-notification";
import { call, select } from "redux-saga/effects";
import { getActiveLevel } from "../../levels/levels.selectors";
import { numericId } from "../notifications.helpers";

export default function* cancelChallengeNotificationSaga() {
    const active = yield select(getActiveLevel);

    if (active.levelSlotId) {
        yield call(() => PushNotification.cancelLocalNotifications({ id: numericId(active.levelSlotId) }));
    }
}
