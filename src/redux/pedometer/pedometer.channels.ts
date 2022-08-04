import RNFitKit from "@services/fitkit/fitkit.service";
import { eventChannel } from "redux-saga";

export function stepsChannel(startTime: string, blackListApps: string[]) {
  return eventChannel((emitter) => {
    const { PEDOMETER_UPDATE } = RNFitKit.constants;

    const subscriber = RNFitKit.addListener(PEDOMETER_UPDATE, emitter);
    RNFitKit.startPedometerUpdatesFromDate(startTime, { blackListApps });

    const unlisten = () => {
      subscriber.remove();
      RNFitKit.stopPedometerUpdates();
    };

    return unlisten;
  });
}
