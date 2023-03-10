export const getCountdownFromSeconds = (secondsDiff: number) => {
  if (!secondsDiff) {
    return {};
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
  const days = Math.max(Math.floor(secondsDiff / (60 * 60 * 24)) + hours === 24 ? 1 : 0, 0);

  return {
    days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds,
  };
}
