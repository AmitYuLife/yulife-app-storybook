import mock from "@services/socket";
import { eventChannel } from "redux-saga";

export function stepsChannel(startTime: string) {
  console.log(`Mock pedometer channel started for ${startTime}`); // tslint:disable-line
  return eventChannel((emitter) => {
    return mock.onPedometerEvent(emitter);
  });
}
