import { eventChannel } from "redux-saga";
import Pedometer from "react-native-dual-pedometer";

export function dailyStepsChannel(startTime: string) {
    return eventChannel((emitter) => {
        Pedometer.addListener("pedometer:update", emitter);
        Pedometer.startPedometerUpdatesFromDate(startTime);

        const unlisten = () => {
            Pedometer.stopPedometerUpdates();
        };

        return unlisten;
    });
}
