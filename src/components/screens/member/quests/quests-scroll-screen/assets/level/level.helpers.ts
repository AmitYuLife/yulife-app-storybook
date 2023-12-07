import { getNormalizedLevel } from "@utils";
import { Colours, Style } from "@styles";
import { QuestsMapLevel } from "../../quests.context";
import { IMapSlice } from "../slices";
import { getWorldColor } from "./level.content";
import { HIGH_DENSITY_REPOSITION_VALUE } from "./level.styles";

interface IBubbleColours {
  [x: number]: {
    available: string;
    notAvailable: string;
  };
}

interface IPosition {
  left: number;
  bottom?: number;
  top?: number;
}

interface IButtonColours {
  backgroundColour: string;
  notificationColour?: string;
}

const worldBubbleColours: IBubbleColours = {
  0: {
    available: "white",
    notAvailable: "#8BFFDC",
  },

  1: {
    available: "white",
    notAvailable: "#7CEFFF",
  },

  2: {
    available: "white",
    notAvailable: "#FFB7A0",
  },
  3: {
    available: "white",
    notAvailable: "#F2A1FF",
  },
};

function getGemColor(level: QuestsMapLevel) {
  if (level.isDone || level.isActive || level.isNext) {
    switch (level.level % 200) {
      case 50:
        return "#8DE0B0";
      case 100:
        return "#80DAEF";
      case 150:
        return "#FA906A";
      case 0:
        return "#FFD2DB";
      default:
        return "white";
    }
  }

  return "white";
}

export function getButtonColours(
  nextAvailable: number,
  level: QuestsMapLevel,
  normalizedWorld: number
): IButtonColours {
  const worldColor = getWorldColor(getNormalizedLevel(level.level))?.color;

  if (level.level % 50 === 0) {
    return {
      backgroundColour: getGemColor(level),
    };
  }

  if (level.isActive) {
    // current level colour is always the same
    const backgroundColour = nextAvailable < 0 ? "rgb(145,0,76)" : "rgb(226, 1, 119)";
    return {
      backgroundColour,
      notificationColour: Colours.neutral.white,
    };
  }

  if (level.isDone) {
    return {
      backgroundColour: worldBubbleColours[normalizedWorld].notAvailable,
      notificationColour: worldColor,
    };
  }

  return {
    backgroundColour: worldBubbleColours[normalizedWorld].available,
    notificationColour: worldColor,
  };
}

export function getButtonPosition(slots: IMapSlice["slots"], index: number, isPulse?: boolean) {
  const adjustment = isPulse ? 0 : HIGH_DENSITY_REPOSITION_VALUE;
  const record = slots[index];
  const style: IPosition = {
    left: Style.SCALE_UP_AND_DOWN(record.left) - adjustment,
  };

  if (typeof record.bottom !== "undefined") {
    style.bottom = Style.SCALE_UP_AND_DOWN(record.bottom) - adjustment;
  } else if (typeof record.top !== "undefined") {
    style.top = Style.SCALE_UP_AND_DOWN(record.top) - adjustment;
  } else {
    style.bottom = 0;
  }

  return style;
}

export function getPulseColor(level: number) {
  switch (level) {
    case 50:
      return "#00ED9D";
    case 100:
      return "#BEE9F3";
    case 150:
      return "#FA906A";
    case 200:
      return "#FFD2DB";
    default:
      return "rgb(145,0,76)";
  }
}

export const isHistoricalLevel = (level: QuestsMapLevel) => level.isDone && !level.isActive;
export const isActiveLevelWithNotification = (level: QuestsMapLevel) => level.isActive && !!level.notificationIcon;
