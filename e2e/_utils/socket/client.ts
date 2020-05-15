import * as io from "socket.io-client";
import { EventWithPayload, EVENT, FitkitAuthorised, PedometerEvent, ReduxEvent } from "./events";

type Callback<T extends EventWithPayload> = (payload: T["payload"]) => void;

// used by the app to communicate with detox layer
export default class SocketClient {
    private socket: ReturnType<typeof io.connect>;

    public connect(url: string) {
        this.socket = io.connect(url);
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

    public unsubscribe(event: EVENT, cb: any) {
        this.socket.off(event, cb);
    }

}
