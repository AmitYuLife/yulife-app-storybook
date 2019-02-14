import Pedometer from "react-native-dual-pedometer";
import { eventChannel } from "redux-saga";

export function stepsChannel(startTime: string) {
    return eventChannel((emitter) => {
        const { PEDOMETER_UPDATE } = Pedometer.constants;

        const subscriber = Pedometer.addListener(PEDOMETER_UPDATE, emitter);
        Pedometer.startPedometerUpdatesFromDate(startTime);

        const unlisten = () => {
            subscriber.remove();
            Pedometer.stopPedometerUpdates();
        };

        return unlisten;
    });
}
