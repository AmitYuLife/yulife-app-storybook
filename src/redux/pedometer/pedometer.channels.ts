import RNFitKit from "@services/fitkit/fitkit.service";
import { DATE_FORMAT } from "@utils";
import moment from "moment";
import { eventChannel } from "redux-saga";

export const NEXT_DAY_STARTED = "next day started";
export function stepsChannel(startTime: string, blackListApps: string[], canFallbackToStepDetectorSensor: boolean) {
  return eventChannel((emitter) => {
    const { PEDOMETER_UPDATE } = RNFitKit.constants;
    let startDate = moment().format(DATE_FORMAT);
    let pedometerShouldRestart = false;

    const subscriber = RNFitKit.addListener(PEDOMETER_UPDATE, (input: unknown) => {
      // if next day started no more input should be emitted,
      // there was use cases when multiple inputs was return by Fitkit at the same time
      if (pedometerShouldRestart) {
        return;
      }

      const now = moment().format(DATE_FORMAT);
      if (typeof input === "object" && startDate !== now) {
        startDate = now;
        emitter(NEXT_DAY_STARTED);
        pedometerShouldRestart = true;
        return;
      }

      emitter(input);
    });

    RNFitKit.startPedometerUpdatesFromDate(startTime, { blackListApps, canFallbackToStepDetectorSensor });

    const unlisten = () => {
      subscriber.remove();
      RNFitKit.stopPedometerUpdates();
    };

    return unlisten;
  });
}
