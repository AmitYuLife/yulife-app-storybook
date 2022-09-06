import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";
import { minifiedFromNow } from "@utils";

const REFRESH_RATE_ONE_MINUTE = 1000 * 60;
const REFRESH_RATE_ONE_SECOND = 1000;

export const useRemainingTime = (endDateTime: string) => {
  const [time, setTime] = useState<string>(null);
  const [timeLongFormat, setTimeLongFormat] = useState<string>(null);
  const [refreshRate, setRefreshRate] = useState(REFRESH_RATE_ONE_MINUTE);

  const handleTimeDisplay = useCallback(() => {
    if (moment().isSameOrAfter(endDateTime)) {
      setTime(null);
      return;
    }

    const secondsRemaining = moment(endDateTime).diff(moment(), "seconds");

    setRefreshRate(secondsRemaining <= 120 ? REFRESH_RATE_ONE_SECOND : REFRESH_RATE_ONE_MINUTE);
    if (secondsRemaining < 60) {
      setTime(`${secondsRemaining}s`);
      setTimeLongFormat(`${secondsRemaining} seconds`);
    } else {
      const { shortFormat, longFormat } = minifiedFromNow(moment(endDateTime));
      setTime(shortFormat);
      setTimeLongFormat(longFormat);
    }
  }, [endDateTime]);

  useEffect(handleTimeDisplay, [endDateTime, handleTimeDisplay]);
  useInterval(handleTimeDisplay, !DETOX_ENABLED && time ? refreshRate : null);

  return { shortFormat: time, longFormat: timeLongFormat };
};
