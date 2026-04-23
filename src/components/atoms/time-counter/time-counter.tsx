import { memo, useCallback, useEffect, useState } from "react";

import moment from "moment";
import { getTimeUntil } from "@utils";
import { DETOX_ENABLED } from "@services/socket";

interface ITimeCounterProps {
  time?: string;
  getText?: (time: string) => string;
}

const TIMEOUT = DETOX_ENABLED ? 2000 : 1000;

const TimeCounter = ({ time = "", getText = defaultGetTime }: ITimeCounterProps) => {
  const [timeString, setTimeString] = useState<string>(getText(time));
  const updateTime = useCallback(() => {
    setTimeString(getText(time));
  }, [getText, time]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, TIMEOUT);

    return () => clearInterval(interval);
  }, [updateTime]);

  return <>{timeString}</>;
};

const defaultGetTime = (date: string) => {
  const diff = moment.parseZone(date).diff(moment(), "seconds");
  if (diff < 0) {
    return "00:00";
  }

  return getTimeUntil(diff);
};

export default memo(TimeCounter);
