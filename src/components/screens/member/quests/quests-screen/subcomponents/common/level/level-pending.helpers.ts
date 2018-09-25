import { padNum } from "../../../../../../../../services/utils";

export const getTime = (nextAvailable: number) => {
    const hours =
        Math.floor(nextAvailable / (60 * 60)) % 24;
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
    } else if (hours < 1) {
        return `${paddedMinutes}:${paddedSeconds}`;
    } else {
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }
};
