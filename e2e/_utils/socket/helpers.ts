import socketServer from "./server";
import { EVENT, ReduxEvent, FitkitSampleQueriesAdd } from "./events";
import moment from 'moment';
import { wait } from "@navigation";

export const authoriseFitkit = (authorised = true) => async () => {
    await socketServer.emit({
        name: EVENT.FITKIT_AUTHORISED,
        payload: authorised,
    });
}

export const sendSteps = (amount = 20, waitTime?: number) => async (): Promise<void> => {
    socketServer.emit({
        name: EVENT.PEDOMETER_EVENT,
        payload: {
            endTime: moment().toISOString(),
            startTime: moment().subtract(30, "minutes").toISOString(),
            steps: amount
        }
    });

    if (waitTime > 0) {
        await wait(waitTime)()
    }
};

export const startWalkingSteps = (amount = 1000, increment = 10, interval = 5000) => async (): Promise<number> => {
    return setInterval(() => {
        sendSteps(amount)();
        amount = amount + increment;
    }, interval);
};

export const sendReduxEvent = (payload: ReduxEvent["payload"]) => {
    socketServer.emit({
        name: EVENT.REDUX_EVENT,
        payload,
    });
}

export const fitKitAddSampleQueries = (payload: FitkitSampleQueriesAdd["payload"]) => {
    socketServer.emit({
        name: EVENT.FITKIT_SAMPLE_QUERIES_ADD,
        payload,
    });
}


/**
 * Fires a call-back once at the point that the app bootstraps, before the root view is rendered
 * @param cb 
 */
export const onAppBootstrap = (cb: VoidFunction) => {
    const callback = () => {
        cb();
        socketServer.io.of("/").removeListener("connection", callback);
    }
    socketServer.io.on("connection", callback);
}

