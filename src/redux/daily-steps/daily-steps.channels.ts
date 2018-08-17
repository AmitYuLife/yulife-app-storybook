import { eventChannel } from "redux-saga";
import Pedometer from "react-native-dual-pedometer";

export function dailyStepsChannel(startTime: string) {
    return eventChannel((emitter) => {
        const { PEDOMETER_UPDATE } = Pedometer.constants;

        Pedometer.addListener(PEDOMETER_UPDATE, emitter);
        Pedometer.startPedometerUpdatesFromDate(startTime);

        const unlisten = () => {
            Pedometer.stopPedometerUpdates();
        };

        return unlisten;
    });
}
