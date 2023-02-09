import { io, Socket } from "socket.io-client";
import {
  EventWithPayload,
  EVENT,
  FitkitAuthorised,
  PedometerEvent,
  ReduxEvent,
  FitkitSampleQueriesAdd,
} from "./events";

type Callback<T extends EventWithPayload> = (payload: T["payload"]) => void;

// used by the app to communicate with detox layer
export default class SocketClient {
  private socket: Socket;

  public connect(url: string) {
    this.socket = io(url);
    this.socket.emit("CONNECTED");
  }

  public onFitkitAuthorised(cb: Callback<FitkitAuthorised>) {
    this.socket.on(EVENT.FITKIT_AUTHORISED, cb);
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

  public onSampleQueriesAdded(cb: Callback<FitkitSampleQueriesAdd>) {
    this.socket.on(EVENT.FITKIT_SAMPLE_QUERIES_ADD, cb);
    return () => this.socket.off(EVENT.FITKIT_SAMPLE_QUERIES_ADD);
  }

  public onAggregatedQueriesAdded(cb: Callback<FitkitSampleQueriesAdd>) {
    this.socket.on(EVENT.FITKIT_AGGREGATED_QUERIES_ADD, cb);
    return () => this.socket.off(EVENT.FITKIT_AGGREGATED_QUERIES_ADD);
  }

  public onNativeEvent(cb: Callback<PedometerEvent>) {
    this.socket.on(EVENT.NATIVE_EVENT, cb);
    return () => this.socket.off(EVENT.NATIVE_EVENT, cb);
  }

  public unsubscribe(event: EVENT, cb: any) {
    this.socket.off(event, cb);
  }
}
