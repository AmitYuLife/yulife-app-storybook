import socketServer from "./server";
import { EVENT, ReduxEvent, SampleQueriesAdd, AggregateQueriesAdd } from "./events";
import moment from "moment";
import { launchApp, wait } from "@navigation";

// TODO: Purge this, detox doesn't start when it's imported directly from the library
export enum HealthDataType {
  steps = "STEP_COUNT",
  mindfulMinutes = "MINDFUL_MINUTES",
  heartRate = "HEART_RATE",
  cyclingDistance = "CYCLING_DISTANCE",
  calories = "CALORIES",
  workoutMinutes = "WORKOUT_MINUTES",
  wheelchairPushes = "WHEELCHAIR_PUSHES",
}

export const authoriseFitkit =
  (authorised = true) =>
  async () => {
    await socketServer.emit({
      name: EVENT.FITKIT_AUTHORISED,
      payload: authorised,
    });
  };

export const loginWithCredentials =
  (email: string, password: string, region: "UK" | "US" | "JP" | "SA" = "UK") =>
  async () => {
    socketServer.emit({
      name: EVENT.REDUX_EVENT,
      payload: { type: "DETOX_LOGIN_WITH_CREDS", payload: { email, password, region } },
    });
  };

export const sendSteps =
  (amount = 20, waitTime?: number) =>
  async (): Promise<void> => {
    socketServer.emit({
      name: EVENT.PEDOMETER_EVENT,
      payload: {
        endTime: moment().toISOString(),
        startTime: moment().subtract(30, "minutes").toISOString(),
        steps: amount,
      },
    });

    if (waitTime > 0) {
      await wait(waitTime)();
    }
  };

export const startWalkingSteps =
  (amount = 1000, increment = 10, interval = 5000) =>
  async (): Promise<number> => {
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
};

export const addSampleQueries = (payload: SampleQueriesAdd["payload"]) => {
  socketServer.emit({
    name: EVENT.SAMPLE_QUERIES_ADD,
    payload,
  });
};

export const addAggregateQueries = (payload: AggregateQueriesAdd["payload"]) => {
  socketServer.emit({
    name: EVENT.AGGREGATE_QUERIES_ADD,
    payload,
  });
};

/**
 * Fires a call-back once at the point that the app bootstraps, before the root view is rendered
 * @param cb
 */
export const onAppBootstrap = (cb: VoidFunction) => {
  const callback = () => {
    cb();
    socketServer.io.of("/").removeListener("connection", callback);
  };
  socketServer.io.on("connection", callback);
};

export const sendMindfulnessData =
  (value: number, waitTime = 0) =>
  async () => {
    const record = [
      {
        startTime: moment().add(60, "seconds").toDate(),
        endTime: moment().add(80, "seconds").toDate(),
        value,
        dataType: HealthDataType.mindfulMinutes,
        bundleIdentifier: "com.yu-life.app",
        isUserEntered: false,
      },
    ];

    await addSampleQueries(record);
    await wait(waitTime)();
  };

export const addCyclingData = (value: number) => async () => {
  const record = [
    {
      startTime: moment().startOf("day").add(10, "minutes").toDate(),
      endTime: moment().endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.cyclingDistance,
    },
  ];

  await addAggregateQueries(record);
};

export const addStepsHistoricalData =
  (value: number, dayToSubstract = 1) =>
  async () => {
    const record = [
      {
        startTime: moment()
          .subtract(dayToSubstract, "day")
          .startOf("day")
          .add(10, "minutes")
          .toDate(),
        endTime: moment()
          .subtract(dayToSubstract, "day")
          .endOf("day")
          .subtract(10, "minutes")
          .toDate(),
        value,
        dataType: HealthDataType.steps,
      },
    ];

    await addAggregateQueries(record);
  };

