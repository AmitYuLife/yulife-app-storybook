import { eventChannel } from "redux-saga";
import mock from "@services/socket";

export function nativeEventsChannel() {
  console.log(`Mock native event channel started`); // tslint:disable-line
  return eventChannel((emitter) => {
    return mock.onNativeEvent(emitter);
  });
}
