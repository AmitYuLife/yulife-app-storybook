import mock from "@services/socket";
import { eventChannel } from "redux-saga";

export function detoxReduxChannel() {
  console.log(`Detox redux channel started`); // tslint:disable-line
  return eventChannel((emitter) => {
    return mock.onReduxEvent(emitter);
  });
}
