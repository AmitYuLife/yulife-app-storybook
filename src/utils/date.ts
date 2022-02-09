import moment from "moment";
import { padNum } from "@utils";

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_FORMAT_WITH_TZ = "YYYY-MM-DDTHH:mm:ssZ";
export const DATE_FORMAT_WITHOUT_TZ = "YYYY-MM-DDTHH:mm:ss";

type TimeType = "short" | "medium" | "long";

export function addSecondsToChallengeEndDateTime(endDateTime: string, seconds = 10) {
  return moment(endDateTime, DATE_FORMAT_WITHOUT_TZ).add(seconds, "seconds").format(DATE_FORMAT_WITHOUT_TZ);
}

export function getTimeRemaining(nextAvailableAt: string, format?: TimeType) {
  return `${getTime(Math.abs(moment().diff(moment(nextAvailableAt), "seconds")), format)}`;
}

export function getTime(nextAvailable: number, format?: TimeType) {
  const days = Math.floor(nextAvailable / (60 * 60 * 24));
  const hours = Math.floor(nextAvailable / (60 * 60)) % 24;
  const minutes = Math.floor(nextAvailable / 60) % 60;
  const seconds = nextAvailable % 60;

  if (hours < 1 && minutes < 1 && seconds < 1) {
    return null;
  }

  const paddedHours = padNum(hours);
  const paddedMinutes = padNum(minutes);
  const paddedSeconds = padNum(seconds);
  const isShort = format === "short";
  const isMedium = format === "medium";

  if (days < 1 && hours < 1 && minutes < 1) {
    return `${paddedSeconds}s`;
  }

  if (days < 1 && hours < 1) {
    if (isShort) {
      return `${paddedMinutes}m`;
    }

    if (isMedium) {
      return `${paddedMinutes}m ${paddedSeconds}s`;
    }

    return `${paddedMinutes}:${paddedSeconds}`;
  }

  if (days < 1) {
    if (isShort) {
      return `${paddedHours}h ${paddedMinutes}m`;
    }

    if (isMedium) {
      return `${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`;
    }

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  const daysOrDay = days > 1 ? "days" : "day";

  if (isShort) {
    return `${days}d ${paddedHours}h ${paddedMinutes}m`;
  }

  if (isMedium) {
    return `${days}d ${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`;
  }

  return `${days} ${daysOrDay} and ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
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
export const minifiedFromNow = (time: moment.Moment): string => {
  const days = time.diff(moment(), "days");
  return days
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
};
