import RNFitKit from "@services/fitkit/fitkit.service";
import { eventChannel } from "redux-saga";

// export function stepsChannel(startTime: string) {
export function stepsChannel() {
    return eventChannel((emitter) => {
        const { PEDOMETER_UPDATE } = RNFitKit.constants;

        const subscriber = RNFitKit.addListener(PEDOMETER_UPDATE, emitter);
        RNFitKit.startFetchingStepsData();

        const unlisten = () => {
            subscriber.remove();
            RNFitKit.stopFetchingStepsData();
        };

        return unlisten;
    });
}
