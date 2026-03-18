import { NativeEventEmitter, NativeModule, EmitterSubscription } from "react-native";
import { YuHealthEvent, YuHealthEventData } from "./interface/events.interface";
import { YuHealthModule } from "./YuHealthModule";

const eventEmitter = new NativeEventEmitter(YuHealthModule as unknown as NativeModule);

export const addListener = <Event extends YuHealthEvent>(
  event: Event,
  callback: (data: YuHealthEventData[Event]) => void
): EmitterSubscription => {
  return eventEmitter.addListener(event, callback);
};
