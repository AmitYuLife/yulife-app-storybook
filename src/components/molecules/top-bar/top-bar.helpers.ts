import { padNum } from "../../../services/utils";

export const formatSeconds = (secondsRemaining: number): string => {
    const days = Math.floor(secondsRemaining / 86400);
    const hours = Math.floor(secondsRemaining / (60 * 60)) % 24;
    const minutes = Math.floor(secondsRemaining / 60) % 60;
    const seconds = secondsRemaining % 60;

    if (days) {
        return `> ${days} day${days > 1 ? "s" : ""}`;
    }

    const paddedHours = padNum(hours);
    const paddedMinutes = padNum(minutes);
    const paddedSeconds = padNum(seconds);

    if (hours < 1) {
        return `${paddedMinutes}:${paddedSeconds}`;
    }

    if (seconds) {
        return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }

    return "--:--";
};
