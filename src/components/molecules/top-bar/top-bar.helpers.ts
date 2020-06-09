import { padNum } from "@services/utils";
import { Colours } from "@styles/index";
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
    case "mountain":
      return {
        colour: "rgb(51, 51, 51)",
        logoColour: "rgb(51, 51, 51)",
        textStyle: { color: "rgb(51, 51, 51)" },
      };
    case "desert":
      return {
        colour: "rgb(108,59,38)",
        logoColour: "rgb(108,59,38)",
        textStyle: { color: "rgb(108,59,38)" },
      };
    case "forest":
      return {
        colour: "rgb(51, 88, 66)",
        logoColour: "rgb(51, 88, 66)",
        textStyle: { color: "rgb(51, 88, 66)" },
      };
    case "white":
      return {
        colour: "#FFF",
        logoColour: "#FFF",
        textStyle: { color: "white" },
      };
    default:
      return {
        colour: "#333333",
        logoColour: Colours.darkHotPink,
        textStyle: { color: "#333333" },
      };
  }
}
