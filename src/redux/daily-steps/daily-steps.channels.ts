import Pedometer from "react-native-dual-pedometer";
import { eventChannel } from "redux-saga";

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
