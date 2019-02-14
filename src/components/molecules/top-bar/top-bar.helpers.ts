import { padNum } from "@services/utils";
import { TopBarTypes } from "./top-bar";

export function formatSeconds(secondsRemaining: number): string {
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
}

export function getStyle(type: TopBarTypes) {
    switch (type) {
        case "desert":
            return {
                colour: "rgb(108,59,38)",
                logoColour: "rgb(108,59,38)",
                textStyle: { color: "rgb(108,59,38)" }
            };
        case "white":
            return {
                colour: "#FFF",
                logoColour: "#FFF",
                textStyle: { color: "white" }
            };
        case "demo":
        default:
            return {
                colour: "#333333",
                logoColour: "#E20177",
                textStyle: { color: "#333333" }
            };
    }
}
