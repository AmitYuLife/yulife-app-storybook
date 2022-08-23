import RNFitKit from "@services/fitkit/fitkit.service";
import { eventChannel } from "redux-saga";

export function nativeEventsChannel() {
  return eventChannel((emitter) => {
    const { NATIVE_EVENT } = RNFitKit.constants;

    const subscriber = RNFitKit.addListener(NATIVE_EVENT, emitter);

    const unlisten = () => {
      subscriber.remove();
    };

    return unlisten;
  });
}