export const addSteps3DaysHistoricalData = (value: number) => async () => {
  const record = [
    {
      startTime: moment().subtract(2, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(2, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.steps,
    },
    {
      startTime: moment().subtract(3, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(3, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.steps,
    },
    {
      startTime: moment().subtract(4, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(4, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.steps,
    },
  ];

  await addAggregateQueries(record);
};

export const addCyclingHistoricalData =
  (value: number, dayToSubstract = 1) =>
  async () => {
    const record = [
      {
        startTime: moment()
          .subtract(dayToSubstract, "day")
          .startOf("day")
          .add(10, "minutes")
          .toDate(),
        endTime: moment()
          .subtract(dayToSubstract, "day")
          .endOf("day")
          .subtract(10, "minutes")
          .toDate(),
        value,
        dataType: HealthDataType.cyclingDistance,
      },
    ];

    await addAggregateQueries(record);
  };

export const addCycling3DaysHistoricalData = (value: number) => async () => {
  const record = [
    {
      startTime: moment().subtract(2, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(2, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.cyclingDistance,
    },
    {
      startTime: moment().subtract(3, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(3, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.cyclingDistance,
    },
    {
      startTime: moment().subtract(4, "day").startOf("day").add(10, "minutes").toDate(),
      endTime: moment().subtract(4, "day").endOf("day").subtract(10, "minutes").toDate(),
      value,
      dataType: HealthDataType.cyclingDistance,
    },
  ];

  await addAggregateQueries(record);
};

export const addMindfulnessHistoricalData =
  (value: number, dayToSubstract = 1) =>
  async () => {
    const record = [
      {
        startTime: moment()
          .subtract(dayToSubstract, "day")
          .startOf("day")
          .add(10, "minutes")
          .toDate(),
        endTime: moment()
          .subtract(dayToSubstract, "day")
          .endOf("day")
          .subtract(10, "minutes")
          .toDate(),
        value,
        dataType: HealthDataType.mindfulMinutes,
        bundleIdentifier: "com.yu-life.app",
        isUserEntered: false,
      },
    ];

    await addAggregateQueries(record);
  };

export const addSteps20DaysHistoricalData = (steps: number) => async () => {
  const records = [];
  const endOfPrevMonth = moment().subtract(1, "month").endOf("month");

  for (let i = 0; i < 20; i++) {
    const day = endOfPrevMonth.clone().subtract(i, "day");

    const startTime = day.clone().startOf("day").add(10, "minutes").toDate();
    const endTime = day.clone().endOf("day").subtract(10, "minutes").toDate();

    records.push({
      startTime,
      endTime,
      value: steps + (i + 1),
      dataType: HealthDataType.steps,
    });
  }
  await addAggregateQueries(records);
};

export const addCycling20DaysHistoricalData = (value: number) => async () => {
  const record = [];
  let i = 1;

  while (i <= 20) {
    const data = {
      startTime: moment()
        .startOf("month")
        .subtract(i, "day")
        .startOf("day")
        .add(10, "minutes")
        .toDate(),
      endTime: moment()
        .startOf("month")
        .subtract(i, "day")
        .endOf("day")
        .subtract(10, "minutes")
        .toDate(),
      value: value + i * 100,
      dataType: HealthDataType.cyclingDistance,
    };
    record.push(data);
    i++;
  }

  await addAggregateQueries(record);
};

export const addMins20DaysHistoricalData =
  (firstDayInMinutes = 0) =>
  async () => {
    const record = [];
    const totalDays = 20;

    for (let i = 1; i <= totalDays; i++) {
      const startTime = moment()
        .startOf("month")
        .subtract(i, "day")
        .startOf("day")
        .add(10, "minutes")
        .toDate()
        .toString();
      const endTime = moment()
        .startOf("month")
        .subtract(i, "day")
        .endOf("day")
        .subtract(10, "minutes")
        .toDate()
        .toString();

      const data = {
        startTime,
        endTime,
        value: (firstDayInMinutes + i) * 60,
        dataType: HealthDataType.mindfulMinutes,
      };

      record.push(data);
    }

    await addAggregateQueries(record);
  };

export const addStepsHistoricalDataMulitple = (value: number, days: number) => async () => {
  const record = [];
  for (let i = 1; i < days + 1; i++) {
    const data = {
      startTime: moment().subtract(i, "day").startOf("day").add(10, "minutes").toDate().toString(),
      endTime: moment().subtract(i, "day").endOf("day").subtract(10, "minutes").toDate().toString(),
      value,
      dataType: HealthDataType.steps,
    };
    record.push(data);
  }

  await addAggregateQueries(record);
};

const SUDOKU_TIME_FORMAT_LONG = "h[h] m[m] s[s]";
const SUDOKU_TIME_FORMAT = "m[m] s[s]";

export const getDuration = (seconds: number) => {
  const formatString = seconds > 60 * 60 ? SUDOKU_TIME_FORMAT_LONG : SUDOKU_TIME_FORMAT;
  return moment.utc(seconds * 1000).format(formatString);
};

export const closeAndReopenApp = async () => {
  await device.sendToHome();
  await launchApp({ newInstance: false });
};

export const quitAndReopenApp = async () => {
  await device.terminateApp();
  await launchApp({ newInstance: false });
};
