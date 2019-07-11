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
    } else if (days < 1 && hours < 1) {
        return `${paddedMinutes}:${paddedSeconds}`;
    } else if (days < 1) {
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    } else {
        const daysOrDay = days > 1 ? "days" : "day";
        return `${days} ${daysOrDay} and ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }
}

export function displaySecondsAsMinutes(amount: number): { minutes: number; seconds: number } {
    const minutes = Math.floor(amount / 60);
    const seconds = amount % 60;

    return {
        minutes,
        seconds
    };
}

export function getMomentStringWithTz(date: string) {
    const hasTimezone = date.length === 25;

    return hasTimezone
        ? moment.parseZone(date).format(DATE_FORMAT_WITH_TZ)
        : moment(date, DATE_FORMAT_WITHOUT_TZ).format(DATE_FORMAT_WITH_TZ);
}
