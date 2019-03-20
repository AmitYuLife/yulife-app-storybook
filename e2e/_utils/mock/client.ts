import * as io from "socket.io-client";
import {
    EVENT,
    IConnectionInfoChanged,
    IEventWithPayload,
    IFitkitAuthorised,
    ILocationChanged,
    IPedometerEvent,
    IReduxEvent
} from "./events";

type Callback<T extends IEventWithPayload> = (payload: T["payload"]) => void;

export default class SocketClient {
    private socket: ReturnType<typeof io.connect>;

    public connect(url: string) {
        this.socket = io.connect(url, { transports: ["websocket"], forceNew: true });
        this.socket = io.connect(url);
        this.socket.on("connect", () => {
            console.log("Connected?", this.socket); // tslint:disable-line
        });
        this.socket.on("connect_error", () => {
            console.log("Connect error", this.socket); // tslint:disable-line
        });
        this.socket.on("connect_timeout", () => {
            console.log("Connect timeout", this.socket); // tslint:disable-line
        });
        // this.socket.on("TEST", (payload: string) => console.log("TEST", payload));
        // this.socket.on(EVENT.REDUX_EVENT, (payload: string) => console.log("REDUX EVENT", payload));
    }

    public onFitkitAuthorised(cb: Callback<IFitkitAuthorised>) {
        this.socket.on(EVENT.FITKIT_AUTHORISED, cb);
        return () => this.socket.off(EVENT.FITKIT_AUTHORISED, cb);
    }

    public onLocationChanged(cb: Callback<ILocationChanged>) {
        this.socket.on(EVENT.LOCATION_CHANGED, cb);
        return () => this.socket.off(EVENT.LOCATION_CHANGED, cb);
    }

    public onConnectionInfoChanged(cb: Callback<IConnectionInfoChanged>) {
        this.socket.on(EVENT.CONNECTION_INFO_CHANGED, cb);
        return () => this.socket.off(EVENT.CONNECTION_INFO_CHANGED, cb);
    }

    public onPedometerEvent(cb: Callback<IPedometerEvent>) {
        this.socket.on(EVENT.PEDOMETER_EVENT, cb);
        return () => this.socket.off(EVENT.PEDOMETER_EVENT, cb);
    }

    public onReduxEvent(cb: Callback<IReduxEvent>) {
        this.socket.on(EVENT.REDUX_EVENT, cb);
        return () => this.socket.off(EVENT.REDUX_EVENT);
    }

    public unsubscribe(event: EVENT, cb: any) {
        this.socket.off(event, cb);
    }
}
