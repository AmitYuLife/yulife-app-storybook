import socketServer from "./server";
import { EVENT, ReduxEvent, FitkitSampleQueriesAdd, FitkitAggregatedQueriesAdd } from "./events";
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

export const fitKitAddAggregatedQueries = (payload: FitkitAggregatedQueriesAdd["payload"]) => {
    socketServer.emit({
        name: EVENT.FITKIT_AGGREGATED_QUERIES_ADD,
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


export const sendMindfulnessData = (value: number) => async () => {
    const record = [{
        startTime: moment().add(60, "seconds").toDate().toString(),
        endTime: moment().add(80, "seconds").toDate().toString(),
        value,
        type: "MindfulSession"
    }]
    await fitKitAddSampleQueries(record)
}

export const addCyclingData = (value:number) => async () => {
    const record = [{
        startTime: moment().startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking"
    }]

    await fitKitAddAggregatedQueries(record)
}

export const addStepsHistoricalData = (value:number) => async () => {
    const record = [{
        startTime: moment().subtract(1,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(1,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount"
    }]
    await fitKitAddAggregatedQueries(record)
}

export const addSteps3DaysHistoricalData = (value: number) => async () => {
    const record = [{
        startTime: moment().subtract(2,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(2,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount"
    }, {
        startTime: moment().subtract(3,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(3,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount"
    }, 
    {
        startTime: moment().subtract(4,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(4,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount"
    }]
    await fitKitAddAggregatedQueries(record)
}

export const addCyclingHistoricalData = (value:number) => async () => {
    const record = [{
        startTime: moment().subtract(1,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(1,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking"
    }]
    await fitKitAddAggregatedQueries(record)
}

export const addMindfulnessHistoricalData = (value:number) => async () => {
    const record = [{
        startTime: moment().subtract(1,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(1,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "MindfulSession"
    }]
    await fitKitAddSampleQueries(record)
}

export const addPilatesHistoricalData = (value:number) => async () => {
    const record = [{
        startTime: moment().subtract(1,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(1,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Pilates"
    }]
    await fitKitAddSampleQueries(record)
}