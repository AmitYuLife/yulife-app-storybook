import {
  YuHealthEvent,
  addListener,
  startPedometer,
  stopPedometer,
  PedometerUpdateEvent,
} from "@yu-life/react-native-yu-health";
import { DATE_FORMAT } from "@utils";
import moment from "moment";
import { eventChannel } from "redux-saga";

export const NEXT_DAY_STARTED = "next day started";
export function stepsChannel(startTime: string, blacklistApps: string[], disableUserEntries = true) {
  return eventChannel((emitter) => {
    let startDate = moment().format(DATE_FORMAT);
    let pedometerShouldRestart = false;

    const subscriber = addListener(YuHealthEvent.pedometerUpdate, (input: unknown) => {
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

      emitter((input as PedometerUpdateEvent).result);
    });

    startPedometer({
      startTime: moment(startTime).toDate(),
      endTime: moment(startTime).endOf("day").toDate(),
      queryOptions: { blacklistApps, disableUserEntries },
    });

    const unlisten = () => {
      subscriber.remove();
      stopPedometer();
    };

    return unlisten;
  });
}
