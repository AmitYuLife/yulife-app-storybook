import moment, { parseZone } from "moment";
import { padNum } from "@utils";
import { t } from "@locale";

export const DATE_FORMAT_MONTH = "YYYY-MM";
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

  const daysOrDay = days > 1 ? t("time_units.days") : t("time_units.day");
  const hoursOrHour = hours > 1 ? t("time_units.hours") : t("time_units.hour");
  const minutesOrMinute = minutes > 1 ? t("time_units.minutes") : t("time_units.minute");
  const secondsOrSecond = seconds > 1 ? t("time_units.seconds") : t("time_units.second");

  if (hours < 1 && minutes < 1 && seconds < 1) {
    return { time: `0${t("time_units.short_seconds")}`, accessibility: `0 ${t("time_units.seconds")}` };
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
      return { time: `${minutes}${t("time_units.short_minutes")}`, accessibility };
    }

    if (isMedium) {
      return {
        time: `${paddedMinutes}${t("time_units.short_minutes")} ${paddedSeconds}${t("time_units.short_seconds")}`,
        accessibility,
      };
    }

    return { time: `${paddedMinutes}:${paddedSeconds}`, accessibility };
  }

  if (days < 1) {
    const accessibility = `${paddedHours} ${hoursOrHour} ${paddedMinutes} ${minutesOrMinute} and ${paddedSeconds} ${secondsOrSecond}`;
    if (isShort) {
      return {
        time: `${paddedHours}${t("time_units.short_hours")} ${paddedMinutes}${t("time_units.short_minutes")}`,
        accessibility,
      };
    }

    if (isMedium) {
      return {
        time: `${paddedHours}${t("time_units.short_hours")} ${paddedMinutes}${t(
          "time_units.short_minutes"
        )} ${paddedSeconds}${t("time_units.short_seconds")}`,
        accessibility,
      };
    }

    return { time: `${paddedHours}:${paddedMinutes}:${paddedSeconds}`, accessibility };
  }

  const accessibility = `${days} ${daysOrDay} ${paddedHours} ${hoursOrHour} ${paddedMinutes} ${minutesOrMinute} and ${paddedSeconds} ${secondsOrSecond}`;
  if (isShort) {
    return {
      time: `${days}${t("time_units.short_days")} ${paddedHours}${t("time_units.short_hours")} ${paddedMinutes}${t(
        "time_units.short_minutes"
      )}`,
      accessibility,
    };
  }

  if (isMedium) {
    return {
      time: `${days}${t("time_units.short_days")} ${paddedHours}${t("time_units.short_hours")} ${paddedMinutes}${t(
        "time_units.short_minutes"
      )} ${paddedSeconds}${t("time_units.short_seconds")}`,
      accessibility,
    };
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
  const clonedTime = time.clone().locale("en");

  const shortFormat = days
    ? `${days}${t("time_units.short_days")}`
    : clonedTime
        .fromNow()
        .replace(/an hour/i, `1${t("time_units.short_hours")}`)
        .replace(/ hours/i, t("time_units.short_hours"))
        .replace(/a minute/i, `1${t("time_units.short_minutes")}`)
        .replace(/ minutes/i, t("time_units.short_minutes"))
        .replace(/ a few seconds/, `<1${t("time_units.short_minutes")}`)
        .replace(/in/i, "")
        .replace(/a day/i, `1${t("time_units.short_day")}`);

  const longFormat = days
    ? `${days}${t("time_units.days")}`
    : clonedTime
        .fromNow()
        .replace(/an hour/i, `1 ${t("time_units.hour")}`)
        .replace(/ hours/i, t("time_units.hours"))
        .replace(/a minute/i, `1 ${t("time_units.minute")}`)
        .replace(/ minutes/i, t("time_units.minutes"))
        .replace(/ a few seconds/, t("time_units.less_than_minute"))
        .replace(/in/i, "")
        .replace(/a day/i, `1 ${t("time_units.day")}`);

  return { shortFormat, longFormat };
};

export const getTimeUntil = (nextAvailable: number) => {
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

export const getMomentDateTime = (date?: string | Date) => (date ? parseZone(date) : moment());

export const getDateTimeWithoutTzAsUtc = (date?: string | Date) => getMomentDateTime(date).utcOffset(0, true);

export const getDaysBetweenDates = (startDate: string | Date, endDate: string | Date) => {
  const start = getDateTimeWithoutTzAsUtc(startDate).startOf("day");
  const end = getDateTimeWithoutTzAsUtc(endDate).startOf("day");
  return Math.abs(end.diff(start, "days"));
};
