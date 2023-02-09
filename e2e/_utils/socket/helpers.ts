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

export const startWalkingSteps = (amount = 1000, increment = 10, interval = 5000) => async (): Promise<NodeJS.Timer> => {
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


export const sendMindfulnessData = (value: number, waitTime = 0) => async () => {
    const record = [{
        startTime: moment().add(60, "seconds").toDate().toString(),
        endTime: moment().add(80, "seconds").toDate().toString(),
        value,
        type: "MindfulSession"
    }]
    await fitKitAddSampleQueries(record)
    await wait(waitTime)()
}


export const addCyclingData = (value:number) => async () => {
    const record = [{
        startTime: moment().startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking",
    }]

    await fitKitAddAggregatedQueries(record)
}

export const addStepsHistoricalData = (value:number, dayToSubstract = 1) => async () => {
    const record = [{
        startTime: moment().subtract(dayToSubstract,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(dayToSubstract, "day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount",
    }]
    await fitKitAddAggregatedQueries(record)
}


export const addSteps3DaysHistoricalData = (value: number) => async () => {
    const record = [{
        startTime: moment().subtract(2,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(2,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "StepCount",
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

export const addCyclingHistoricalData = (value:number, dayToSubstract = 1) => async () => {
    const record = [{
        startTime: moment().subtract(dayToSubstract,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(dayToSubstract,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking"
    }]
    await fitKitAddAggregatedQueries(record)
}

export const addCycling3DaysHistoricalData = (value: number) => async () => {
    const record = [{
        startTime: moment().subtract(2,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(2,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking",
    }, {
        startTime: moment().subtract(3,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(3,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking",
    }, 
    {
        startTime: moment().subtract(4,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(4,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
        value,
        type: "Biking",
    }]
    await fitKitAddAggregatedQueries(record)
}


export const addMindfulnessHistoricalData = (value:number, dayToSubstract = 1) => async () => {
    const record = [{
        startTime: moment().subtract(dayToSubstract,"day").startOf("day").add(10,"minutes").toDate().toString(),
        endTime: moment().subtract(dayToSubstract,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
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

export const addSteps32DaysHistoricalData = (value: number) => async () => {
    const record = [] 
    let i = 1;
    while (i <= 32) {
        let steps = value + i
        const data = {
            startTime: moment().subtract(i,"day").startOf("day").add(10,"minutes").toDate().toString(),
            endTime: moment().subtract(i,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
            value: steps,
            type: "StepCount"
        }
        record.push(data)
        i++
    }
    await fitKitAddAggregatedQueries(record)
}   

export const addCycling32DaysHistoricalData = (value: number) => async () => {
    const record = [] 
    let i = 1;
    while (i <= 32) {
        let steps = value + (i * 100)
        const data = {
            startTime: moment().subtract(i,"day").startOf("day").add(10,"minutes").toDate().toString(),
            endTime: moment().subtract(i,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
            value: steps,
            type: "Biking"
        }
        record.push(data)
        i++
    }
    await fitKitAddAggregatedQueries(record)
}   

export const addMins32DaysHistoricalData = (value: number) => async () => {
    const record = [] 
    let i = 1;
    while (i <= 32) {
        let steps = value + i
        const data = {
            startTime: moment().subtract(i,"day").startOf("day").add(10,"minutes").toDate().toString(),
            endTime: moment().subtract(i,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
            value: steps,
            type: "MindfulSession"
        }
        record.push(data)
        i++
    }
    await fitKitAddSampleQueries(record)
}

export const addStepsHistoricalDataMulitple = (value: number, days: number) => async () => {
    const record = []
    for (let i = 1; i < days + 1; i++) {
        const data = {
            startTime: moment().subtract(i,"day").startOf("day").add(10,"minutes").toDate().toString(),
            endTime: moment().subtract(i,"day").endOf("day").subtract(10,"minutes").toDate().toString(),
            value,
            type: "StepCount",
        }
        record.push(data)
    }
    await fitKitAddAggregatedQueries(record)
}