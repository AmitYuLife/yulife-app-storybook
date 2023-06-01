type CountdownFromSeconds = {
  raw: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  formatted: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

const DEFAULT_COUNTDOWN: CountdownFromSeconds = {
  raw: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  formatted: {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  },
};

export const getCountdownFromSeconds = (secondsDiff: number): CountdownFromSeconds => {
  if (secondsDiff <= 0) {
    return DEFAULT_COUNTDOWN;
  }

  const diff = getRawDiffInUnits(secondsDiff);
  const { days, hours, minutes, seconds } = diff;

  return {
    raw: {
      days,
      hours,
      minutes,
      seconds,
    },
    formatted: {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    },
  };
};

function getRawDiffInUnits(secondsDiff: number) {
  const seconds = Math.max(Math.floor(secondsDiff % 60), 0);
  /**
   * +1 since we're omitting seconds
   */
  const minutes = Math.max(Math.floor((secondsDiff % (60 * 60)) / 60) + 1, 0);

  const hours = Math.max(Math.floor((secondsDiff % (60 * 60 * 24)) / (60 * 60)) + (minutes === 60 ? 1 : 0), 0);
  const days = Math.max(Math.floor(secondsDiff / (60 * 60 * 24)) + (hours === 24 ? 1 : 0), 0);

  return {
    days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds,
  };
}
