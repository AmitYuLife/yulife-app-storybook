import { CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target } from "@graphql/_core/schema";
import moment from "moment";

export const DATE_FORMAT_WITH_TZ = "YYYY-MM-DDTHH:mm:ssZ";
export const DATE_FORMAT_WITHOUT_TZ = "YYYY-MM-DDTHH:mm:ss";

type PathOr = <T>(obj: { [x: string]: any }, key: string | string[], defaultValue?: T, p?: number) => T | any;
export const pathOr: PathOr = (obj, key, def, p) => {
  p = 0;
  key = Array.isArray(key) ? key : key.split(".");
  while (obj && p < key.length) {
    obj = obj[key[p++]];
  }
  return obj === undefined || p < key.length ? def : obj;
};

export function padNum(x: number, sliceIndex: number = -2) {
  return `0${x}`.slice(sliceIndex);
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getCurrentWorld(currentLevel: number) {
  return Math.floor((currentLevel - 1) / 50);
}

const WORLD_IMAGES = [
  { image: require("../../assets/yuscreen/worlds/forest.png") },
  { image: require("../../assets/yuscreen/worlds/ocean.png") },
  { image: require("../../assets/yuscreen/worlds/desert.png") },
  { image: require("../../assets/yuscreen/worlds/mountain.png") },
];
const WORLD_COLORS = ["#3C9172", "#04387A", "#B26330", "#FF96A3"];
const WORLD_NAME = ["Forest", "Ocean", "Desert", "Mountain"];

export function getCurrentWorldImage(currentWorld: number) {
  return WORLD_IMAGES[currentWorld].image ?? WORLD_IMAGES[0].image;
}

export function getCurrentWorldTextColor(currentWorld: number) {
  return WORLD_COLORS[currentWorld] ?? "#3C9172";
}

export function getCurrentWorldText(currentWorld: number) {
  return WORLD_NAME[currentWorld] ?? "Forest";
}

export function getUnitTarget(
  subtype: string
): keyof CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target {
  switch (subtype) {
    case "meditation":
      return "meditation";
    case "cycling":
      return "distance";
    default:
      return "steps";
  }
}

export function getCurrentEpisode(currentLevel: number) {
  if (currentLevel % 50 === 0) {
    return (currentLevel / 50) * 8 - 1;
  }
  if (currentLevel <= 49) {
    return Math.floor((currentLevel - 1) / 7);
  }
  if (
    (currentLevel >= 51 && currentLevel <= 99) ||
    (currentLevel >= 101 && currentLevel <= 149) ||
    (currentLevel >= 151 && currentLevel <= 199)
  ) {
    return (
      Math.floor((currentLevel - 1 - Math.floor((currentLevel - 1) / 50) * 50) / 7) + getCurrentWorld(currentLevel) * 8
    );
  }
}

export function getQueryStringObject(fullUrl: string) {
  const urlArray = fullUrl.split("?");
  const url = urlArray[1] || urlArray[0];
  const properties = url.split("&");
  const result: any = {};

  for (const property of properties) {
    const pair = property.split("=");
    result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return result;
}

export function getTimeRemaining(nextAvailableAt: string) {
  return `${getTime(Math.abs(moment().diff(moment(nextAvailableAt), "seconds")))}`;
}

export function getTime(nextAvailable: number) {
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

  if (days < 1 && hours < 1 && minutes < 1) {
    return `:${paddedSeconds}`;
  }

  if (days < 1 && hours < 1) {
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  if (days < 1) {
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  const daysOrDay = days > 1 ? "days" : "day";

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

export function getMomentStringWithTz(date: string) {
  const hasTimezone = date.length === 25;

  return hasTimezone
    ? moment.parseZone(date).format(DATE_FORMAT_WITH_TZ)
    : moment(date, DATE_FORMAT_WITHOUT_TZ).format(DATE_FORMAT_WITH_TZ);
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

export function toCapitalLetter(str: string) {
  try {
    const splitedArray = str.toLowerCase().trim().split(" ");

    for (let i = 0, x = splitedArray.length; i < x; i++) {
      splitedArray[i] = !splitedArray[i][0]
        ? splitedArray[i]
        : splitedArray[i][0].toUpperCase() + splitedArray[i]?.substr(1);
    }

    return splitedArray.join(" ");
  } catch (e) {
    return str;
  }
}

export const truncate = (str: string, chars = 30) => {
  if (!str) {
    return "";
  }
  if (str.length <= chars) {
    return str;
  }
  return `${str.substr(0, chars)}...`;
};
