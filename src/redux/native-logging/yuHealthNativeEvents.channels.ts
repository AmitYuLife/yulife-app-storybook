import { eventChannel } from "redux-saga";
import { YuHealthEvent, addListener } from "@yu-life/react-native-yu-health";

export function yuHealthNativeEventsChannel() {
  return eventChannel((emitter) => {
    const subscriber = addListener(YuHealthEvent.logEvent, emitter);

    const unlisten = () => {
      subscriber.remove();
    };

    return unlisten;
  });
}
