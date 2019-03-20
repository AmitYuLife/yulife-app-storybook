import RNFitKit from "@services/fitkit/fitkit.service";
import { eventChannel } from "redux-saga";

export function stepsChannel(startTime: string) {
    return eventChannel((emitter) => {
        const { PEDOMETER_UPDATE } = RNFitKit.constants;

        const subscriber = RNFitKit.addListener(PEDOMETER_UPDATE, emitter);
        RNFitKit.startPedometerUpdatesFromDate(startTime);

        const unlisten = () => {
            subscriber.remove();
            RNFitKit.stopPedometerUpdates();
        };

        return unlisten;
    });
}
