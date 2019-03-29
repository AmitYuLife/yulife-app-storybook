import RNFitKit from "@services/fitkit/fitkit.service";
import { eventChannel } from "redux-saga";

export function stepsChannel(startTime: string, isNewFetch: boolean) {
    return eventChannel((emitter) => {
        const { PEDOMETER_UPDATE } = RNFitKit.constants;

        const subscriber = RNFitKit.addListener(PEDOMETER_UPDATE, emitter);

        if (isNewFetch) {
            RNFitKit.startFetchingStepsData();
        } else {
            RNFitKit.startPedometerUpdatesFromDate(startTime);
        }

        const unlisten = () => {
            subscriber.remove();

            if (isNewFetch) {
                RNFitKit.stopFetchingStepsData();
            } else {
                RNFitKit.stopPedometerUpdates();
            }
        };

        return unlisten;
    });
}
