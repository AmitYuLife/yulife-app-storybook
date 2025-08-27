import { io, Socket } from "socket.io-client";
import {
  EventWithPayload,
  EVENT,
  FitkitAuthorised,
  PedometerEvent,
  ReduxEvent,
  SampleQueriesAdd,
} from "./events";

type Callback<T extends EventWithPayload> = (payload: T["payload"]) => void;

// used by the app to communicate with detox layer
export default class SocketClient {
  private socket: Socket;

  public connect(url: string) {
    this.socket = io(url);
    this.socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
    this.socket.on("connect", () => {
      console.log(`connected to socket server`);
    });
    this.socket.onAny((event, payload) => console.log(`Received event: ${event}`, payload));
    this.socket.emit("CONNECTED");
  }

  // TODO: purge
  public emit(event: string, payload: any) {
    this.socket.emit(event, payload);
  }

  public emitTranslationKeysCleared() {
    this.socket.emit("TRANSLATION_KEYS_CLEARED");
  }

  public emitTranslationKeyUsed(key: string) {
    this.socket.emit("TRANSLATION_KEY_USED", key);
  }

  public onFitkitAuthorised(cb: Callback<FitkitAuthorised>) {
    this.socket.on(EVENT.FITKIT_AUTHORISED, (args) => {
      cb(args);
    });
    return () => this.socket.off(EVENT.FITKIT_AUTHORISED, cb);
  }

  public onPedometerEvent(cb: Callback<PedometerEvent>) {
    this.socket.on(EVENT.PEDOMETER_EVENT, cb);
    return () => this.socket.off(EVENT.PEDOMETER_EVENT, cb);
  }

  public onReduxEvent(cb: Callback<ReduxEvent>) {
    this.socket.on(EVENT.REDUX_EVENT, cb);
    return () => this.socket.off(EVENT.REDUX_EVENT);
  }

  public onSampleQueriesAdded(cb: Callback<SampleQueriesAdd>) {
    this.socket.on(EVENT.SAMPLE_QUERIES_ADD, cb);
    return () => this.socket.off(EVENT.SAMPLE_QUERIES_ADD);
  }

  public onAggregatedQueriesAdded(cb: Callback<SampleQueriesAdd>) {
    this.socket.on(EVENT.AGGREGATE_QUERIES_ADD, cb);
    return () => this.socket.off(EVENT.AGGREGATE_QUERIES_ADD);
  }

  public onNativeEvent(cb: Callback<PedometerEvent>) {
    this.socket.on(EVENT.NATIVE_EVENT, cb);
    return () => this.socket.off(EVENT.NATIVE_EVENT, cb);
  }

  public unsubscribe(event: EVENT, cb: any) {
    this.socket.off(event, cb);
  }
}
