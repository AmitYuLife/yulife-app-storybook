import { getNormalizedLevel } from "@utils";
import { Colours } from "@styles";
import { QuestsMapLevel } from "../../quests.context";
import { getWorldColor } from "./level.content";
import { getWorldBubbleColours } from "./worldBubbleColors";

interface IButtonColours {
  backgroundColour: string;
  notificationColour?: string;
}

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
        return "#E8AAFE";
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
    const backgroundColour = getActiveLevelBackgroundColor({
      isPending: nextAvailable < 0,
    });
    return {
      backgroundColour,
      notificationColour: Colours.neutral.white,
    };
  }

  if (level.isDone) {
    return {
      backgroundColour: getWorldBubbleColours()[normalizedWorld].notAvailable,
      notificationColour: worldColor,
    };
  }

  return {
    backgroundColour: getWorldBubbleColours()[normalizedWorld].available,
    notificationColour: worldColor,
  };
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

function getActiveLevelBackgroundColor({ isPending }: { isPending: boolean }) {
  return isPending ? Colours.neutral.n20 : "rgb(226, 1, 119)";
}
