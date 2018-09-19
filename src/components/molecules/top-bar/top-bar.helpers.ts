export const formatSeconds = (secondsRemaining: number): string => {
    const days = Math.floor(secondsRemaining / 86400);
    secondsRemaining = secondsRemaining % 86400;

    const hours = Math.floor(secondsRemaining / 3600).toString().padStart(2, "0");
    secondsRemaining = secondsRemaining % 3600;

    const minutes = Math.floor(secondsRemaining / 60).toString().padStart(2, "0");
    const seconds = (secondsRemaining % 60).toString().padStart(2, "0");

    if (days) {
        return `> ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours !== "00") {
        return `${hours}:${minutes}:${seconds}`;
    } else if (seconds) {
        return `${minutes}:${seconds}`;
    }

    return "--:--";
};
