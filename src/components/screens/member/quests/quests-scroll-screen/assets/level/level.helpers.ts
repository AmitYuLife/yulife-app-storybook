import { padNum } from "@services/utils";
import { Style } from "../../../../../../../styles";
import { IChallenge } from "../../quests-screen";
import { IMapSlice } from "../slices";

interface IBubbleColours {
  [x: number]: {
    [x: number]: {
      available: string;
      notAvailable: string;
    };
  };
}

interface IPosition {
  left: number;
  bottom?: number;
  top?: number;
}

const worldBubbleColours: IBubbleColours = {
  0: {
    0: {
      available: "white",
      notAvailable: "rgb(93, 182, 138)",
    },
    1: {
      available: "white",
      notAvailable: "rgb(142, 225, 178)",
    },
    2: {
      available: "rgb(253, 234, 56)",
      notAvailable: "rgb(253, 249, 193)",
    },
    3: {
      available: "white",
      notAvailable: "rgb(93, 182, 138)",
    },
    4: {
      available: "white",
      notAvailable: "rgb(93, 182, 138)",
    },
    5: {
      available: "white",
      notAvailable: "rgb(93, 182, 138)",
    },
    6: {
      available: "white",
      notAvailable: "rgb(236, 210, 25)",
    },
    7: {
      available: "white",
      notAvailable: "rgb(255, 222, 20)",
    },
  },
  1: {
    0: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    1: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    2: {
      available: "rgb(253, 233, 57)",
      notAvailable: "rgb(254, 248, 185)",
    },
    3: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    4: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    5: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    6: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
    7: {
      available: "white",
      notAvailable: "rgb(66, 120, 165)",
    },
  },
  2: {
    0: {
      available: "white",
      notAvailable: "rgb(223,191,81)",
    },
    1: {
      available: "white",
      notAvailable: "rgb(223,191,81)",
    },
    2: {
      available: "white",
      notAvailable: "rgb(181,221,239)",
    },
    3: {
      available: "white",
      notAvailable: "rgb(231,204,98)",
    },
    4: {
      available: "white",
      notAvailable: "rgb(231,204,98)",
    },
    5: {
      available: "white",
      notAvailable: "rgb(207,162,67)",
    },
    6: {
      available: "white",
      notAvailable: "rgb(207,162,67)",
    },
    7: {
      available: "white",
      notAvailable: "rgb(252,178,113)",
    },
  },
  3: {
    0: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    1: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    2: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    3: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    4: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    5: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    6: { available: "white", notAvailable: "rgb(158, 199, 243)" },
    7: { available: "white", notAvailable: "rgb(158, 199, 243)" },
  },
};

export function getBackgroundColor(nextAvailable: number, level: IChallenge): string {
  // time for more of that fucking awful logic

  if (level.level % 50 === 0) {
    return level.isDone || level.isActive || level.isNext ? "rgb(226, 1, 119)" : "white";
  } else if (level.isActive) {
    // current level colour is always the same
    return nextAvailable < 0 ? "rgb(145,0,76)" : "rgb(226, 1, 119)";
  } else {
    const world = Math.floor((level.level - 1) / 50);
    const episode = Math.floor(((level.level - 1) % 50) / 7);

    if (level.isDone) {
      return worldBubbleColours[world][episode].notAvailable;
    } else {
      return worldBubbleColours[world][episode].available;
    }
  }
}

export function getShadowColor(level: number) {
  const newStyle = {
    backgroundColor: "",
  };
  switch (true) {
    case level > 21 && level < 27:
      newStyle.backgroundColor = "white";
      break;
    case level === 17 || (level > 18 && level < 22):
      newStyle.backgroundColor = "rgb(253, 236, 75)";
      break;
    default:
      return null;
  }

  return newStyle;
}

export function getShadowPosition(style: any) {
  let newStyle = {
    position: "absolute" as "absolute",
  };
  if (typeof style.top !== "undefined") {
    newStyle = { ...style, top: style.top - Style.SCALE_UP_AND_DOWN(2) };
  } else if (typeof style.bottom !== "undefined") {
    newStyle = { ...style, bottom: style.bottom + Style.SCALE_UP_AND_DOWN(2) };
  }

  return newStyle;
}

export function getButtonPosition(slice: IMapSlice, index: number, isPulse?: boolean) {
  const highDensityRepositionValue = Style.PIXEL_RATIO >= 3 && !isPulse ? Style.SCALE_UP_AND_DOWN(10) : 0;
  const record = slice.slots[index];
  const style: IPosition = {
    left: Style.SCALE_UP_AND_DOWN(record.left) - highDensityRepositionValue,
  };

  if (typeof record.bottom !== "undefined") {
    style.bottom = Style.SCALE_UP_AND_DOWN(record.bottom) - highDensityRepositionValue;
  } else if (typeof record.top !== "undefined") {
    style.top = Style.SCALE_UP_AND_DOWN(record.top) - highDensityRepositionValue;
  } else {
    style.bottom = 0;
  }

  return style;
}

export function getTime(nextAvailable: number) {
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
  } else if (hours < 1) {
    return `${paddedMinutes}:${paddedSeconds}`;
  } else {
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
}
