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
  const days = Math.floor(secondsDiff / (60 * 60 * 24));
  const hours = Math.floor((secondsDiff % (60 * 60 * 24)) / (60 * 60));
  /**
   * +1 since we're omitting seconds
   */
  const minutes = Math.floor((secondsDiff % (60 * 60)) / 60) + 1;
  const seconds = Math.floor(secondsDiff % 60);

  return { days, hours, minutes, seconds };
}
