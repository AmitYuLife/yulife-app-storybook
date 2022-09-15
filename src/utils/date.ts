import moment from "moment";
import { padNum } from "@utils";
import { t } from "@locale";

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_FORMAT_WITH_TZ = "YYYY-MM-DDTHH:mm:ssZ";
export const DATE_FORMAT_WITHOUT_TZ = "YYYY-MM-DDTHH:mm:ss";

type TimeType = "short" | "medium" | "long";

export function addSecondsToChallengeEndDateTime(endDateTime: string, seconds = 10) {
  return moment(endDateTime, DATE_FORMAT_WITHOUT_TZ).add(seconds, "seconds").format(DATE_FORMAT_WITHOUT_TZ);
}

export function getTimeRemaining(nextAvailableAt: string, format?: TimeType) {
  return getTime(Math.abs(moment().diff(moment(nextAvailableAt), "seconds")), format);
}

export function getTime(nextAvailable: number, format?: TimeType) {
  const days = Math.floor(nextAvailable / (60 * 60 * 24));
  const hours = Math.floor(nextAvailable / (60 * 60)) % 24;
  const minutes = Math.floor(nextAvailable / 60) % 60;
  const seconds = nextAvailable % 60;

  const daysOrDay = days > 1 ? t("timeUnits.days") : t("timeUnits.day");
  const hoursOrHour = hours > 1 ? t("timeUnits.hours") : t("timeUnits.hour");
  const minutesOrMinute = minutes > 1 ? t("timeUnits.minutes") : t("timeUnits.minute");
  const secondsOrSecond = seconds > 1 ? t("timeUnits.seconds") : t("timeUnits.second");

  if (hours < 1 && minutes < 1 && seconds < 1) {
    return { time: "0s", accessibility: `0 ${t("timeUnits.seconds")}` };
  }

  const paddedHours = padNum(hours);
  const paddedMinutes = padNum(minutes);
  const paddedSeconds = padNum(seconds);
  const isShort = format === "short";
  const isMedium = format === "medium";

  if (days < 1 && hours < 1 && minutes < 1) {
    return { time: `${seconds}s`, accessibility: `${seconds} ${secondsOrSecond}` };
  }

  if (days < 1 && hours < 1) {
    const accessibility = `${paddedMinutes} ${minutesOrMinute} and ${paddedSeconds} ${secondsOrSecond}`;
    if (isShort) {
      return { time: `${minutes}m`, accessibility };
    }

    if (isMedium) {
      return { time: `${paddedMinutes}m ${paddedSeconds}s`, accessibility };
    }

    return { time: `${paddedMinutes}:${paddedSeconds}`, accessibility };
  }

  if (days < 1) {
    const accessibility = `${paddedHours} ${hoursOrHour} ${paddedMinutes} ${minutesOrMinute} and ${paddedSeconds} ${secondsOrSecond}`;
    if (isShort) {
      return { time: `${paddedHours}h ${paddedMinutes}m`, accessibility };
    }

    if (isMedium) {
      return { time: `${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`, accessibility };
    }

    return { time: `${paddedHours}:${paddedMinutes}:${paddedSeconds}`, accessibility };
  }

  const accessibility = `${days} ${daysOrDay} ${paddedHours} ${hoursOrHour} ${paddedMinutes} ${minutesOrMinute} and ${paddedSeconds} ${secondsOrSecond}`;
  if (isShort) {
    return { time: `${days}d ${paddedHours}h ${paddedMinutes}m`, accessibility };
  }

  if (isMedium) {
    return { time: `${days}d ${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`, accessibility };
  }

  return { time: `${days} ${daysOrDay} and ${paddedHours}:${paddedMinutes}:${paddedSeconds}`, accessibility };
}

export function displaySecondsAsMinutes(amount: number): { minutes: number; seconds: number } {
  const minutes = Math.floor(amount / 60);
  const seconds = amount % 60;

  return {
    minutes,
    seconds,
  };
}

export function getStartAndEndDateTimesWithTimezone(startDateTime: string, endDateTime: string) {
  // NOTE: Some of the moment methods work in React Native and others don't.
  // ¯\_(ツ)_/¯ ¯\_(ツ)_/¯ ¯\_(ツ)_/¯
  // .isUtcOffset from moment was failing on some XR devices
  // The returned result might still not come on some devices with the timezone
  // That's why we double check on the fitkit

  // Check if the startDateTime has a timezone and add it to the endDateTime if it doesn't have it
  const hasTimezone = startDateTime.length === 25;

  if (hasTimezone) {
    const timezone = startDateTime.slice(-6);

    return {
      start: startDateTime,
      end: endDateTime.length === 25 ? endDateTime : `${endDateTime}${timezone}`,
    };
  }

  return {
    start: moment(startDateTime, DATE_FORMAT_WITHOUT_TZ).format(DATE_FORMAT_WITH_TZ),
    end: moment(endDateTime, DATE_FORMAT_WITHOUT_TZ).format(DATE_FORMAT_WITH_TZ),
  };
}

// Re-formats the result of moment.fromNow() so that "minute" becomes "m" and "hour" becomes "h"
export const minifiedFromNow = (time: moment.Moment): { shortFormat: string; longFormat: string } => {
  const days = time.diff(moment(), "days");
  const shortFormat = days
    ? `${days}d`
    : time
        .fromNow()
        .replace(/an hour/i, "1h")
        .replace(/ hours/i, "h")
        .replace(/a minute/i, "1m")
        .replace(/ minutes/i, "m")
        .replace(/ a few seconds/, "<1m")
        .replace(/in/i, "")
        .replace(/a day/i, "1d");

  const longFormat = days
    ? `${days} days`
    : time
        .fromNow()
        .replace(/an hour/i, "1 hour")
        .replace(/ hours/i, "hours")
        .replace(/a minute/i, "1 minute")
        .replace(/ minutes/i, "minutes")
        .replace(/ a few seconds/, "less then a minute")
        .replace(/in/i, "")
        .replace(/a day/i, "1 day");

  return { shortFormat, longFormat };
};

export const getQuestScreenTimer = (nextAvailable: number) => {
  const hours = Math.floor(nextAvailable / (60 * 60)) % 24;
  const minutes = Math.floor(nextAvailable / 60) % 60;
  const seconds = nextAvailable % 60;

  if (hours < 1 && minutes < 1 && seconds < 1) {
    return null;
  }

  const paddedHours = padNum(hours);
  const paddedMinutes = padNum(minutes);
  const paddedSeconds = padNum(seconds);

  if (hours < 1 && minutes < 1) {
    return `:${paddedSeconds}`;
  }

  if (hours < 1) {
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};
