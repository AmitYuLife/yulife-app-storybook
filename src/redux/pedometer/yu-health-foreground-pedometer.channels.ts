import {
  YuHealthEvent,
  addListener,
  PedometerUpdateEvent,
  stopForegroundService,
} from "@yu-life/react-native-yu-health";
import { eventChannel } from "redux-saga";

/**
 * Creates an event channel that listens to foreground pedometer updates from YuHealth.
 * This is used during challenge tracking to get real-time step updates.
 */
export function foregroundPedometerChannel() {
  return eventChannel((emitter) => {
    const subscriber = addListener(YuHealthEvent.foregroundPedometerUpdate, (input: unknown) => {
      if (typeof input !== "object" || input === null) {
        return;
      }

      const result = (input as PedometerUpdateEvent).result;
      emitter(result.steps);
    });

    return () => {
      stopForegroundService();
      subscriber.remove();
    };
  });
}
